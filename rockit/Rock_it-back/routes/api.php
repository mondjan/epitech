<?php

use Aerni\Spotify\SpotifyAuth;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\VenueController;
use App\Http\Controllers\ArtistController;
use App\Http\Controllers\GenreController;
use App\Http\Controllers\CalendarController;
use App\Http\Controllers\SpotifyRequestController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\Pivot_genreController;
use App\Http\Controllers\QuotationController;
use App\Http\Controllers\Rating_venueController;





// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });
Route::get("/",function(){
    return [
        "succes"=>true,
        "message"=>"hey",
        "data"=>[
            "service"=>"test"
            ]
        ];
    }
);

// SPOTIFY CLIENT CREDENTIALS REQUEST
Route::post('/token/store', [SpotifyRequestController::class, 'storeTokens']);

//VENUES
Route::get("/venues", [VenueController::class,'displayAllVenues']);

Route::get("/venuebyname/{name}", [VenueController::class,'displayAllByVenues']);
Route::post("/venue", [VenueController::class,'storeVenues']);
Route::post("/admin", [VenueController::class,'storeadmin']);
Route::put("/venue/{id}", [VenueController::class,'editOneVenue']);
Route::delete("/venue/{id}", [VenueController::class,'deleteVenue']);


// Route::get("/venues/genre", [VenueController::class,'displayAllVenues']);

// Route::get("/venues/rating", [VenueController::class,'displayAllVenues']);

Route::get("/user/{api_token}", [ArtistController::class,'displayuserbytoken']);
Route::get("/search/{name}", [ArtistController::class,'searchbar']);

//ARTISTS

Route::get("/artists", [ArtistController::class,'displayAllArtists']);
Route::get("/artistbyid/{id}", [ArtistController::class,'displayAllByIDArtists']);
Route::get("/artistbyname/{name}", [ArtistController::class,'displayAllByArtists']);
Route::get("/adminbyname/{name}", [ArtistController::class,'displayAllByAdmin']);
Route::post("/artist", [ArtistController::class,'storeArtists']);
Route::put("/artist/{id}", [ArtistController::class,'editOneArtist']);
Route::delete("/artist/{id}", [ArtistController::class,'deleteArtist']);

Route::get("/{user_id}/comments", [Rating_venueController::class,'getcomments']);
Route::post("/comment", [Rating_venueController::class,'postcomments']);

// Route::get("/comment/{id}", [VenueController::class,'displayAllVenues']);
// Route::put("/comment{id}", [VenueController::class,'displayAllVenues']);
// Route::delete("/comment{id}", [VenueController::class,'displayAllVenues']);

Route::get("/artist/genre/{genre}", [ArtistController::class,'displayAllByGenreArtists']);

// Route::get("/artists/rating", [VenueController::class,'displayAllVenues']);




//quotes

Route::get("/quotes/calendarArtist/{id}", [QuotationController::class,'calendarforArtist']);
Route::get("/quotes/refusedArtist/{id}", [QuotationController::class,'refusedquotesArtist']);
Route::get("/quotes/pendingArtist/{id}", [QuotationController::class,'pendingQuotesArtist']);

Route::get("/quotes/calendarVenue/{id}", [QuotationController::class,'calendarforVenue']);
Route::get("/quotes/refusedVenue/{id}", [QuotationController::class,'refusedquotesVenue']);
Route::get("/quotes/pendingVenue/{id}", [QuotationController::class,'pendingQuotesVenue']);

Route::get("/quotes/artist/{id}", [QuotationController::class,'displayAllquotesArtist']);
Route::get("/quotes/venue/{id}", [QuotationController::class,'displayAllquotesVenue']);

Route::get("/quote/{id}", [QuotationController::class,'displayoneQuotation']);
Route::post("/quote", [QuotationController::class,'storeQuotes']);
Route::put("/quote/{id}", [QuotationController::class,'editQuotes']);
Route::delete("/quote/{id}", [QuotationController::class,'deleteQuotes']);




//genre
Route::get("/genres", [GenreController::class,'displayAllGenres']);

Route::get("/genre/{id}", [GenreController::class,'displayAllByGenres']);
Route::post("/genres", [GenreController::class,'storeGenres']);
Route::put("/genre/{id}", [GenreController::class,'editOneGenre']);
Route::delete("/genre/{id}", [GenreController::class,'deleteGenre']);


Route::get("/pivot_genre", [Pivot_genreController::class,'getGenresPivot']);
Route::post("/pivot_genre", [Pivot_genreController::class,'postGenresPivot']);
//out of order
Route::delete("/pivot_genre/{id_user}/{id_genre}", [Pivot_genreController::class,'deleteGenresPivot']);


//calender

// Route::get("/calendar", [CalendarController::class,'displayAllCalendars']);

// Route::get("/calendar/{date}", [CalendarController::class,'displayAllByDateCalendars']);
// Route::get("/calendar/artist/{artist}", [CalendarController::class,'displayAllByArtistCalendars']);
// Route::get("/calendar/venue/{venue}", [CalendarController::class,'displayAllByVenueCalendars']);
// // Route::get("/calendar/{id}", [CalendarController::class,'displayOneCalendars']);
// Route::post("/calendar", [CalendarController::class,'StoreCalendars']);
// Route::put("/calendar/{id}", [CalendarController::class,'editOneCalendars']);
// Route::delete("/calendar/{id}", [CalendarController::class,'deleteCalendars']);

Route::post("/register", [AuthController::class,'register']);
Route::post("/login", [AuthController::class,'login']);

Route::get("/KPI2/{month}", [QuotationController::class,'getkpi2']);
Route::post("/user/crud", [VenueController::class,'crud']);
