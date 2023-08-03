<?php

namespace App\Http\Controllers;

use App\Models\Rating_venue;
use Illuminate\Http\Request;


class Rating_venueController extends Controller
{
    public function getcomments($user_id){
        $comments = Rating_venue::select('*')    
        ->where('id_rated',$user_id)
        ->get();
        return response()->json($comments);
    }

    public function postcomments(Request $request)
    {
        Rating_venue::create([
            "id_rater"=>$request->id_rater,
            "id_rated"=>$request->id_rated,
            "rating"=>$request->rating,
            "comment"=>$request->comment,   
        ]);
        return Rating_venue::all()->where('name',$request->name)->values();
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