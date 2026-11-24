<?php

namespace App\Filament\Resources\Services\Schemas;

use App\Support\MediaStorage;
use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Textarea;
use Filament\Forms\Components\Toggle;
use Filament\Schemas\Schema;
use Illuminate\Database\Eloquent\Model;

class ServiceForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                TextInput::make('title')
                    ->required(),
                TextInput::make('slug')
                    ->required(),
                TextInput::make('icon')
                    ->required()
                    ->default('Building2'),
                FileUpload::make('image_url')
                    ->label('Foto Banner Layanan')
                    ->image()
                    ->disk('public')
                    ->directory('uploads/services')
                    ->visibility('public')
                    ->maxSize(5120)
                    ->acceptedFileTypes(['image/jpeg', 'image/png', 'image/webp', 'image/avif'])
                    ->formatStateUsing(fn (?string $state): ?string => MediaStorage::toPublicDiskPath($state))
                    ->dehydrateStateUsing(function (?string $state, ?Model $record): ?string {
                        if (filled($state)) {
                            return MediaStorage::normalizeUrl($state);
                        }

                        $existing = $record?->getAttribute('image_url');
                        if (filled($existing) && MediaStorage::toPublicDiskPath($existing) === null) {
                            return $existing;
                        }

                        return null;
                    })
                    ->helperText('Unggah foto JPG, PNG, WebP, atau AVIF (maks. 5 MB). Tersinkron otomatis dengan panel /admin.')
                    ->columnSpanFull(),
                Textarea::make('short_description')
                    ->required()
                    ->columnSpanFull(),
                Textarea::make('full_description')
                    ->columnSpanFull(),
                TextInput::make('order')
                    ->required()
                    ->numeric()
                    ->default(0),
                Toggle::make('is_active')
                    ->required(),
            ]);
    }
}
