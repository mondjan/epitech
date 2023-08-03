<template>
  <div class="">
      <router-link
      to="/profilePageArtist"
      custom
      v-slot="{ navigate }">
        <button class=" relative right_09 bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded" @click="navigate"
        role="link">
         My profile
        </button>
      </router-link>
  </div>
  <div class="">
      <router-link
      to="/"
      custom
      v-slot="{ navigate }">
        <button class=" relative right_09 bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded" @click="navigate"
        role="link">
         My artists
        </button>
      </router-link>
  </div>
  <!-- <div class="">
      <router-link
      to="/myVenues"
      custom
      v-slot="{ navigate }">
        <button class=" relative right_09 bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded" @click="navigate"
        role="link">
         Future Request
        </button>
      </router-link>
  </div> -->
  <div class="">
      <router-link
      to="/myBookingforArtist"
      custom
      v-slot="{ navigate }">
        <button class=" relative right_09 bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded" @click="navigate"
        role="link">
         My booking
        </button>
      </router-link>
  </div>
  <!-- <div class="">
      <router-link
      to="/crud(artist)"
      custom
      v-slot="{ navigate }">
        <button class=" relative right_09 bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded" @click="navigate"
        role="link">
         Admin (CRUD artist)
        </button>
      </router-link>
  </div> -->
  <!-- <div class="">
      <router-link
      to="/(?)"
      custom
      v-slot="{ navigate }">
        <button class=" relative right_09 bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded" @click="navigate"
        role="link">
         Logout
        </button>
      </router-link>
  </div>
  </template> -->