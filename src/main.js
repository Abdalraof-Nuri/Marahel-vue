import { createApp } from 'vue'
// import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from "./store";
import VueCookies from 'vue-cookies'

export default{
    base_URL :'http://127.0.0.1:8000/api/'
}

createApp(App).use(router).use(store).use(VueCookies, { expire: '7d'}).mount('#app')
