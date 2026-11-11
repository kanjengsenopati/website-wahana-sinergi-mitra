<?php

namespace App\Models;

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
}
