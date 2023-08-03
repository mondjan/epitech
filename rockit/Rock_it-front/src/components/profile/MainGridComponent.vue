<script setup>
import { onMounted, ref } from 'vue'
import axios from 'axios'
import { Modal } from 'usemodal-vue3'
import AboutText from './AboutTextComponent.vue'
import Review from './ReviewComponent.vue'
import CreateRatingComponent from './CreateRatingComponent.vue'
import { useRoute } from 'vue-router'
import BookingComponent from './BookingComponent.vue'
import { ModalStore } from '../../store/ModalStore'
import ButtonSocialNetworkComponent from './ButtonSocialNetworkComponent.vue'

const ModalsStore = ModalStore()

props: ['text']

let showCalendar = ref(false)
const id = ref('')
const name = ref('')
const rating = ref('')
const about = ref('')
const spotifyTrack = ref('')
let Lid = localStorage.getItem('id')
const banner = ref(
  'https://res.cloudinary.com/didthhgmq/image/upload/v1686217588/concert_cti3lg.png'
)
const tmp = ref('')
let route = useRoute()

async function getArtistByID() {
  try {
    const response = await axios.get('http://127.0.0.1:8000/api/artistbyid/' + route.params.id)

    let datas = response.data[0]
    id.value = route.params.id
    name.value = datas.name
    rating.value = datas.rating
    about.value = datas.about
    spotifyTrack.value = datas.spotify
    banner.value = 'url(' + datas.banner + ')'
    console.log(banner)
  } catch (error) {
    console.error(error)
  }
}

getArtistByID()

function toggleHeart() {
  var button = document.querySelector('.like button')
  if (button.textContent === '🖤') {
    button.textContent = '💖'
  } else {
    button.textContent = '🖤'
  }
}
</script>

<template>
  <div :class="'main_ctnr bg-black'" id="banner">
    <Modal v-model:visible="ModalsStore.ReviewVisible"> <CreateRatingComponent /> </Modal>

    <div class="profileHeader_ctnr">
      <div class="name">{{ name }}</div>
      <div class="rating">{{ rating }}</div>

      <RouterLink v-if="Lid == route.params.id" :to="`/editProfilePage/${route.params.id}`">
        <div class="edit"><button>Edit</button></div>
      </RouterLink>

      <div class="like">
        <button @click="toggleHeart">
          <span v-if="isHeartSelected">💖</span>
          <span v-else>🖤</span>
        </button>
      </div>

      <div class="buttonColor" @click="showCalendar = true"><button>Book up !</button></div>
      <BookingComponent v-show="showCalendar"></BookingComponent>
      <div class="buttonColor"><button>Contact</button></div>
    </div>

    <div class="about py-10"><AboutText :text="about" /></div>

    <div class="review"><Review /></div>

    <div class="socialLinks">Social network here</div>

    <div class="SpotifyTop5">
      <iframe
        style="border-radius: 12px"
        :src="`https://open.spotify.com/embed/track/${spotifyTrack}?utm_source=generator&theme=0`"
        width="100%"
        height="152"
        frameborder="0"
        allowfullscreen
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      ></iframe>
    </div>
    <div class="suggestions"></div>

    <div class="carousel"></div>
    <div><ButtonSocialNetworkComponent /></div>
  </div>
</template>
<style scoped>
#banner {
  background-image: v-bind(banner);
}
</style>
