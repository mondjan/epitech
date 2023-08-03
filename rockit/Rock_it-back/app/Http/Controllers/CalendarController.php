<?php

namespace App\Http\Controllers;

use App\Models\Calendar;
use Illuminate\Http\Request;


class CalendarController extends Controller
{
    public function displayAllCalendars(){
        $calendars = Calendar::select('*')->get();
        // ->paginate(20);
        return response()->json($calendars);
    }

    public function displayAllByDateCalendars($date)
    {
        $calendars = Calendar::where('date',$date)->get();
        return response()->json($calendars);

    }

        public function displayAllByArtistCalendars($artist)
    {
        $calendars = Calendar::where('id_artist',$artist)->get();
        return response()->json($calendars);

    }

        public function displayAllByVenueCalendars($venue)
    {
        $calendars = Calendar::where('id_venue',$venue)->get();
        return response()->json($calendars);

    }



    public function storeCalendars(Request $request)
    {
        Calendar::create([
            "id_artist"=>$request->id_artist,
            "id_venue"=>$request->id_venue,
            "date"=>$request->date,
            "start_time"=>$request->start_time,
            "end_time"=>$request->end_time,

        ]);
        return Calendar::all()->where('name',$request->name)->values();
    }

    public function editOneCalendar(Request $request, $id)
{
    $calendar = Calendar::where('id', $id)->firstOrFail();

    $calendar->update($request->all());
    return $calendar;
}

public function deleteCalendar(Request $request,$id)
{
    $calendar = Calendar::where('id', $id)->firstOrFail();
    $calendar->delete($request->all());

    return $calendar;
}
}