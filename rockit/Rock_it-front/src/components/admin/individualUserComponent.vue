<script setup>
// const ModalsStore = ModalStore()
// import { ModalStore } from '../../store/ModalStore'
import { Modal } from 'usemodal-vue3'
import { ref } from 'vue'
import axios from 'axios'
const props = defineProps({
  role: String,
  user: Object
})

const seeEdit = ref(false)
let id = props.user.id
let name = props.user.name
let email = props.user.email
let role = props.user.role
let about = props.user.about
let spotify = props.user.spotify
let banner = props.user.banner
function update(id) {
  axios
    .put(
      'http://127.0.0.1:8000/api/' +
        props.role +
        '/' +
        id +
        '?id=' +
        id +
        '&name=' +
        name +
        '&email=' +
        email +
        '&role=' +
        role +
        '&banner=' +
        banner +
        '&spotify=' +
        spotify +
        '&about=' +
        about
    )
    .then((response) => {
      console.log(response.data)
    })
    .catch((error) => {
      console.log(error)
    })
}

function remove(id) {
  axios
    .delete('http://127.0.0.1:8000/api/' + props.role + '/' + id)
    .then((response) => {
      console.log(response.data)
    })
    .catch((error) => {
      console.log(error)
    })
}
</script>
<template>
  <button class="btn btn-primary" @click=";(seeEdit = true), console.log(seeEdit)">update</button>
  <Modal
    v-model:visible="seeEdit"
    title="edit one account"
    :okButton="{
      text: 'update',
      onclick: () => {
        update(props.user.id)
      },
      loading: false
    }"
  >
    <h1>id</h1>
    <button @click="console.log(props.user)">hey</button>
    <input
      type="id"
      :placeholder="id"
      v-model="id"
      className="input input-bordered w-full max-w-xs bg-white"
    />
    <h1>name</h1>

    <input
      type="name"
      :placeholder="name"
      v-model="name"
      className="input input-bordered w-full max-w-xs bg-white"
    />
    <h1>email</h1>

    <input
      type="email"
      :placeholder="email"
      v-model="email"
      className="input input-bordered w-full max-w-xs bg-white"
    />
    <h1>role</h1>

    <input
      type="role"
      :placeholder="role"
      v-model="role"
      className="input input-bordered w-full max-w-xs bg-white"
    />
    <h1>about</h1>

    <input
      type="about"
      :placeholder="about"
      v-model="about"
      className="input input-bordered w-full max-w-xs bg-white"
    />
    <h1>spotify</h1>

    <input
      type="spotify"
      :placeholder="spotify"
      v-model="spotify"
      className="input input-bordered w-full max-w-xs bg-white"
    />
    <h1>banner</h1>
    <input
      type="banner"
      :placeholder="banner"
      v-model="banner"
      className="input input-bordered w-full max-w-xs bg-white"
    />

    <input type="file" className="file-input w-full max-w-xs bg-white" />
  </Modal>
  <button class="btn btn-primary" @click="remove(props.user.id)">delete</button>
</template>
