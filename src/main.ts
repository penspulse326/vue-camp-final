import './assets/style.css';

import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';
import router from './router';
import LogoLink from './components/LogoLink.vue';
import LoadingAnime from './components/LoadingAnime.vue';

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount('#app');
app.component('LogoLink', LogoLink);
app.component('LoadingAnime', LoadingAnime);
