import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router';
import i18n from './assets/i18n/index';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';


const app = createApp(App).use(router).use(i18n).use(ElementPlus)
app.config.globalProperties.$ipfsUrl = 'https://plum-secure-meadowlark-923.mypinata.cloud/ipfs/QmcTXfgYL5R5imAB6Gw2fPxB9Wp8gcjRi3eTV6hipXGDRP/';
app.mount('#app');