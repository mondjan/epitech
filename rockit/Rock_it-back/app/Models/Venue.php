<?php

namespace App\Models;
use App\Models\Pivot_genre;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;


class Venue extends Model
{
    use HasFactory;
    protected $fillable =['name','profile_picture', "banner",'adress','email','password','about'];

    public function pivot_genre(): HasMany
    {
        return $this->hasMany(Pivot_genre::class);
    }

}
