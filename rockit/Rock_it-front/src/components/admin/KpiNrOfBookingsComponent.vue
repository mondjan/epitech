<script setup>
import axios from 'axios'
import { ref } from 'vue'
import { Bar } from 'vue-chartjs'
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
} from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)
const loading = ref('true')
const data = {
  labels: [
    'jan',
    'feb',
    'march',
    'april',
    'may',
    'jun',
    'jul',
    'aug',
    'sept',
    'okt',
    ' nov',
    'dec'
  ],
  datasets: [
    {
      label: 'My First Dataset',
      data: [],
      backgroundColor: ['rgb(255, 99, 132)', 'rgb(54, 162, 235)']
    }
  ]
}
let I = 0
while (I < 12) {
  I++
  let month = ''
  if (I < 10) {
    month = '0' + I
  } else {
    month = I
  }
  await axios
    .get('http://127.0.0.1:8000/api/KPI2/' + month)
    .then((response) => {
      data.datasets[0].data.push(response.data.length)
    })
    .catch((error) => {
      // toaster.error('check login error')
      //   console.log(error)
    })
  console.log(month)
  if (month == '12') {
    console.log('hey', month)
    loading.value = false
    console.log(data.datasets[0].data)
  }
}
</script>
<template>
  <div v-if="loading == false" class="w-100%">
    <Bar id="my-chart-id" :data="data"></Bar>
  </div>
</template>
