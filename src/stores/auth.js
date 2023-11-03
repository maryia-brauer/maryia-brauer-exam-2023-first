import { defineStore } from 'pinia';

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: {
      name: 'NAME',
      surname: 'SURNAME',
      code: 'IT1234',
      favorite_songs: JSON.parse(localStorage.getItem('favorite_songs')) || []
    },
    authenticated: false,
  }),

  getters: {
    is_authenticated() {
      // Check if the is_authenticated key exists in localStorage
      return localStorage.getItem('is_authenticated') ?? this.authenticated;
    },
    getFavoriteSongs() {
      return this.user.favorite_songs;
    },
  },

  actions: {
    setUserData(name, surname, code) {
      this.user.name = name;
      this.user.surname = surname;
      this.user.code = code;
    },
    authenticate(email, password) {
      // Check if the provided email and password match your credentials
      if (email === 'test@q.com' && password === '123456') {
        // Set the is_authenticated key in localStorage to true
        localStorage.setItem('is_authenticated', true);
        // Set the authenticated variable to true
        this.authenticated = true;
        // Programatically change the router address to / (Home)
        router.push('/');
      }
    },
    logout() {
      // Clear localStorage when logging out
      localStorage.clear();
      // Set authenticated to false
      this.authenticated = false;
      // Programatically change the router address to /login
      router.push('/login');
    },
    toggleFavorite(songID) {
      // Check if the songID is already in the favorite_songs array
      const index = this.user.favorite_songs.indexOf(songID);
      if (index === -1) {
        // If not, add it to the favorite_songs array
        this.user.favorite_songs.push(songID);
      } else {
        // If it is, remove it from the favorite_songs array
        this.user.favorite_songs.splice(index, 1);
      }

      // Store the updated favorite_songs array in localStorage
      localStorage.setItem('favorite_songs', JSON.stringify(this.user.favorite_songs));
    },
  },
});
