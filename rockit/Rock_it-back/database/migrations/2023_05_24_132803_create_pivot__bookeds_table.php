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
        Schema::create('pivot__bookeds', function (Blueprint $table) {
            $table->integer("id_venue");
            $table->integer("id_artist");
            $table->timestamps();

            $table->foreign('id_venue')->references('id')->on('users')->onDelete('cascade');
            $table->foreign('id_artist')->references('id')->on('users')->onDelete('cascade');

        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('pivot__bookeds');
    }
};
