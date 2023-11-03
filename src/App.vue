<template>
    <!--  HEADER  -->
    <Header v-if="isAuthenticated"></Header>
    <!--  HEADER END  -->

    <!--  BODY  -->
    <div id="section-body">
        <Navigation v-if="isAuthenticated" />
        <router-view class="section-router"></router-view>
    </div>
    <!--  BODY END  -->

    <!--  PLAYER  -->
    <div id="section-player" v-if="isAuthenticated">
        <AudioPlayer />
    </div>
    <!--  PLAYER END  -->
</template>

<script>
    import Header from '@/components/HeaderComponent.vue';
    import { useAuthStore } from '@/stores/auth.js';

    export default {
        components: {
            Navigation
        },
        computed: {
            isAuthenticated() {
            const authStore = useAuthStore();
            return authStore.isAuthenticated;
            }
        }
    }
</script>
