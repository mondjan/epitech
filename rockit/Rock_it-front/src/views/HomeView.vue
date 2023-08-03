<script setup>
import NavBarComponent from '../components/NavBarComponent.vue'
import DropDownBottonComponent from '../components/DropDownBottonComponent.vue'
import MainPageArtistsVenuesComponent from '../components/MainPageArtistsVenuesComponent.vue'
import { RouterView } from 'vue-router'
</script>

<template>
  <header>
    <NavBarComponent />
  </header>

  <DropDownBottonComponent />

  <main>
    <MainPageArtistsVenuesComponent />
    <!-- <RouterLink to="/kpi">heya</RouterLink> -->
  </main>

  <RouterView />
</template>
