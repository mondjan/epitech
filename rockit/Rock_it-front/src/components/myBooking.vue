<script setup>
import axios from 'axios'
import { ref } from 'vue'

const pendingRequests = ref([])
const acceptedRequests = ref([])
const deniedRequests = ref([])

const userType = localStorage.getItem('role')
const Id = localStorage.getItem('id')

// Récupérer les demandes de réservation en attente
axios
  .get(`http://127.0.0.1:8000/api/quotes/pendingArtist/` + Id)
  .then((response) => {
    pendingRequests.value = response.data
    console.log(pendingRequests)
  })
  .catch((error) => {
    console.error(error)
  })

// Récupérer les demandes de réservation acceptées
axios
  .get(`http://127.0.0.1:8000/api/quotes/calendarArtist/` + Id)
  .then((response) => {
    acceptedRequests.value = response.data
    console.log(acceptedRequests)
  })
  .catch((error) => {
    console.error(error)
  })

// Récupérer les demandes de réservation terminées
axios
  .get(`http://127.0.0.1:8000/api/quotes/refusedArtist/` + Id)
  .then((response) => {
    deniedRequests.value = response.data
    console.log(completedRequests)
  })
  .catch((error) => {
    console.error(error)
  })
</script>

<template>
  <div v-if="userType == 'artist'">
    <div class="flex flex-col h-98 bg-black font-verdana text-[#FFFFFF]">
      <div class="flex-1/3 h-full">
        <h2 class="h-full flex items-center justify-center text-[#FFFFFF] text-2xl font-bold">
          Pending request
        </h2>
        <div
          v-if="pendingRequests.length == 0"
          class="h-full flex items-center justify-center text-white border-2 rounded-lg bg-[#2F2A2D]"
        >
          Aucune demande de réservation en attente.
        </div>

        <div v-else class="h-full p-4 overflow-y-auto">
          <div v-for="request in pendingRequests" :key="request.id" class="relative mb-4">
            <router-link :to="'/request/' + request.id" class="block">
              <div
                class="bg-[#2F2A2D] p-4 rounded-lg grid grid-cols-3 flex-row justify-between items-start"
              >
                <p class="text-[#FFFFFF] col-span-1">{{ request.id_artist }}</p>

                <div class="mt-2 col-span-1">
                  <span>Time: {{ request.start_time }} à {{ request.end_time }}</span> <br />
                  <span>Date:{{ request.date }}</span> <br />
                  <span>Arrival: 2 houres before</span>
                </div>
                <div class="col-span-1">
                  <span>Status:</span> <span class="text-[#FF1FE6]"> Pending</span>
                </div>
              </div>
            </router-link>
          </div>
        </div>
      </div>
      <div class="flex-1/3">
        <h2 class="h-full flex items-center justify-center text-[#FFFFFF] text-2xl font-bold">
          Accepted request
        </h2>
        <div
          v-if="acceptedRequests.length == 0"
          class="h-full flex items-center justify-center text-white border-2 rounded-lg bg-[#2F2A2D]"
        >
          Aucune demande de réservation acceptée.
        </div>
        <div v-else class="h-full p-4 overflow-y-auto">
          <div v-for="request in acceptedRequests" :key="request.id" class="relative mb-4">
            <router-link :to="'/request/' + request.id" class="block">
              <div
                class="bg-[#2F2A2D] p-4 rounded-lg grid grid-cols-3 flex-row justify-between items-start"
              >
                <p class="text-[#FFFFFF] col-span-1">{{ request.id_artist }}</p>
                <div class="mt-2 col-span-1">
                  <span>Time:{{ request.start_time }}</span>
                  <span>Date:{{ request.date }}</span>
                  <span>Arrival: 2 houres before</span>
                  <div class="col-span-1">
                    <span>Status:</span> <span class="text-[#8FD694]"> Accepted</span>
                  </div>
                  <!-- <span>Payment:<a v-if="request.payment_status == 0" class="text-[#DF1BCA]">Initiated</a>
                 <a v-else-if="request.payment_status == 1" class="text-[#8FD694]">Complete</a></span> -->
                </div>
              </div>
            </router-link>
          </div>
        </div>
      </div>
      <div class="flex-1/3">
        <h2 class="h-full flex items-center justify-center text-[#FFFFFF] text-2xl font-bold">
          Denied request
        </h2>
        <div
          v-if="deniedRequests.length == 0"
          class="h-full flex items-center justify-center text-white border-2 rounded-lg bg-[#2F2A2D]"
        >
          Aucune demande de réservation refusée.
        </div>
        <div v-else class="h-full p-4 overflow-y-auto">
          <div v-for="request in deniedRequests" :key="request.id" class="relative mb-4">
            <router-link :to="'/request/' + request.id" class="block">
              <div
                class="bg-[#2F2A2D] p-4 rounded-lg grid grid-cols-3 flex-row justify-between items-start"
              >
                <p class="text-[#FFFFFF] col-span-1">{{ request.id_artist }}</p>
                <div class="mt-2 col-span-1">
                  <span>Time:{{ request.start_time }}</span>
                  <span>Date:{{ request.date }}</span>
                  <span>Arrival: 2 houres before</span>
                  <div class="col-span-1">
                    <span>Status:</span> <span class="text-[#FF5666]"> Refused</span>
                  </div>
                </div>
              </div>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div v-else>
    <div class="flex flex-col h-98 bg-black font-verdana text-[#FFFFFF]">
      <div class="flex-1/3 h-full">
        <h2 class="h-full flex items-center justify-center text-[#FFFFFF] text-2xl font-bold">
          Pending request
        </h2>
        <div
          v-if="pendingRequests.length == 0"
          class="h-full flex items-center justify-center text-white border-2 rounded-lg bg-[#2F2A2D]"
        >
          Aucune demande de réservation en attente.
        </div>
        <div v-else class="h-full p-4 overflow-y-auto">
          <div v-for="request in pendingRequests" :key="request.id" class="relative mb-4">
            <router-link :to="'/quotation/' + request.id" class="block">
              <div
                class="bg-[#2F2A2D] p-4 rounded-lg grid grid-cols-3 flex-row justify-between items-start"
              >
                <p class="text-[#FFFFFF] col-span-1">{{ request.id_venue }}</p>
                <div class="mt-2 col-span-1">
                  <span>Time:{{ request.start_time }}</span>
                  <span>Date:{{ request.date }}</span>
                  <span>Arrival: 2 houres before</span>
                  <div class="col-span-1">
                    <span>Status:</span> <span class="text-[#FF1FE6]"> Pending</span>
                  </div>
                </div>
              </div>
            </router-link>
          </div>
        </div>
      </div>
      <div class="flex-1/3">
        <h2 class="h-full flex items-center justify-center text-[#FFFFFF] text-2xl font-bold">
          Accepted request
        </h2>
        <div
          v-if="acceptedRequests.length == 0"
          class="h-full flex items-center justify-center text-white border-2 rounded-lg bg-[#2F2A2D]"
        >
          Aucune demande de réservation acceptée.
        </div>
        <div v-else class="h-full p-4 overflow-y-auto">
          <div v-for="request in acceptedRequests" :key="request.id" class="relative mb-4">
            <router-link :to="'/quotation/' + request.id" class="block">
              <div
                class="bg-[#2F2A2D] p-4 rounded-lg grid grid-cols-3 flex-row justify-between items-start"
              >
                <p class="text-[#FFFFFF] col-span-1">{{ request.id_venue }}</p>
                <div class="mt-2 col-span-1">
                  <span>Time:{{ request.start_time }}</span>
                  <span>Date:{{ request.date }}</span>
                  <span>Arrival: 2 houres before</span>
                  <div class="col-span-1">
                    <span>Status:</span> <span class="text-[#8FD694]"> Accepted</span>
                  </div>
                  <!-- <span>Payment:<a v-if="request.payment_status == 0">Initiated</a>
                 <a v-else-if="request.payment_status == 1">Completed</a></span> -->
                </div>
              </div>
            </router-link>
          </div>
        </div>
      </div>
      <div class="flex-1/3">
        <h2 class="h-full flex items-center justify-center text-[#FFFFFF] text-2xl font-bold">
          Denied request
        </h2>
        <div
          v-if="deniedRequests.length == 0"
          class="h-full flex items-center justify-center text-white border-2 rounded-lg bg-[#2F2A2D]"
        >
          Aucune demande de réservation refusée.
        </div>
        <div v-else class="h-full p-4 overflow-y-auto">
          <div v-for="request in deniedRequests" :key="request.id" class="relative mb-4">
            <router-link :to="'/quotation/' + request.id" class="block">
              <div
                class="bg-[#2F2A2D] p-4 rounded-lg grid grid-cols-3 flex-row justify-between items-start"
              >
                <p class="text-[#FFFFFF] col-span-1">{{ request.id_venue }}</p>
                <div class="mt-2 col-span-1">
                  <span>Time:{{ request.start_time }}</span>
                  <span>Date:{{ request.date }}</span>
                  <span>Arrival: 2 houres before</span>
                  <div class="col-span-1">
                    <span>Status:</span> <span class="text-[#FF5666]"> Refused</span>
                  </div>
                  <!-- <span>Payment:<a v-if="request.payment_status == 0">Initiated</a>
                 <a v-else-if="request.payment_status == 1">Completed</a></span> -->
                </div>
              </div>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
