<?php

namespace App\Models;
use App\Models\Genre;


use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Pivot_genre extends Model
{
    use HasFactory;
    protected $fillable =['id_genre','id_user'];

    public function genre(): HasMany
    {
        return $this->hasMany(Genre::class);
    }
}
