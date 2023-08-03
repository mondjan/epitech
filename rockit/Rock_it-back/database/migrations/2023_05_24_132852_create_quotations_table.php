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
        Schema::create('quotations', function (Blueprint $table) {
            $table->id();
            $table->integer("id_artist");
            $table->integer("id_venue");
            $table->date("date");
            $table->timestamp("start_time");
            $table->timestamp("end_time");

            $table->integer("status")->default('1');
            $table->boolean("payment_status")->default('0');

            $table->integer("price")->nullable();
            $table->timestamps();


            $table->foreign('id_artist')->references('id')->on('users')->onDelete('cascade');
            $table->foreign('id_venue')->references('id')->on('users')->onDelete('cascade');

        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('quotations');
    }
};
