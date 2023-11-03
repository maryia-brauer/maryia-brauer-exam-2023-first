import './assets/main.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from '@/router'
import Header from '@/components/HeaderComponent.vue';
import AudioPlayer from '@/components/AudioPlayerComponent.vue';

const app = createApp(App)

app.component('Header', Header);
app.component('AudioPlayer', AudioPlayer);

app.use(createPinia())
app.use(router)

app.mount('#app')
