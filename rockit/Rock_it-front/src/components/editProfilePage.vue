<script setup>
import axios from 'axios'
import { ref } from 'vue'
import { useRoute, } from 'vue-router'

const route = useRoute()
const role = "artist";

const about = ref('')
const email = ref('')
const adress = ref('')
const genres = ref('')
const spotify = ref('')
const banner = ref('')

function updateProfile(type) {
  const id = route.params.id
let data ={}
  switch(type) {

  case "about":
  data = {
    about: about.value,}
    console.log("about")
  break;

  case "email":
  data = {
    email: email.value,}   
    console.log("email") 
  break;
  
  case "adress":
  data = {
    adress: adress.value,}   
    console.log("adress") 
  break;

  case "spotify":
  const spotifyUrl = spotify.value;
  const urlParts = spotifyUrl.split('/');
  const trackPrototype = urlParts[urlParts.length - 2];
  const trackId = trackPrototype.split('?')[0];
  data = {
    spotify: trackId,
  };
  console.log("spotify:", trackId);
  break;


  case "banner":
  data = {
    banner: banner.value,}   
    console.log("banner") 
  break;

  default:
    // code block
}     

  
  console.log(data)

  axios
    .put(`http://127.0.0.1:8000/api/${role}/${id}`, data)
    .then(response => {
      console.log(response.data)
      // Handle the response and update the necessary variables or UI elements
    })
    .catch(error => {
      console.log(error)
    })
}
</script>

<template>
  <div class="absolute bg-[#2F2A2D] rounded-lg p-20 m-5 border-white top-28">
    <p class="text-xl text-white mb-5">EDIT PROFILE</p>

    <div class="m-5">
      <label class="text-white font-semibold mb-2" for="about">About</label>
      <input
        v-model="about"
        class="bg-[#272526] text-white w-724 h-119 rounded-5 ml-4"
        type="text"
        id="about"
        name="about"
        placeholder="... Tell us about you ..."
      />
      <button @click="updateProfile('about')" class="ml-4 bg-pink-500 text-white py-2 px-4 rounded" type="button">Edit</button>
    </div>

    <div class="m-5">
      <label class="text-white font-semibold mb-2" for="email">Email</label>
      <input
        v-model="email"
        class="bg-[#272526] text-white w-724 h-37 rounded-5 ml-4"
        type="text"
        id="email"
        name="email"
        placeholder="... Email ?.."
      />
      <button @click="updateProfile('email')" class="ml-4 bg-pink-500 text-white py-2 px-4 rounded" type="button">Edit</button>
    </div>

    <div class="m-5">
      <label class="text-white font-semibold mb-2" for="adress">Adress</label>
      <input
        v-model="adress"
        class="bg-[#272526] text-white w-724 h-37 rounded-5 ml-4"
        type="text"
        id="adress"
        name="adress"
        placeholder="... Adress ?.."
      />
      <button @click="updateProfile('adress')" class="ml-4 bg-pink-500 text-white py-2 px-4 rounded" type="button">Edit</button>
    </div>

    <div class="m-5">
      <label class="text-white font-semibold mb-2" for="email">Genres</label>
      <input
        v-model="genres"
        class="bg-[#272526] text-white w-724 h-37 rounded-5 ml-4"
        type="text"
        id="genres"
        name="genres"
        placeholder="... Genres ?.."
      />
      <button @click="updateProfile('genres')" class="ml-4 bg-pink-500 text-white py-2 px-4 rounded" type="button">Edit</button>
    </div>

    <div class="m-5">
      <label class="text-white font-semibold mb-2" for="spotify">Spotify</label>
      <input
        v-model="spotify"
        class="bg-[#272526] text-white w-724 h-119 rounded-5 ml-4"
        type="text"
        id="spotify"
        name="spotify"
        placeholder="... Spotify embed link ? ..."
      />
      <button @click="updateProfile('spotify')" class="ml-4 bg-pink-500 text-white py-2 px-4 rounded" type="button">Edit</button>
    </div>

    <div class="m-5">
      <label class="text-white font-semibold mb-2" for="banner">Banner</label>
      <input
        v-model="banner"
        class="bg-[#272526] text-white w-724 h-119 rounded-5 ml-4"
        type="text"
        id="banner"
        name="banner"
        placeholder="... Banner picture ? ..."
      />
      <button @click="updateProfile(banner)" class="ml-4 bg-pink-500 text-white py-2 px-4 rounded" type="button">Edit</button>
    </div>

    <!-- Repeat the same pattern for other fields -->

    <RouterLink :to="`/profile/${route.params.id}`">
      <div class="bottom-10 right-20 bg-pink-500">
        <button class="text-white py-2 px-4 rounded" type="button">Cancel</button>
      </div>
    </RouterLink>

  </div>
</template>
