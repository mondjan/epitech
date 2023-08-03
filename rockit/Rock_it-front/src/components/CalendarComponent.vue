<script setup>
import { Calendar, DatePicker } from 'v-calendar'
import 'v-calendar/style.css'

import { ref } from 'vue'

let artist_id = 5

const date = ref(new Date())
function fetchEvents() {
  let toISOString = ''
  let tsplit = []
  toISOString = date._value.toISOString()
  tsplit = toISOString.split('T')
  
  console.log(tsplit[0])
  localStorage.setItem('tsplitValue', tsplit[0])
}
fetchEvents()

let attributes = ref([
  {
    highlight: {
      color: 'red',
      fillMode: 'solid',
      contentClass: 'italic'
    },
    dates: [new Date(2023, 5, 11), new Date(2023, 5, 10), new Date(2018, 0, 22)]
  }
])


  



</script>

<template>
  <div class="">
    <DatePicker v-model="date" mode="date" @click="fetchEvents()" :attributes="attributes" />
    <router-link to="/quotation" >heya
  </router-link>
</div>
</template>
