import './assets/style.css';

import { createPinia } from 'pinia';
import { createApp } from 'vue';

import App from './App.vue';
import LoadingAnime from './components/LoadingAnime.vue';
import LogoLink from './components/LogoLink.vue';
import router from './router';

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount('#app');
app.component('LogoLink', LogoLink);
app.component('LoadingAnime', LoadingAnime);
