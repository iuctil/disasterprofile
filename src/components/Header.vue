<script lang="ts">

import { defineComponent, defineAsyncComponent } from 'vue'

import Menu from '../components/Menu.vue'

export default defineComponent({
    components: {
        //ProfileSelecter,
        Menu,
    },

    mounted() {
    },

    methods: {
      clicktitle() {
        this.$router.push("/");
      }
    }

});

</script>

<template>
<div class="header">
  <div class="content">
    <div class="title" @click="clicktitle">
      <img alt="logo" src="../assets/logo.png" class="logo"/>
      <h4>MyDisasterProfile</h4>
    </div>
    <!--<ProfileSelecter v-if="$route.path != '/'" style="background-color: #0003;"/>-->
    <Menu style="margin-left: 20px; text-align: right;"/>
  </div>
</div>
</template>

<style lang="scss" scoped>
.header {
  border-bottom: 1px solid #eee;
  padding: 10px;
}
.content {
  display: flex;
  align-items: center;
  justify-content: center;
}
.title {
  cursor: pointer;
}

h4 {
  display: inline-block;
  margin: 0;
  padding: 0px 10px;
  padding-right: 30px;
  letter-spacing: 0.25px;
  color: #666;
  font-size: 18pt;
}
img.logo {
  padding: 0px 0;
  height: 50px;
  vertical-align: middle;
}

::v-deep(.menu a) {
  padding-right: 20px;
}
</style>
