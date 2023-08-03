<?php

namespace App\Http\Controllers;

use App\Models\Genre;
use Illuminate\Http\Request;


class GenreController extends Controller
{
    public function displayAllGenres(){
        $genres = Genre::select('*')->get();
        // ->paginate(20);
        return response()->json($genres);
    }

    public function displayAllByGenres($id)
    {
        $genres = Genre::where('id',$id)->get();
        return response()->json($genres);

    }


    public function storeGenres(Request $request)
    {
        Genre::create([
            "genre"=>$request->genre,
    
    
    
        ]);
        return Genre::all()->where('name',$request->name)->values();
    }

    public function editOneGenre(Request $request, $id)
{
    $genre = Genre::where('id', $id)->firstOrFail();

    $genre->update($request->all());
    return $genre;
}

public function deleteGenre(Request $request,$id)
{
    $genre = Genre::where('id', $id)->firstOrFail();
    $genre->delete($request->all());

    return $genre;
}
}