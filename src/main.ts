import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'

import App from './App.vue'

import Landing from './Landing.vue'
import Profile from './Profile.vue'

//import VueMapboxTs from "vue-mapbox-ts";

const routes = [
    { path: '/', component: Landing },
    { path: '/profile', component: Profile },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes, // short for `routes: routes`
})

const app = createApp(App);

app.use(router)
//app.use(VueMapboxTs)

app.mount('#app')
