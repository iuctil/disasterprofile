<script lang="ts">

import { defineComponent, defineAsyncComponent } from 'vue'

import LocationSelecter from './components/LocationSelecter.vue'

export default defineComponent({
    components: {
        LocationSelecter,
    },

    data() {
        return {
            locationId: null as null|string,
            age: null as null|number,
            gender: null as null|string,
        }
    },

    created() {
        console.log("Landing created");
    },

    watch: {
    },

    methods: {
        start() {
            this.$router.push('/profile/'+this.locationId);
        }
    },
});

</script>

<template>
<div class="content">
    <center>
        <h1>Find your disaster profiles</h1>
        <p>
            Enter your ZIP code / county to find our your disater risks and learn how you can mitigate 
            your risks and deal with the aftermath of various natural and manmade disasters. 
        </p>
        <br>
    </center>

    <div class="banner">

        <p>
            <!--
            <input type="button" value="Start Here" class="startbutton" @click="start"/>
            -->
            <b>Your Location</b>
            <LocationSelecter v-model="locationId"/>
        </p>
        <p>
            <b>Your age</b><br>
            <input type="number" v-model.number="age"/>
        </p>

        <p>
            <b>Your gender</b>
            <br>
            <input type="radio" id="demoGenderMale" value="male" name="demoGender" v-model="gender">
            <label for="demoGenderMale">Male</label><br>
            <input type="radio" id="demoGenderFemale" value="female" name="demoGender" v-model="gender">
            <label for="demoGenderFemale">Female</label><br>
            <input type="radio" id="demoGenderNonBinary" value="nonbinary" name="demoGender" v-model="gender">
            <label for="demoGenderNonBinary">Non-Binary</label><br>
        </p>

        <input type="button" value="Submit" class="startbutton" @click="start"/>

        <br>
        <br>
        <p class="disclaimer">
        Intended for non-commercial, informational purposes only. See terms of use. 
        The disaster profile model is designed to approximate disaster risks and not intended to include 
        all possible disaster risks or mitigations.
        </p>
    </div>
    <br>
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
    padding: 100px;
    border-radius: 20px;

    color: white;
}

.content {
    max-width: 720px;
    margin: auto;


    padding: 80px 10px;
    .disclaimer {
        font-size: 80%;
        opacity: 0.6;
    }
    ::v-deep(input[type='text']),
    ::v-deep(input[type='number'])  {
        background-color: #fff3;
        color: white;
        width: 100%;
    }

    .startbutton {
        font-size: 15pt;
        padding: 10px 30px;
        text-transform: uppercase;
        border-radius: 5px;
        width: 100%;
    }
}


</style>
