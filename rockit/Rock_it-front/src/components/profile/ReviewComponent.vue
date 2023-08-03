<script setup>
import { ref } from 'vue'
import { ModalStore } from '../../store/ModalStore'
import { useUserStore } from '../../store/UserStore'
import { useRoute } from 'vue-router'

import axios from 'axios'

const UserStore = useUserStore()
const ModalsStore = ModalStore()
const comments = ref([])
let route = useRoute()

axios
  .get('http://127.0.0.1:8000/api/' + route.params.id + '/comments')
  .then((response) => {
    comments.value = response.data

    console.log(comments, 'hey')
  })
  .catch((error) => {
    // toaster.error('check login error')
    console.log(error)
  })
</script>

<template>
  <div className="card bg-base-100 image-full m-8">
    <div className="card-body">
      <h2 className="card-title py-5 text-2xl">Reviews!</h2>
      <div v-if="comments.length == 0">
        <button @click="console.log(comments, comments.length)">tests</button>
      </div>
      <div v-for="comment in comments">
        <div>
          <a>{{ comment.name }}</a>
          <a v-for="index in comment.rating" :key="index">*</a>
        </div>
        <a v-if="comment.comment != 'null'">{{ comment.comment }}</a>
      </div>
      <div className="card-actions justify-center " v-if="UserStore.isConnected">
        <button className="btn btn-primary" @click="ModalsStore.ReviewVisible = true">
          rate and comment
        </button>
      </div>
      <div v-else>
        <button className="btn btn-primary " disabled="disabled">
          connect yourself to post a review
        </button>
      </div>
    </div>
  </div>
</template>
