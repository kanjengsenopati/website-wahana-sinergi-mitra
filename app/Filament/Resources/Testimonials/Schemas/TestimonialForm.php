<?php

namespace App\Filament\Resources\Testimonials\Schemas;

use App\Support\MediaStorage;
use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Textarea;
use Filament\Forms\Components\Toggle;
use Filament\Schemas\Schema;
use Illuminate\Database\Eloquent\Model;

class TestimonialForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                TextInput::make('client_name')
                    ->required(),
                TextInput::make('client_role'),
                TextInput::make('company_name'),
                FileUpload::make('avatar_url')
                    ->label('Foto Avatar Klien')
                    ->image()
                    ->avatar()
                    ->disk('public')
                    ->directory('uploads/testimonials')
                    ->visibility('public')
                    ->maxSize(5120)
                    ->acceptedFileTypes(['image/jpeg', 'image/png', 'image/webp', 'image/avif'])
                    ->formatStateUsing(fn (?string $state): ?string => MediaStorage::toPublicDiskPath($state))
                    ->dehydrateStateUsing(function (?string $state, ?Model $record): ?string {
                        if (filled($state)) {
                            return MediaStorage::normalizeUrl($state);
                        }

                        $existing = $record?->getAttribute('avatar_url');
                        if (filled($existing) && MediaStorage::toPublicDiskPath($existing) === null) {
                            return $existing;
                        }

                        return null;
                    })
                    ->helperText('Unggah foto avatar klien (JPG, PNG, WebP, AVIF, maks. 5 MB).'),
                Textarea::make('content')
                    ->required()
                    ->columnSpanFull(),
                TextInput::make('rating')
                    ->required()
                    ->numeric()
                    ->default(5),
                TextInput::make('project_name'),
                Toggle::make('is_active')
                    ->required(),
                TextInput::make('order')
                    ->required()
                    ->numeric()
                    ->default(0),
            ]);
    }
}
