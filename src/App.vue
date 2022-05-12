<script lang="ts">

import { defineComponent, defineAsyncComponent } from 'vue'

import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

export default defineComponent({
    components: {
        Header,
        Footer,
    },

    created() {
        console.log("App created");
    },
});

</script>

<template>
    <Header/>
    <router-view/>
    <Footer/>
</template>

<style lang="scss">

@import url('https://fonts.googleapis.com/css2?family=Heebo:wght@400;700&family=Open+Sans&family=Roboto&display=swap');

html, body {
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    line-height: 1.6;
    font-size: 1rem;
    color: $primary-text-color;
    background-color: $primary-bgcolor;
}
a {
    color: $primary-text-color;
}

h1, h2, h3, h4, h5 {
    margin-top: 0;
    color: $primary-color-dark;
}

h1, h2, h3, h4, h5, .menu a {
    font-family: 'Heebo', sans-serif;
}

p {
    margin-top: 0;
}

small {
    font-size: 75%;
    opacity: 0.5;
}

input[type='button'] {
    font-family: 'Heebo';
    font-weight: bold;
    cursor: pointer;
    transition: 0.3s background-color, 0.3s color;
    text-transform: uppercase;
}
input[type='button']:hover {
    background-color: $primary-color;
    color: white;
}

input[type='button'],
input[type='text'],
input[type='email'],
input[type='number'] {
    border: none;
    margin: 0;
    padding: 10px;
}
input[type='text'],
input[type='email'],
input[type='number'] {
    border: none;
    background-color: #0003;
    color: black;
    width: 300px;
    font-size: 120%;
}
input[type='text']::placeholder,
input[type='email']::placeholder,
input[type='number']::placeholder {
    color: #fff9;
}
input[type='text']:focus-visible,
input[type='email']:focus-visible,
input[type='number']:focus-visible {
    outline: none;
}
input[type='button'],
input[type='submit'] {
    padding: 5px 10px;
}

.content {
    max-width: 1100px;
    padding: 0 20px;
    margin: auto;
}
hr {
    height: 0px;
    border: none;
    border-bottom: 1px solid #0004;
    margin: 20px 0;
}
span.tag {
    background-color: #999;
    padding: 5px 10px;
    color: white;
    border-radius: 5px;
    margin-right: 10px;
    text-transform: uppercase;;
    font-weight: bold;
}
.center {
    text-align: center;
}
.shadow {
    box-shadow: 1px solid #0003;
}

.error {
    color: $error-color;
    background-color: $error-background-color;
    padding: 10px;
    margin-bottom: 10px;
}

.slide-enter-to, .slide-leave-from {
    transition: opacity .5s ease;
    opacity: 1;
}

.slide-enter-from, .slide-leave-to {
    opacity: 0;
}

</style>
