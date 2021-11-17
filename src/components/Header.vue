<script lang="ts">

import { defineComponent, defineAsyncComponent } from 'vue'
import { mapState, mapGetters, } from 'vuex'

import Menu from '../components/Menu.vue'

export default defineComponent({
    components: {
        //ProfileSelecter,
        Menu,
    },

    mounted() {
    },

    computed: {
        ...mapState(['config']),
    },

    methods: {
        clicktitle() {
            this.$router.push("/");
        }
    },

});

</script>

<template>
<div class="header">
  <div class="content">
    <div class="title" @click="clicktitle">
      <img alt="logo" src="../assets/logo.png" class="logo"/>
      <h1>{{config.siteName}}</h1>
    </div>
    <!--<ProfileSelecter v-if="$route.path != '/'" style="background-color: #0003;"/>-->
    <Menu style="text-align: right;"/>
  </div>
</div>
</template>

<style lang="scss" scoped>
.header {
  border-bottom: 1px solid #0001;
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

h1 {
  display: inline-block;
  margin: 0;
  padding: 0px 10px;
  padding-right: 30px;
  letter-spacing: 0.25px;
  font-size: 25pt;
  color: $primary-color;
}
img.logo {
  padding: 0 0;
  height: 50px;
  vertical-align: top;
  margin-right: 10px;
}

::v-deep(.menu a:not(:last-child)) {
  padding-right: 30px;
}
</style>
