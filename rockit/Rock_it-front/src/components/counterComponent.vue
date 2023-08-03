<template>
  <div>
    <div>counter: {{ counter }}</div>
    <button @click="counter++">increment</button>
  </div>
</template>
<script setup>
import { ref } from "vue";
let counter = ref(0);
</script>
