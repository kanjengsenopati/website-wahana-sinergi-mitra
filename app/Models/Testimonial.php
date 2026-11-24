<?php

namespace App\Models;

use App\Support\MediaStorage;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Testimonial extends Model
{
    use HasFactory;

    protected $guarded = [];

    protected $casts = [
        'rating' => 'integer',
        'is_active' => 'boolean',
        'order' => 'integer',
    ];

    protected static function booted(): void
    {
        static::saving(function (self $testimonial): void {
            $testimonial->avatar_url = MediaStorage::normalizeUrl($testimonial->avatar_url);
        });

        static::updated(function (self $testimonial): void {
            if ($testimonial->wasChanged('avatar_url')) {
                MediaStorage::deleteIfUnused($testimonial->getOriginal('avatar_url'));
            }
        });

        static::deleted(function (self $testimonial): void {
            MediaStorage::deleteIfUnused($testimonial->avatar_url);
        });
    }
}
