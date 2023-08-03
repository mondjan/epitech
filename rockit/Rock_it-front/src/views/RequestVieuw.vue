<script setup>
import Request from '../components/modalRequest.vue'
</script>
<template>
  <main class="">
    <div>
      <Request>
        <div class="flex justify-evenly">
          <button
            @click="cancelRequest(request.id)"
            class="left-01 bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
          >
            Cancel
          </button>
          <button
            @click="confirmRequest(request.id)"
            class="left-01 bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
          >
            Confirm
          </button>
          <button
            @click="router.push('/')"
            class="left-01 bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
          >
            Cancel
          </button>
        </div>
      </Request>
    </div>
  </main>
</template>
