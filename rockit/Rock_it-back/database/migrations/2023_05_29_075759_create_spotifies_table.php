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
        Schema::create('spotifies', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table->integer("id_artist")->nullable();
            $table->integer("id_venue")->nullable();
            $table->string('auth_code')->nullable();
            $table->string('access_token')->nullable();
            $table->string('refresh_token')->nullable();       
            
            $table->foreign('id_artist')->references('id')->on('users')->onDelete('cascade');
            $table->foreign('id_venue')->references('id')->on('users')->onDelete('cascade');
 
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('spotifies');
    }
};
