<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('social_networks', function (Blueprint $table) {
            $table->integer("id_user")->nullable();
            $table->char("facebook")->nullable();
            $table->char("instagram")->nullable();
            $table->char("youtube")->nullable();
            $table->char("spotify")->nullable();
            $table->char("twitter")->nullable();
        
            $table->foreign('id_user')->references('id')->on('users')->onDelete('cascade');

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('social_etworks');
    }
};
