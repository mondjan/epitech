<script setup>
import navBarConnexion from '../components/navBarConnexion.vue';
import loggedVenues from '../components/loggedVenues.vue';
import dropDownBotton from '../components/dropDownBotton.vue';

</script>

<template>
	<header>
		<navBarConnexion/>
	</header>

		<dropDownBotton/>

	<main>
		<loggedVenues />
	</main>

</template>
