<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class SpotifyRequestController extends Controller
{
    function storeTokens()
    {
        $response = Http::withHeaders([
            'Content-Type' => 'application/x-www-form-urlencoded',
            'Authorization' => 'Basic YmVkMGZhNWQ2MjJmNDc5ZThhZDc2ZTU0ODlhZTc0YTE6MWIzYTQ3MDU0OTgwNGNlZjlhY2M2MDI0MjI5ZDI5OGE=',
            'Cookie' => 'sp_t=fec5313cf18b3d7253bde891712d174a; __Host-device_id=AQDvL3Vt8Oo29Sw9b1rdfnpygBxSQDY88CerY_Ca_Hww_wM5Y4nZyHhddK8B_E57j3dk_jGYwqosE46-6irqTP8vTJ6gPMKUXSA; sp_tr=false',
        ])->asForm()->post('https://accounts.spotify.com/api/token', [
            'grant_type' => 'client_credentials',
        ]);
    
        $accessToken = $response->json('access_token');
    
        // Store the token in the .env file
        $envPath = app()->environmentFilePath();
        $currentEnv = file_get_contents($envPath);
        $updatedEnv = str_replace('SPOTIFY_ACCESS_TOKEN=', 'SPOTIFY_ACCESS_TOKEN=' . $accessToken, $currentEnv);
        file_put_contents($envPath, $updatedEnv);
    
        return $response;
        }
}
