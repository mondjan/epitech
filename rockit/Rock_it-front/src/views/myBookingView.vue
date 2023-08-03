<script setup>
import NavBarComponent from '../components/NavBarComponent.vue'
import { ref } from 'vue'
import axios from 'axios'

const userType = localStorage.getItem('role')
const Id = 1
// const Id = localStorage.getItem('id');

const id_artist = ref(0)
const id_venue = ref(0)
const date = ref('')
const start_time = ref('')
const end_time = ref('')
const status = ref(0)
const price = ref(0)

async function Quotes() {
  await axios
    .get(`http://127.0.0.1:8000/api/quotes/pendingArtist/` + Id)
    .then((response) => {
      id_artist.value = response.data.id_artist
      id_venue.value = response.data.id_venue
      ;(date.value = response.data.date),
        (start_time = response.data.start_time),
        (end_time = response.data.end_time),
        (status = response.data.status),
        (price = response.data.price),
        console.log(pendingRequests)
    })
    .catch((error) => {
      console.error(error)
    })
}

Quotes()
</script>

<template>
  <header>
    <NavBarComponent />
  </header>

  <main>
    <div class="pending_ctnr">
      <Booking :name="name" />
    </div>
  </main>
</template>
