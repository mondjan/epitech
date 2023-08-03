<script setup>

const redirectToLink = () => {
  let state = "rock-itState";
  const spotifyAuthorizeUrl = `https://accounts.spotify.com/authorize?response_type=code&client_id=${import.meta.env.VITE_SPOTIFY_CLIENT_ID}&scope=${import.meta.env.VITE_SPOTIFY_SCOPES}&redirect_uri=${import.meta.env.VITE_SPOTIFY_REDIRECT_URI}&state=${state}`;
  
  window.location.href = spotifyAuthorizeUrl;

  function codeParse() {
    console.log(spotifyAuthorizeUrl)
    const spotifyCode = (((spotifyAuthorizeUrl.split("code=")[1]).split("&state="))[0])
    console.log(spotifyCode)
  };
};

</script> 

<template>
  <div>
    <div>
      <button class="btn btn-outline btn-info"
        @click="redirectToLink">Enter Rock-it ! 🚀 
      </button>
    </div>
  </div>
</template>


<style>

</style>