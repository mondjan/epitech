<script setup>
import { ModalStore } from '../../store/ModalStore'
const ModalsStore = ModalStore()
</script>
<template>
  <div class="flex flex-col h-screen p-3 w-60">
    <div class="space-y-3">
      <ul class="pt-2 pb-4 space-y-1 text-sm">
        <li class="rounded-sm">
          <a class="flex items-center p-2 space-x-3 rounded-md">
            <button
              @click=";(ModalsStore.AdminVisible = 'artist'), console.log(ModalsStore.AdminVisible)"
            >
              Crud user
            </button>
          </a>
        </li>
        <li class="rounded-sm">
          <a class="flex items-center p-2 space-x-3 rounded-md">
            <button
              @click=";(ModalsStore.AdminVisible = 'venue'), console.log(ModalsStore.AdminVisible)"
            >
              Crud venue
            </button>
          </a>
        </li>
        <li class="rounded-sm">
          <a class="flex items-center p-2 space-x-3 rounded-md">
            <button @click="ModalsStore.AdminVisible = 'KPI1'">KPI 1</button>
          </a>
        </li>
        <li class="rounded-sm">
          <a class="flex items-center p-2 space-x-3 rounded-md">
            <button @click="ModalsStore.AdminVisible = 'KPI2'">KPI 2</button>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>
