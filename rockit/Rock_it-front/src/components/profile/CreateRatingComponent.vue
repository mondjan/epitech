<script setup>
import { createToaster } from '@meforma/vue-toaster'
import axios from 'axios'
import { useRoute } from 'vue-router'

const route = useRoute()
const toaster = createToaster()
const Lid = localStorage.getItem('id')
let user_id = route.params.id
let picked = 4
let review = null

function Postreview() {
  axios
    .post(
      'http://127.0.0.1:8000/api/comment?id_rater=' +
        Lid +
        '&id_rated=' +
        user_id +
        '&rating=' +
        picked +
        '&comment=' +
        review
    )
    .then((response) => {
      console.log(response)
      toaster.success('review posted')
    })
    .catch((error) => {
      toaster.error('somethign went wrong in creating your review')
      console.log(error)
    })
}
</script>

<template>
  <div className="card w-96 bg-base-100 shadow-xl image-full">
    <div className="card-body">
      <div className="rating">
        <input
          type="radio"
          name="rating-1"
          className="mask mask-star"
          :value="1"
          v-model="picked"
        />
        <input
          type="radio"
          name="rating-1"
          className="mask mask-star"
          :value="2"
          v-model="picked"
        />
        <input
          type="radio"
          name="rating-1"
          className="mask mask-star"
          :value="3"
          v-model="picked"
        />
        <input
          type="radio"
          name="rating-1"
          className="mask mask-star"
          :value="4"
          v-model="picked"
          checked
        />

        <input
          type="radio"
          name="rating-1"
          className="mask mask-star"
          :value="5"
          v-model="picked"
        />
      </div>

      <textarea
        placeholder="Bio"
        className="textarea textarea-bordered textarea-md w-full max-w-xs text-black"
        v-model="review"
      ></textarea>
      <div className="justify-end w-9">
        <button className="btn" @click="Postreview()">post review</button>
      </div>
    </div>
  </div>
</template>
