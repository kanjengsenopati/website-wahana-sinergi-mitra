<?php

namespace App\Models;

use App\Support\MediaStorage;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Project extends Model
{
    use HasFactory;

    protected $guarded = [];

    protected $casts = [
        'gallery_images' => 'array',
        'is_featured' => 'boolean',
        'project_value' => 'integer',
        'year' => 'integer',
        'order' => 'integer',
    ];

    protected static function booted(): void
    {
        static::saving(function (self $project): void {
            $project->thumbnail_url = MediaStorage::normalizeUrl($project->thumbnail_url);
        });

        static::updated(function (self $project): void {
            if ($project->wasChanged('thumbnail_url')) {
                MediaStorage::deleteIfUnused($project->getOriginal('thumbnail_url'));
            }
        });

        static::deleted(function (self $project): void {
            MediaStorage::deleteIfUnused($project->thumbnail_url);
        });
    }
}
