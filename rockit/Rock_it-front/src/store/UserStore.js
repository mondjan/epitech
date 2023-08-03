import {defineStore} from 'pinia';
export const useUserStore = defineStore('UserStore', {
    state: () => ({
      isConnected: false,
      
    }),






    
    actions: {
        async createquote(quote) {
          try {
            const response = await axios.post('http://127.0.0.1:8000/api/quote', quote);
            this.venues.push(response.data);
          } catch (error) {
            console.error(error);
          }
        },
    
        
        
      },
});