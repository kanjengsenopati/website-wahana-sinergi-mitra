<?php

namespace App\Filament\Resources\Projects\Schemas;

use App\Models\Project;
use App\Support\MediaStorage;
use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Textarea;
use Filament\Forms\Components\Toggle;
use Filament\Schemas\Schema;
use Illuminate\Database\Eloquent\Model;

class ProjectForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                TextInput::make('title')
                    ->required(),
                TextInput::make('slug')
                    ->required(),
                Select::make('category')
                    ->label('Kategori Proyek')
                    ->options(function (?Model $record): array {
                        $options = Project::STANDARD_CATEGORIES;
                        $current = $record?->getAttribute('category');
                        if (is_string($current) && $current !== '' && !array_key_exists($current, $options)) {
                            $options[$current] = $current;
                        }

                        return $options;
                    })
                    ->searchable()
                    ->required()
                    ->default('Komersial'),
                TextInput::make('client_name'),
                TextInput::make('location')
                    ->required()
                    ->default('Indonesia'),
                TextInput::make('project_value')
                    ->numeric(),
                TextInput::make('year')
                    ->required()
                    ->numeric()
                    ->default(2025),
                FileUpload::make('thumbnail_url')
                    ->label('Foto Proyek (Thumbnail)')
                    ->image()
                    ->disk('public')
                    ->directory('uploads/projects')
                    ->visibility('public')
                    ->maxSize(5120)
                    ->acceptedFileTypes(['image/jpeg', 'image/png', 'image/webp', 'image/avif'])
                    ->formatStateUsing(fn (?string $state): ?string => MediaStorage::toPublicDiskPath($state))
                    ->dehydrateStateUsing(function (?string $state, ?Model $record): ?string {
                        if (filled($state)) {
                            return MediaStorage::normalizeUrl($state);
                        }

                        $existing = $record?->getAttribute('thumbnail_url');
                        if (filled($existing) && MediaStorage::toPublicDiskPath($existing) === null) {
                            return $existing;
                        }

                        return null;
                    })
                    ->helperText('Unggah foto JPG, PNG, WebP, atau AVIF (maks. 5 MB). Tersinkron otomatis dengan panel /admin.')
                    ->columnSpanFull(),
                FileUpload::make('gallery_images')
                    ->label('Galeri Dokumentasi Proyek (Maks. 12 Foto)')
                    ->image()
                    ->multiple()
                    ->reorderable()
                    ->appendFiles()
                    ->disk('public')
                    ->directory('uploads/projects')
                    ->visibility('public')
                    ->maxFiles(12)
                    ->maxSize(5120)
                    ->acceptedFileTypes(['image/jpeg', 'image/png', 'image/webp', 'image/avif'])
                    ->formatStateUsing(function (mixed $state): array {
                        $items = MediaStorage::normalizeGalleryItems($state, 12);
                        $paths = [];
                        foreach ($items as $item) {
                            $diskPath = MediaStorage::toPublicDiskPath($item['url']);
                            if ($diskPath !== null) {
                                $paths[] = $diskPath;
                            }
                        }

                        return $paths;
                    })
                    ->dehydrateStateUsing(function (mixed $state, ?Model $record): array {
                        $existingItems = MediaStorage::normalizeGalleryItems($record?->getAttribute('gallery_images'), 12);
                        $captionByUrl = [];
                        $externalItems = [];

                        foreach ($existingItems as $item) {
                            $captionByUrl[$item['url']] = $item['caption'];
                            if (MediaStorage::toPublicDiskPath($item['url']) === null) {
                                $externalItems[] = $item;
                            }
                        }

                        $result = $externalItems;
                        if (is_array($state)) {
                            foreach ($state as $entry) {
                                if (!is_string($entry) || trim($entry) === '') {
                                    continue;
                                }
                                $normalized = MediaStorage::normalizeUrl($entry);
                                if ($normalized !== null) {
                                    $result[] = [
                                        'url' => $normalized,
                                        'caption' => $captionByUrl[$normalized] ?? '',
                                    ];
                                }
                            }
                        }

                        return MediaStorage::normalizeGalleryItems($result, 12);
                    })
                    ->helperText('Unggah hingga 12 foto dokumentasi proyek (JPG, PNG, WebP, AVIF, maks. 5 MB/foto). Bisa diurutkan ulang dan tersinkron otomatis dengan /admin.')
                    ->columnSpanFull(),
                TextInput::make('status')
                    ->required()
                    ->default('Selesai'),
                Textarea::make('description')
                    ->columnSpanFull(),
                Toggle::make('is_featured')
                    ->required(),
                TextInput::make('order')
                    ->required()
                    ->numeric()
                    ->default(0),
            ]);
    }
}
