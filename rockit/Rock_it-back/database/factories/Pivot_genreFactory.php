<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Pivot_genre>
 */
class Pivot_genreFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'id_user' => fake()->numberBetween($min = 1, $max = 10) ,
            'id_genre' => fake()->numberBetween($min = 1, $max = 10) ,

        ];
    }
}
