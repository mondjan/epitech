<?php

namespace App\Models;
use App\Models\Pivot_genre;


use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Artist extends Model
{
    use HasFactory;
    protected $fillable =['name','email','password', "banner",'spotify','about'];

    public function pivot_genre(): HasMany
    {
        return $this->hasMany(Pivot_genre::class,"Pivot_genre","artist_id","genre_id");
    }
}
