<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Spotify extends Model
{
    use HasFactory;
    protected $fillable =["auth_code","access_token","refresh_token"];
}
