import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'

import App from './App.vue'

import Landing from './Landing.vue'
import Profile from './Profile.vue'
import VueGtag from 'vue-gtag-next'

import store from './store'

//import VueMapboxTs from "vue-mapbox-ts";

const routes = [
    { path: '/', component: Landing },
    { path: '/profile/:locationId', component: Profile },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes, // short for `routes: routes`
})

const app = createApp(App);

app.use(router)
app.use(store)
app.use(VueGtag, {
    property: {
      id: "GTM-TR45FZW"
    }
});


app.mount('#app')
