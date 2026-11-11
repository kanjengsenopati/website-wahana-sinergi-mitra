<?php

namespace App\Filament\Resources\Projects\Schemas;

use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Textarea;
use Filament\Forms\Components\Toggle;
use Filament\Schemas\Schema;

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
                TextInput::make('thumbnail_url')
                    ->url(),
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
