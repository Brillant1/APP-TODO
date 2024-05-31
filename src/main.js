import { createApp } from 'vue'
import { createPinia } from 'pinia'
import router from '@/router';
import './style.css'
import App from './App.vue'

import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import axiosInstance from './axios';

import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";

const toastOptions = {position: "bottom-left",timeout: 3000,closeOnClick: true,pauseOnFocusLoss: true,pauseOnHover: true,draggable: true,draggablePercent: 0.6,showCloseButtonOnHover: false,hideProgressBar: true,closeButton: "button",icon: true,rtl: false}


const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);

const app = createApp(App);
app.use(router).use(pinia).use(Toast, toastOptions)

app.config.globalProperties.$url = axiosInstance;

app.mount('#app');

