import {defineStore} from 'pinia';
import axios from 'axios';
export const useVenueStore = defineStore('venueStore', {
  state: () => ({
    venues: [],
  }),
  actions: {
    async createVenue(venue) {
      try {
        const response = await axios.post('http://127.0.0.1:8000/api/venue', venue);
        this.venues.push(response.data);
      } catch (error) {
        console.error(error);
      }
    },

    async getAllVenues() {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/venues');
        this.venues = response.data;
        console.log(this.venues)
      } catch (error) {
        console.error(error);
      }
    },

    async updateVenue(updatedVenue) {
      try {
        await axios.put(`http://127.0.0.1:8000/api/venue/${updatedVenue.id}`, updatedVenue);
        const index = this.venues.findIndex(venue => venue.id === updatedVenue.id);
        if (index !== -1) {
          this.venues[index] = updatedVenue;
        }
      } catch (error) {
        console.error(error);
      }
    },

    async deleteVenue(venueId) {
      try {
        await axios.delete(`http://127.0.0.1:8000/api/venue/${venueId}`);
        this.venues = this.venues.filter(venue => venue.id !== venueId);
      } catch (error) {
        console.error(error);
      }
    },
    
  },
});