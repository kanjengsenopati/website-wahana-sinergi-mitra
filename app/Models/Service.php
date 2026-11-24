<?php

namespace App\Models;

use App\Support\MediaStorage;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Service extends Model
{
    use HasFactory;

    protected $guarded = [];

    protected $casts = [
        'is_active' => 'boolean',
        'order' => 'integer',
    ];

    protected static function booted(): void
    {
        static::saving(function (self $service): void {
            $service->image_url = MediaStorage::normalizeUrl($service->image_url);
        });

        static::updated(function (self $service): void {
            if ($service->wasChanged('image_url')) {
                MediaStorage::deleteIfUnused($service->getOriginal('image_url'));
            }
        });

        static::deleted(function (self $service): void {
            MediaStorage::deleteIfUnused($service->image_url);
        });
    }
}
