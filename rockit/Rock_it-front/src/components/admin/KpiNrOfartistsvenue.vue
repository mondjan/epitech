<script setup>
import axios from 'axios'
import { ref } from 'vue'
import { Doughnut } from 'vue-chartjs'
import {
  Chart as ChartJS,
  ArcElement,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
} from 'chart.js'

ChartJS.register(ArcElement, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)
const loading = ref('true')
const data = {
  labels: ['artists', 'venues'],
  datasets: [
    {
      label: 'My First Dataset',
      data: [],
      backgroundColor: ['rgb(255, 99, 132)', 'rgb(54, 162, 235)'],
      hoverOffset: 4
    }
  ]
}

axios
  .get('http://127.0.0.1:8000/api/artists')
  .then((response) => {
    let artists = response.data.length

    data.datasets[0].data.push(artists)
    console.log(data.datasets[0].data)
  })
  .catch((error) => {
    // toaster.error('check login error')
    console.log(error)
  })
axios
  .get('http://127.0.0.1:8000/api/venues')
  .then((response) => {
    let venues = response.data.length

    data.datasets[0].data.push(venues)
    loading.value = false
    console.log(data.datasets[0].data)
    console.log(loading)
  })
  .catch((error) => {
    // toaster.error('check login error')
    console.log(error)
  })
</script>
<template>
  <button @click="console.log(data.datasets[0].data)">test</button>
  <div v-for="test in artists">{{ test.id }}</div>
  <div v-if="loading == false">
    <Doughnut id="my-chart-id" :data="data"></Doughnut>
  </div>
</template>
