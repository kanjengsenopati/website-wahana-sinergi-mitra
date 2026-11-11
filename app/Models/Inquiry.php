<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Inquiry extends Model
{
    use HasFactory;

    protected $guarded = [];

    protected $casts = [
        'estimated_budget' => 'integer',
        'building_area_m2' => 'integer',
    ];
}
