<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use OpenApi\Annotations as OA;
/**
 * @group ARTIST 
 * 
 * APIs to manage the Artists.
 */

class ArtistController extends Controller
{

    public function displayuserbytoken($api_token)
    {
        $artist = User::select('*')
        ->where('api_token',$api_token)

            ->firstOrFail();
        return response()->json($artist);
    }

    public function searchbar($name)
    {
        $artist = User::select('*')
        ->where('name','LIKE', $name.'%')

            ->get();
        return response()->json($artist);
    }

    /**
     * Display all Artists
     */

    public function displayAllArtists(){
        $venues = User::select('*')
        ->where('role','artist')

        // ->join('pivot_genres', 'artists.id', '=', 'pivot_genres.id_artist')
        // ->join('genres', 'pivot_genres.id_genre', '=', 'genres.id')

        ->get();
        return response()->json($venues);
    }

    public function displayAllByArtists($name)
    {
            /**
     * Display an Artist by name
     */

        $venues = User::select('*')
        ->where('role','artist')
        ->where('name',$name)
        ->get();
        return response()->json($venues);
    }
    public function displayAllByAdmin($name)
    {
            /**
     * Display an Artist by name
     */

        $venues = User::select('*')
        ->where('role','admin')
        ->where('name',$name)
        ->get();
        return response()->json($venues);
    }

    public function displayAllByIDArtists($id)
    {
            /**
     * Display an Artist by name
     */

        $artist = User::select('*')
        ->where('role','artist')

        
        ->where('id',$id)
        ->get();
        return response()->json($artist);
    }

public function storeArtists(Request $request)
{
    User::create([
        "name"=>$request->name,
        "email"=>$request->email,
        "password"=>bcrypt($request->password),
        "banner"=>$request->banner,
        "spotify"=>$request->spotify,
        "about"=>$request->about,
        "role"=>'artist'



    ]);
    return User::all()->where('name',$request->name)->values();
}

public function editOneArtist(Request $request, $id)
{
    $artist = User::where('id', $id)->firstOrFail();

    $artist->update($request->all());
    return $artist;
}

public function deleteArtist(Request $request,$id)
{
    $artist = User::select('*')
    ->where('role','artist')
    ->where('id', $id)
    ->firstOrFail();
    $artist->delete($request->all());

    return $artist;
}


public function displayAllByGenreArtists($genre)
{
    $artists = User::select('*')
    ->where('role','artist')

        ->join('pivot_genres', 'users.id', '=', 'pivot_genres.id_user')
        ->join('genres', 'pivot_genres.id_genre', '=', 'genres.id')
        ->where('genres.id', $genre)
        ->get();



    return response()->json($artists);
}




}