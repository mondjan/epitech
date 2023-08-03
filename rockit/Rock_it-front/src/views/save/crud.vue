<script setup>
<<<<<<<< HEAD:Rock_it-front/src/views/crudVenue.vue
import navBarConnexion from '../components/navBarConnexion.vue';
========
>>>>>>>> 9c6924c5a81bea385ba824fc2d94854033b3c04c:Rock_it-front/src/views/save/crud.vue
import { useVenueStore } from '../store/venueStore.js';
</script>

<script>
export default {
  setup() {
    const venueStore = useVenueStore();
    const venues = venueStore.venues;
    const venue = ref({ name: '', description: '' });
    const editMode = ref(false);

    async function saveVenue() {
      if (editMode.value) {
        await venueStore.updateVenue(venue.value);
      } else {
        await venueStore.createVenue(venue.value);
      }
      venue.value = { name: '', description: '' };
      editMode.value = false;
    }

    function editVenue(venue) {
      venue.value = { ...venue };
      editMode.value = true;
    }

    async function deleteVenue(venueId) {
      await venueStore.deleteVenue(venueId);
    }

    onMounted(() => {
      venueStore.getAllVenues();
    });

    return { venues, venue, editMode, saveVenue, editVenue, deleteVenue };
  },
};

</script>

<template>
<main>
  <navBarConnexion />  
  <div class="bg-white">
    <h1 class="font-serif text-3xl text-black font-bold underline decoration-black"> Venue list</h1>
    <div class="bg-yellow-50">
    <div class="mb-4">
      
      <div class="flex justify-start">
        <button class="px-4 py-2 rounded-md bg-sky-500 text-sky-100 hover:bg-sky-600">Create new venue</button>
      </div>
      <div class="flex justify-end">
        <div class="inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg aria-hidden="true" class="w-10 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
        </div>
        <input type="search" id="default-search" class="block w-2/5 p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search" required>
        
      </div>
    </div>
    <div class="flex flex-col">
      <div class="overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
        <div class="inline-block min-w-full overflow-hidden align-middle border-b border-gray-200 shadow sm:rounded-lg">
          <table class="min-w-full relative w-930 h-508 left-65 top-113 bg-url(list.jpg) filter drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))">
            <thead>
              <tr>
                <th
                  class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                  venue_id</th>
                <th
                  class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                  first_name</th>
                <th
                  class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                  last_name</th>
                <th
                  class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                  last_update</th>
                <th class="px-6 py-3 text-sm text-left text-gray-500 border-b border-gray-200 bg-gray-50" colspan="3">
                  Action</th>
              </tr>
            </thead>
  
            <tbody class="bg-white">
              <ul>
                     <li v-for="venue in venues" :key="venue.id">
                       {{ venue.name }} - {{ venue.description }}
                       <button @click="editVenue(venue)">Modifier</button>
                       <button @click="deleteVenue(venue.id)">Supprimer</button>
                     </li>
              </ul>
              <form @submit.prevent="saveVenue">
               <input v-model="venue.name" placeholder="Nom de l'acteur" required>
               <textarea v-model="venue.description" placeholder="Description de la tâche"></textarea>
               <button type="submit">{{ editMode ? 'Mettre à jour' : 'Créer' }}</button>
              </form>
            </tbody>
          </table>
        </div>
      </div>
    </div>
   </div>
  </div>
</main>
</template>  