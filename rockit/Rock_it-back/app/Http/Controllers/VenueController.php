<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;


class VenueController extends Controller
{
    public function displayAllVenues(){
        $venues = User::select('*')    
        ->where('role','venue')
        // ->join('pivot_genres', 'users.id', '=', 'pivot_genres.id_user')
        // ->join('genres', 'pivot_genres.id_genre', '=', 'genres.id')

        ->get();
        // ->paginate(20);
        return response()->json($venues);
    }

    public function displayAllByVenues($name)
    {
    $venue = User::select('*')
    ->where('role','venue')
    ->where('name', $name)
    ->get();
        return $venue;

    }

    public function storeVenues(Request $request)
    {
        User::create([
            "name"=>$request->name,
            "profile_picture"=>$request->profile_picture,
            "banner"=>$request->banner,
            "adress"=>$request->adress,
            "email"=>$request->email,
            "password"=>$request->bcrypt($request->password),
            "about"=>$request->about,
            "role"=>"venue",

    
    
    
        ]);
        return User::all()->where('name',$request->name)->values();
    }

    public function crud(Request $request)
    {
        User::create([
            "name"=>$request->name,
            "profile_picture"=>$request->profile_picture,
            "banner"=>$request->banner,
            "adress"=>$request->adress,
            "email"=>$request->email,
            "password"=>$request->password,
            "about"=>$request->about,
            "role"=>$request->role,

    
    
    
        ]);
        return User::all()->where('name',$request->name)->values();
    }
    public function storeadmin(Request $request)
    {
        User::create([
            "name"=>$request->name,
            "profile_picture"=>$request->profile_picture,
            "banner"=>$request->banner,
            "adress"=>$request->adress,
            "email"=>$request->email,
            "password"=>$request->password,
            "about"=>$request->about,
            "role"=>"admin",

    
    
    
        ]);
        return User::all()->where('name',$request->name)->values();
    }
    
    public function editOneVenue(Request $request, $id)
    {
        $venue = User::select('*')
        ->where('role','venue')
        ->where('id', $id)
        ->firstOrFail();
        
        $venue->update($request->all());
        return $venue;
    }
    
    public function deleteVenue(Request $request,$id)
{
    $venue = User::select('*')
    ->where('role','venue')
    ->where('id', $id)
    ->firstOrFail();
    $venue->delete($request->all());

    return $venue;
}

}