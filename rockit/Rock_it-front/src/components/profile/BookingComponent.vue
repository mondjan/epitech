<script setup>
import { Calendar, DatePicker } from 'v-calendar'
import 'v-calendar/style.css'
import axios from 'axios'
import { useUserStore } from '../../store/UserStore'
import { useRoute } from 'vue-router'

import { ref } from 'vue'

const UserStore = useUserStore()
let route = useRoute()

let loading = true
const date = ref(new Date())

function fetchEvents() {
  let toISOString = ''
  let tsplit = []
  let dotsplit = []
  let output = ''
  toISOString = date._value.toISOString()
  tsplit = toISOString.split('T')
  dotsplit = tsplit[1].split('.')
  output = tsplit[0] + ' ' + dotsplit[0]
  localStorage.setItem('tsplitValue', tsplit[0])

  // console.log(tsplit[0])
}

fetchEvents()

let Takendates = []
axios
  .get('http://127.0.0.1:8000/api/quotes/calendarArtist/' + route.params.id)
  .then((response) => {
    // console.log(response.data)
    response.data.forEach((element) => {
      let datemp = ''
      let dates = []

      datemp = element.date
      dates = datemp.split('-')
      Takendates.push(new Date(dates[0], dates[1] - 1, dates[2]))
      // console.log(Takendates)
    })
    loading = false
  })
  .catch((error) => {
    // toaster.error('check login error')
    console.log(error)
  })

let attributes = ref([
  {
    highlight: {
      color: 'red',
      fillMode: 'solid',
      contentClass: 'italic'
    },
    dates: Takendates
  }
])
</script>

<template>
  <div class="card" v-if="loading == false">
    <DatePicker v-model="date" mode="date" @click="fetchEvents()" :attributes="attributes" />
    <div v-if="UserStore.isConnected">
      <RouterLink :to="'/quotation/' + route.params.id">book this date</RouterLink>
    </div>

    <div v-else>
      <button className="btn btn-primary " disabled="disabled">
        connect yourself to book this artist
      </button>
    </div>
  </div>
</template>
