<script lang="ts">

import { defineComponent, defineAsyncComponent } from 'vue'

//import ProfileSelecter from './components/ProfileSelecter.vue'

export default defineComponent({
    components: {
        //ProfileSelecter,
    },

    data() {
        return {
        }
    },

    created() {
        console.log("Landing created");
    },

    watch: {
    },

    methods: {
        start() {
            this.$router.push('/profile');
        }
    },
});

</script>

<template>
<div class="banner">
    <div class="content">
        <h1>Find your disaster profiles</h1>
        <p>
            Past natural and manmade disasters, and preparation and disaster mitigation strategies 
            based on peer-reviewed research from the world's leading disaster experts. 
        </p>
        <p>
            <input type="button" value="Start Here" class="startbutton" @click="start"/>
        </p>

        <br>
        <p class="disclaimer">
        Intended for non-commercial, informational purposes only. See terms of use. 
        The disaster profile model is designed to approximate disaster risks and not intended to include 
        all possible disaster risks or mitigations.
        </p>
    </div>
</div>
<br>

<div class="content">
    <h2>Things we want to show</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
</div>
<br>

<div class="content">
    <h2>Things we want to show</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
</div>
<br>

<div class="content">
    <h2>Things we want to show</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
</div>
<br>

</template>

<style lang="scss" scoped>
.banner {
    background-image: url('./assets/landingDrop.jpg');
    background-size: cover;

    .content {
        max-width: 720px;
        margin: auto;
        color: white;

        h1 {
            color: white;
        }

        padding: 80px 10px;
        .disclaimer {
            font-size: 80%;
            opacity: 0.6;
        }
        ::v-deep(input[type='text']) {
            background-color: #fff3;
            color: white;
        }

        .startbutton {
            font-size: 15pt;
            padding: 10px 30px;
            text-transform: uppercase;
            border-radius: 5px;
        }
    }
}


</style>
