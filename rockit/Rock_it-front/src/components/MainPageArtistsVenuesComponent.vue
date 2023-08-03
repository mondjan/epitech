<script setup>
import { ref } from 'vue'
import axios from 'axios'
import { createToaster } from '@meforma/vue-toaster'
import { RouterLink } from 'vue-router'

const Lrole = localStorage.getItem('role')

const toaster = createToaster()
let data = ref()

if (Lrole == 'artist') {
  axios
    .get('http://127.0.0.1:8000/api/venues')
    .then((response) => {
      data.value = response.data
    })
    .catch((error) => {
      console.log(error)
    })
  // console.log (getAllVenues)

  //console.log (getAllVenues)
} else {
  axios
    .get('http://127.0.0.1:8000/api/artists')
    .then((response) => {
      data.value = response.data
    })
    .catch((error) => {
      console.log(error)
    })
}
</script>

<template>
  <div class="homePage">
    <div v-for="element in data" class="major">
      <RouterLink :to="`/profile/${element.id}`">
        <div class="displayArtistCards">
          <div class="card-body fl text-stone-300">
            {{ element.name }}
            <img :src="element.banner" />
          </div>
        </div>
      </RouterLink>
    </div>
  </div>
</template>
