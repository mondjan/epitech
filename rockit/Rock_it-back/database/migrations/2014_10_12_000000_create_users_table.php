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
        Schema::create('users', function (Blueprint $table) {
            $table->integer("id")->autoIncrement();
            $table->string('name')->unique();
            $table->string('email')->unique();
            $table->timestamp('email_verified_at')->nullable();
            $table->string('password');
            $table->string('role');
            $table->string('api_token')->nullable();
            $table->rememberToken();
            $table->timestamps();
            $table->string('banner')->default('https://res.cloudinary.com/didthhgmq/image/upload/v1685027516/letransbordeur_j0eiln.png');
            $table->string('spotify')->nullable();
            $table->string('about')->nullable();
            $table->string('adress')->nullable();
            $table->string('zip_code')->nullable();
            $table->string('city')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('users');
    }
};
