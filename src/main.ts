import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router';
import i18n from './assets/i18n/index';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';


const app = createApp(App).use(router).use(i18n).use(ElementPlus)
app.config.globalProperties.$ipfsUrl = 'https://pub-7f3d82f53363484c8d4f6a346d92560a.r2.dev/img/';
app.config.globalProperties.$ipfsUrlMP4 = 'https://pub-7f3d82f53363484c8d4f6a346d92560a.r2.dev/mp4/';
app.mount('#app');