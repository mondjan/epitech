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
        Schema::create('rating_venues', function (Blueprint $table) {
            $table->id();
            $table->integer("id_rater");
            $table->integer("id_rated");
            $table->integer("rating");
            $table->string("comment")->nullable();
            $table->foreign('id_rater')->references('id')->on('users')->onDelete('cascade');
            $table->foreign('id_rated')->references('id')->on('users')->onDelete('cascade');


            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('rating_venues');
    }
};
