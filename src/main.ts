import './assets/style.css';

import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';
import router from './router';
import LogoLink from './components/LogoLink.vue';

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.component('LogoLink', LogoLink);

app.mount('#app');
