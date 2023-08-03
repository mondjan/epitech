<script setup>

const url = location.href

function codeParse () {
  const spotifyCode = (((url.split("code=")[1]).split("state"))[0])
  console.log(spotifyCode)

  
}
</script> 

<template>
  <div>You have been redirected succesfully with the code 🔓</div>
  <button @click="codeParse">OK</button>

</template>

<style>
</style>
