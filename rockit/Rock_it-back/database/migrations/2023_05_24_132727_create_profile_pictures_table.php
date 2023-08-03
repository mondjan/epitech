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
        Schema::create('profile_pictures', function (Blueprint $table) {
            $table->integer("id_user")->unique()->nullable();
            $table->char("photo_1")->nullable();
            $table->char("photo_2")->nullable();
            $table->char("photo_3")->nullable();
            $table->char("photo_4")->nullable();
            $table->char("photo_5")->nullable();
            $table->char("photo_6")->nullable();
            $table->char("photo_7")->nullable();
            $table->char("photo_8")->nullable();
            $table->char("photo_9")->nullable();
            $table->timestamps();

            $table->foreign('id_user')->references('id')->on('users')->onDelete('cascade');


            
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('profile_pictures');
    }
};
