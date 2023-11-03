<template>
    <nav id="nav-main" class="wrapper-navigation">
        <ol>
            <li v-for="(item, index) in menuItems" :key="index">
                <router-link :to="item.path">{{ item.name }}</router-link>
            </li>
        </ol>
    </nav>
</template>

<script>
import { useAuthStore } from '@/stores/auth.js';
export default {
    data() {
        const auth = useAuthStore();
        return {
            routes: [
                {
                    name: 'SONGS',
                    path: '/'
                },
                {
                    name: 'ALBUMS',
                    path: '/albums'
                },
                {
                    name: 'ABOUT ME',
                    path: '/about'
                }
            ],
            auth
        }
    },
}
</script>
