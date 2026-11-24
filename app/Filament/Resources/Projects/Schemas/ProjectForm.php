<?php

namespace App\Filament\Resources\Projects\Schemas;

use App\Support\MediaStorage;
use Filament\Forms\Components\FileUpload;
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
                TextInput::make('category')
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
                Textarea::make('gallery_images')
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
