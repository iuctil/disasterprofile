<script lang="ts">

import { defineComponent, defineAsyncComponent } from 'vue'

export default defineComponent({

});

</script>

<template>
<p class="menu">
    <router-link to="/">Home</router-link>
    <router-link to="/about">About</router-link>
    <router-link to="/methods">Methods</router-link>
    <router-link to="/Contact">Contact</router-link>
</p>
</template>

<style lang="scss" scoped>
.menu {
  margin-bottom: 0;
  flex-grow: 2;
  a {
    text-decoration: none;
    color: #333;
    font-size: 13pt;
    font-weight: bold;
    transition: 0.3s color;
  }
  a:hover {
      color: $primary-color;
  }
}
</style>
