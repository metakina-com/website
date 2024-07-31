import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router';
import i18n from './assets/i18n/index';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';

createApp(App).use(router).use(i18n).use(ElementPlus).mount('#app');