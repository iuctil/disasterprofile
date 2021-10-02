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
    font-size: 13pt;
    transition: 0.3s color;
  }
  a:hover {
      color: $primary-color;
  }
}

@media screen and (max-width: 55em) {
  .menu {
    display: none;
  }
}
    
</style>
