<?php

namespace App\Http\Controllers;

use App\Models\Quotation;
use Illuminate\Http\Request;


class QuotationController extends Controller
{
    public function calendarforArtist($id){
        $calendars = Quotation::select('*')
        ->where('id_artist',$id)
        ->where('status' , '2')
        ->get();
        // ->paginate(20);
        return response()->json($calendars);
    }
    public function refusedquotesArtist($id){
        $calendars = Quotation::select('*')
        ->where('id_artist',$id)
        ->where('status' , '0')
        ->get();
        // ->paginate(20);
        return response()->json($calendars);
    }
    public function pendingQuotesArtist($id){
        $calendars = Quotation::select('*')
        ->where('id_artist',$id)
        ->where('status' , '1')
        ->get();
        // ->paginate(20);
        return response()->json($calendars);
    }
    public function calendarforVenue($id){
        $calendars = Quotation::select('*')
        ->where('id_venue',$id)
        ->where('status' , '2')
        ->get();
        // ->paginate(20);
        return response()->json($calendars);
    }
    public function refusedquotesVenue($id){
        $calendars = Quotation::select('*')
        ->where('id_venue',$id)
        ->where('status' , '0')
        ->get();
        // ->paginate(20);
        return response()->json($calendars);
    }
    public function pendingQuotesVenue($id){
        $calendars = Quotation::select('*')
        ->where('id_venue',$id)
        ->where('status' , '1')
        ->get();
        // ->paginate(20);
        return response()->json($calendars);
    }

    public function displayAllquotesArtist($id){
        $calendars = Quotation::select('*')->where('id_artist',$id)->get();
        // ->paginate(20);
        return response()->json($calendars);
    }

    public function displayAllquotesVenue($id){
        $calendars = Quotation::select('*')->where('id_venue',$id)->get();
        // ->paginate(20);
        return response()->json($calendars);
    }

        public function displayoneQuotation($id)
    {
        $calendars = Quotation::where('id',$id)->get();
        return response()->json($calendars);

    }



    public function storeQuotes(Request $request)
    {
        Quotation::create([
            "id_artist"=>$request->id_artist,
            "id_venue"=>$request->id_venue,
            "date"=>$request->date,
            "start_time"=>"2023-05-31 15:20:56",
            "end_time"=>"2023-05-31 15:20:56",

        ]);
        return Quotation::all()->where('name',$request->name)->values();
    }

    public function editQuotes(Request $request, $id)
{
    $calendar = Quotation::where('id', $id)->firstOrFail();

    $calendar->update($request->all());
    return $calendar;
}

public function deleteQuotes(Request $request,$id)
{
    $calendar = Quotation::where('id', $id)->firstOrFail();
    $calendar->delete($request->all());

    return $calendar;
}
public function getkpi2($month){
    $calendars = Quotation::select('*')
    ->where('status' , '2')
    ->where('date', 'like', '2023-'.$month .'%')
    ->get();
    // ->paginate(20);
    return response()->json($calendars);
}
}