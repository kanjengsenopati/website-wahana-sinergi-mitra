<?php

namespace App\Filament\Resources\Testimonials\Schemas;

use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Textarea;
use Filament\Forms\Components\Toggle;
use Filament\Schemas\Schema;

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
                TextInput::make('avatar_url')
                    ->url(),
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
