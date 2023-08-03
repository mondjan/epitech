<script setup>
import axios from 'axios'
import { ref } from 'vue'
import individualUserComponent from './individualUserComponent.vue'
import { Modal } from 'usemodal-vue3'
import CreateComponenet from './CreateComponenet.vue'

const props = defineProps({
  role: String
})
let seeCreate = ref(false)

const users = ref([])
function read() {
  axios
    .get('http://127.0.0.1:8000/api/' + props.role + 's')
    .then((response) => {
      console.log(response.data)
      users.value = response.data
    })
    .catch((error) => {
      console.log(error)
    })
}

read()
</script>

<template>
  <button @click="seeCreate = true">create</button>
  <ul>
    <div v-for="user in users">
      <li>{{ user.name }}</li>

      <individualUserComponent :role="props.role" :user="user"></individualUserComponent>
    </div>
  </ul>
  <Modal v-model:visible="seeCreate" title="edit one account"
    ><CreateComponenet></CreateComponenet
  ></Modal>
</template>
