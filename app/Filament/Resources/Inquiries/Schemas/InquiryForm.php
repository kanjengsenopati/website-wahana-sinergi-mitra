<?php

namespace App\Filament\Resources\Inquiries\Schemas;

use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Textarea;
use Filament\Schemas\Schema;

class InquiryForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                TextInput::make('client_name')
                    ->required(),
                TextInput::make('phone_wa')
                    ->tel()
                    ->required(),
                TextInput::make('email')
                    ->label('Email address')
                    ->email(),
                TextInput::make('project_type')
                    ->required()
                    ->default('Komersial'),
                TextInput::make('estimated_budget')
                    ->numeric(),
                TextInput::make('building_area_m2')
                    ->numeric(),
                TextInput::make('location'),
                Textarea::make('message')
                    ->columnSpanFull(),
                TextInput::make('status')
                    ->required()
                    ->default('Baru'),
                Textarea::make('internal_notes')
                    ->columnSpanFull(),
            ]);
    }
}
