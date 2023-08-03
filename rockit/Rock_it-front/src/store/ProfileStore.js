import { defineStore } from 'pinia';
import axios from 'axios';

export const useProfileStore = defineStore('profileStore', {
  state: () => ({
    artists: [],
  }),
  
  actions: {
    async getArtists() {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/artists');
        this.artists = response.data;
        console.log(this.artists); // Access the store's artists state using `this.artists`
      } catch (error) {
        console.error(error);
      }
    },
  },
});