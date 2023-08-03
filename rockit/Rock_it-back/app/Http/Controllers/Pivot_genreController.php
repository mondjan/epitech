<?php

namespace App\Http\Controllers;

use App\Models\Pivot_genre;
use Illuminate\Http\Request;


class Pivot_genreController extends Controller
{
    public function getGenresPivot(){
        $genres = Pivot_genre::select('*')->get();
        return response()->json($genres);
    }
    public function postGenresPivot(Request $request){
        Pivot_genre::create([
            "id_genre"=>$request->id_genre,
            "id_user"=>$request->id_genre,
    
    
    
        ]);
        return Pivot_genre::all()->where('id_genre',$request->id_genre)->where('id_user',$request->id_user)->values();

    }

    public function deleteGenresPivot(Request $request, $id_user ,$id_genre)
    {
        $genre = Pivot_genre::all()
        ->where('id_user', $id_user)
        ->where('id_genre', $id_genre)
        ->firstOrFail();
    
        $genre->delete($request->all());
        return $genre;
    }
    

    
}