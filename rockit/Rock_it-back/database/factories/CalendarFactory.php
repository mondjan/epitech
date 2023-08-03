<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Calendar>
 */
class CalendarFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'id_artist' => fake()->numberBetween($min = 1, $max = 10) ,
            'id_venue' => fake()->numberBetween($min = 1, $max = 10) ,
            'start_time' => fake()->dateTime(),
            'end_time' => fake()->dateTime(),


            'date'=> fake()->dateTime(),        ];
    }
}
