<script setup>
import axios from 'axios'
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import { createToaster } from '@meforma/vue-toaster'
const toaster = createToaster()

const route = useRoute()

const name = ref('')
const about = ref('')
const email = ref('')
const password = ref('')
const spotify = ref('')
const banner = ref('')
const role = ref('')

function create() {
  console.log(email)
  axios
    .post(
      'http://127.0.0.1:8000/api/user/crud?name=' +
        name.value +
        '&email=' +
        email.value +
        '&password=' +
        password.value +
        '&banner=' +
        banner.value +
        '&spotify=' +
        spotify.value +
        '&about=' +
        about.value +
        '&role=' +
        role.value
    )
    .then((response) => {
      console.log(response.data)
      // Handle the response and update the necessary variables or UI elements
      toaster.success('it worked')
    })
    .catch((error) => {
      console.log(error)
      toaster.error('something went wronf')
    })
}
</script>

<template>
  <div class="absolute bg-[#2F2A2D] rounded-lg p-20 m-5 border-white top-28">
    <p class="text-xl text-white mb-5">CREATE PROFILE</p>

    <div class="m-5">
      <label class="text-white font-semibold mb-2" for="about">name</label>
      <input
        v-model="name"
        class="bg-[#272526] text-white w-724 h-119 rounded-5 ml-4"
        type="text"
        id="name"
        name="name"
        placeholder="... what is your name ..."
      />
    </div>
    <div class="m-5">
      <label class="text-white font-semibold mb-2" for="about">password</label>
      <input
        v-model="password"
        class="bg-[#272526] text-white w-724 h-119 rounded-5 ml-4"
        type="text"
        id="name"
        name="name"
        placeholder="... what is your password ..."
      />
    </div>
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
    </div>
    <div class="m-5">
      <label class="text-white font-semibold mb-2" for="banner">role</label>
      <input
        v-model="role"
        class="bg-[#272526] text-white w-724 h-119 rounded-5 ml-4"
        type="text"
        id="banner"
        name="banner"
        placeholder="... role ? ..."
      />
    </div>

    <!-- Repeat the same pattern for other fields -->
    <button @click="create()" class="bottom-10 right-20 bg-pink-500">submit</button>
  </div>
</template>
