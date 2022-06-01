import { createApp } from 'vue'
// import Vue from 'vue'
import App from './App.vue'
import router from './router'

export default{
    base_URL :'http://127.0.0.1:8000/api/'
}

createApp(App).use(router).mount('#app')
