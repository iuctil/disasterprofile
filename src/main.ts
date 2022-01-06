import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'

import App from './App.vue'

import About from './About.vue'
import Method from './Method.vue'
import Contact from './Contact.vue'

import Landing from './Landing.vue'
import Profile from './Profile.vue'
//import Detail from './Detail.vue'
import VueGtag from 'vue-gtag-next'

//import SlideUpDown from 'vue3-slide-up-down'

import store from './store'

// @ts-ignore
//import Markdown from 'vue3-markdown-it'; 
import 'highlight.js/styles/monokai.css';

const routes = [
    { path: '/', component: Landing },
    { path: '/profile/:locationId/:age/:gender', component: Profile },
    //{ path: '/profile/:locationId/:age/:gender/:hazardId', component: Detail },
    { path: '/about', component: About },
    { path: '/methods', component: Method },
    { path: '/contact', component: Contact },
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
//app.use(ElementPlus)

//app.component('slide-up-down', SlideUpDown)
//app.use(Markdown); //doesn't work..

app.mount('#app')
