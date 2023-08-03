<script setup>
// import Quotation from '../components/modalQuotation.vue'
// import navBar from '../components/navBar.vue'
import axios from 'axios'
import router from '../router'

import Quotation from '../components/modalQuotation.vue'

// Fonction pour annuler une demande de réservation

// Fonction pour confirmer une demande de réservation
const confirmRequest = (requestId) => {
  axios
    .put(`http://127.0.0.1:8000/api/quotes/confirm/` + requestId)
    .then((response) => {
      console.log(response.data)
      // Mettre à jour la liste des demandes en attente
      pendingRequests.value = pendingRequests.value.filter((request) => request.id !== requestId)
      // Ajouter la demande confirmée à la liste des demandes acceptées
      acceptedRequests.value.push(response.data)
    })
    .catch((error) => {
      console.error(error)
    })
}

// Fonction pour envoyer une demande de réservation

// const creationNewQuotationArtist = () => {
//   const newId = result.insertId
//   // Récupérer les valeurs des inputs
//   const id_artist = localStorage.getItem('id')
//   // const address = document.getElementById('Adress').value;
//   // const postalCode = document.getElementById('Code').value;
//   // const city = document.getElementById('City').value;
//   const id_venue = document.getElementById('Organizer').value
//   const start_time = document.getElementById('StartTime').value
//   const end_time = document.getElementById('EndTime').value
//   const price = document.getElementById('Price').value

//   // Créer l'objet de données à envoyer
//   const dataquotationartist = {
//     id: newId,
//     id_venue,
//     // address,
//     // postalCode,
//     // city,
//     price,
//     id_artist,
//     start_time,
//     end_time,
//     servicePrice
//   }

//   res.json(newQuotation)

//   // Envoyer la requête POST à votre backend avec Axios
//   axios
//     .post('http://127.0.0.1:8000/api/quote', dataquotationartist)
//     .then((response) => {
//       // Réponse de la requête réussie
//       console.log(response.data)
//     })
//     .catch((error) => {
//       // Gérer les erreurs de la requête
//       console.error(error)
//     })
// }
// const creationNewQuotationOrganizer = () => {
//   const newId = result.insertId
//   // Récupérer les valeurs des inputs
//   const id_venue = localStorage.getItem('id')
//   // const address = document.getElementById('Adress').value;
//   // const postalCode = document.getElementById('Code').value;
//   // const city = document.getElementById('City').value;
//   const id_artist = document.getElementById('Artist').value
//   const start_time = document.getElementById('StartTime').value
//   const end_time = document.getElementById('EndTime').value
//   const price = document.getElementById('Price').value

//   // Créer l'objet de données à envoyer
//   const dataquotationOrganizer = {
//     id: newId,
//     id_venue,
//     // address,
//     // postalCode,
//     // city,
//     price,
//     id_artist,
//     start_time,
//     end_time,
//     servicePrice
//   }

//   res.json(newQuotation)

//   // Envoyer la requête POST à votre backend avec Axios
//   axios
//     .post('http://127.0.0.1:8000/api/quote', dataquotationOrganizer)
//     .then((response) => {
//       // Réponse de la requête réussie
//       console.log(response.data)
//     })
//     .catch((error) => {
//       // Gérer les erreurs de la requête
//       console.error(error)
//     })
// }
</script>

<template>
  <main class="">
    <div>
      <Quotation>
        <div class="flex justify-evenly">
          <div class="">
            <!-- <button
              class="left-01 bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
            >
              Refuse
            </button> -->
          </div>
          <div class="" v-if="userType == 'artist'">
            <!-- <button
              class="right_03 bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
              @click="creationNewQuotationArtist"
            >
              Confirm
            </button> -->
            <button
              @click="cancelRequest(request.id)"
              class="left-01 bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
            >
              Cancel
            </button>
            <button
              @click="confirmRequest(request.id)"
              class="left-01 bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
            >
              Confirm
            </button>
          </div>
          <div v-else>
            <!-- <button
              class="right_03 bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
              @click="creationNewQuotationOrganizer"
            >
              Confirm
            </button> -->
            <button
              @click="router.push('/')"
              class="left-01 bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
            >
              Cancel
            </button>
          </div>
        </div>
      </Quotation>
    </div>
  </main>
</template>

<style></style>
