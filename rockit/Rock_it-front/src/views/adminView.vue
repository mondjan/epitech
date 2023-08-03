<script setup>
import NavBarComponent from '../components/NavBarComponent.vue'
import crudComponent from '../components/admin/crudComponent.vue'
import sideBarComponent from '../components/admin/sideBarComponent.vue'
import KpiNrOfartistsvenueVue from '../components/admin/KpiNrOfartistsvenue.vue'
import KpiNrOfBookingsComponent from '../components/admin/KpiNrOfBookingsComponent.vue'
import { ModalStore } from './../store/ModalStore'
import { useRouter } from 'vue-router'
const router = useRouter()
import axios from 'axios'
import { ref } from 'vue'

const Lapi_token = localStorage.getItem('api_token')

function checkrole() {
  axios
    .get('http://127.0.0.1:8000/api/user/' + Lapi_token)
    .then((response) => {
      // console.log(response.data.role)
      if (response.data.role == 'admin') {
        console.log('verification succes')
      } else {
        console.log('acces dennied', response.data.role)
        router.push({ path: '/' })
      }
    })
    .catch((error) => {
      // toaster.error('check login error')
      console.log('verrification failed')
      router.push({ path: '/' })
    })
}
checkrole()
const useModalStore = ModalStore()
</script>

<template>
  <div class="flex">
    <sideBarComponent />

    <crudComponent v-if="useModalStore.AdminVisible == 'venue'" role="venue" />
    <crudComponent v-if="useModalStore.AdminVisible == 'artist'" role="artist" />
    <KpiNrOfartistsvenueVue v-if="useModalStore.AdminVisible == 'KPI1'"></KpiNrOfartistsvenueVue>
    <Suspense>
      <KpiNrOfBookingsComponent
        v-if="useModalStore.AdminVisible == 'KPI2'"
      ></KpiNrOfBookingsComponent>
    </Suspense>
  </div>
</template>
