<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Rating_venue extends Model
{
    use HasFactory;
    protected $fillable = [
        'id_rater',
        'id_rated',
        'rating',
        'comment',
    ];

}
