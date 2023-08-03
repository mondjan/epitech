<script setup>
import { ref } from 'vue'

import axios from 'axios'

import { useRoute } from 'vue-router'
const tsplitValue = localStorage.getItem('tsplitValue')
const storedName = localStorage.getItem('name') // Récupère le nom de l'utilisateur à partir du localStorage
const storedID = localStorage.getItem('id') // Récupère le nom de l'utilisateur à partir du localStorage
const route = useRoute()
const artistId = route.params.id
const quote = ref('')
const Lid = localStorage.getItem('id')

const nameInput = ref(tsplitValue)

// const artist = ref('')
// let route = useRoute()

axios
  .get('http://127.0.0.1:8000/api/quote/' + route.params.id)
  .then((response) => {
    quote.value = response.data[0]
    console.log(quote)
    console.log(quote.status)
  })
  .catch((error) => {
    // toaster.error('check login error')
    console.log(error)
  })

function accept() {
  axios
    .put('http://127.0.0.1:8000/api/quote/' + route.params.id + '?status=2')
    .then((response) => {
      console.log(response.data)
    })
    .catch((error) => {
      console.error(error)
    })
}
function refuse() {
  axios
    .put('http://127.0.0.1:8000/api/quote/' + route.params.id + '?status=0')

    .then((response) => {
      console.log(response.data)
    })
    .catch((error) => {
      console.error(error)
    })
}
</script>

<template>
  <div class="flex justify-center items-center h-screen">
    <div
      class="absolute rounded-lg p-25 m-10 border-white w-635 h-947 top-108 bg-gray-300 rounded-10 grid grid-cols-2 gap-1"
    >
      <div class="m-10 w-410 h-424">
        <p class="quotation">QUOTATION</p>

        <div>
          <label class="labelDevis" for="Organizer">Organizer</label>
          <input class="enter" type="text" id="Organizer" v-model="storedName" readonly />
        </div>
        <br />
        <div>
          <label class="labelDevis" for="date">Desired service date</label>
          <input class="enter" type="text" id="date" name="date" v-model="tsplitValue" readonly />
        </div>
        <br />

        <div class="listservice">
          <label class="labelDevis" for="Place">Place of services</label>
          <input class="enter" type="text" id="Adress" name="Adress" placeholder="Postal Adress" />
          <input class="enter" type="text" id="Code" name="Code" placeholder="Postal Code" />
          <input class="enter" type="text" id="City" name="City" placeholder="City" />
        </div>

        <br />

        <div>
          <label class="labelDevis" for="Total">Total</label>
          <input class="entertotal" type="text" id="Price" name="Total" placeholder="Price(€)" />
        </div>

        <div class="m-10 w-440 h-424">
          <br />
          <br />
          <br />
          <br />
          <div>
            <label class="labelDevis" for="Artist">To the attention of the Artist</label>
            <input class="enter" type="text" id="Artist" name="Artist" readonly />
          </div>
          <br />

          <br />

          <div>
            <label class="labelDevis" for="Price">Price of the service</label>
            <input class="enter" type="text" id="Price" name="Price" placeholder="Price(€)" />
          </div>
          <br />
          <div>
            <p class="text-black" style="font-style: italic">
              The Artist has to be on the spot at least 2 hours before the event.<br /><br /><br />
              Artist has to be paid when the organizer and the Artist have both agreed to the
              contract.
            </p>
          </div>
          <button
            @click="refuse()"
            class="left-01 bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
          >
            refuse
          </button>
          <button
            @click="accept()"
            class="left-01 bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
          >
            accept
          </button>
        </div>
        <slot />
      </div>
    </div>
  </div>
</template>

<style>
.quotation {
  width: 878px;
  height: 72px;
  left: 86px;
  top: 17px;
  border-bottom: 1px solid black;
  margin-bottom: 5px;

  font-family: 'Verdana';
  font-style: normal;
  font-weight: 700;
  font-size: 25px;
  line-height: 30px;
  display: flex;
  align-items: center;

  color: #000000;
}
.enter {
  width: 415.9px;
  height: 46.37px;
  left: 549.57px;
  top: 214.38px;

  background: rgba(0, 0, 0, 0.25);
  border: 1px solid #ffffff;
  border-radius: 6px;
}
.labelDevis {
  width: 415px;
  height: 26px;
  left: 89px;
  top: 183px;

  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 19px;
  line-height: 23px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid black;
  margin-bottom: 5px;

  color: #4a4a4a;
}
.listservice {
  display: flex;
  flex-direction: column;
}
.entertotal {
  width: 393px;
  height: 34px;
  left: 89px;
  top: 607px;
  filter: brightness(0.85);
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 19px;
  line-height: 23px;
  display: flex;
  align-items: center;

  color: rgba(0, 0, 0, 0.32);
}
.comment {
  background-color: #000000;
}
input {
  color: #000000;
}
</style>
