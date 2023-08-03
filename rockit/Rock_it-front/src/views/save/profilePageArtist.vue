<template>
  <div class="">
      <router-link
      to="/bookArtistModal"
      custom
      v-slot="{ navigate }">
        <button class=" relative right_09 bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded" @click="navigate"
        role="link">
         Book
        </button>
      </router-link>
  </div>
  </template>
