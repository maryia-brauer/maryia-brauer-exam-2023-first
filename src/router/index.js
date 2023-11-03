import {createRouter, createWebHistory} from 'vue-router'
import { useAuthStore } from '@/stores/auth.js'; 
import Login from '@/views/Login.vue';
import Songs from '@/views/Songs.vue';
import Albums from '@/views/Album.vue';
import About from '@/views/About.vue';

const router = createRouter({
    history: createWebHistory(),
    routes : [
        {
          path: '/login',
          component: Login, 
        },
        {
          path: '/',
          component: Songs, 
        },
        {
          path: '/albums',
          component: Albums, 
        },
        {
          path: '/about',
          component: About, 
        },
    ]
})

// ENG
// Middleware is a function that is executed before the route is changed
// argument "to" stores the address where we want to navigate/go
// argument "from" stores the address from where we're coming from

router.beforeEach((to, from, next) => {
    const authStore = useAuthStore(); 
  
    if (to.path !== '/login' && !authStore.isAuthenticated) {
      next('/login'); 
    } else if (to.path === '/login' && authStore.isAuthenticated) {
      next('/'); 
    } else {
      next(); 
    }
  });

export default router;
