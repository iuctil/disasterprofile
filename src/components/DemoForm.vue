<script lang="ts">

import { defineComponent } from 'vue'

import LocationSelecter from '../components/LocationSelecter.vue'

import { IDemoInfo } from "../types";

export default defineComponent({
    components: {
        LocationSelecter
    },

    data() {
        return {
            //visitor demographic information
            demo: {
                locationId: undefined as undefined|string,

                age: undefined as undefined|number,
                gender: undefined as undefined|"male"|"female"|"nonbinary", 
                demoLiveNearFloodzone: undefined as undefined|boolean, //yes/no

                driveMinutes: undefined as undefined|number,
            },
        }
    },

    emits: {
        submit: (payload: IDemoInfo)=>{
            // TODO perform form validation
            if(!payload.locationId) {
                console.error("locationId is required");
                return false;
            }
            console.log("demo form is valid!");
            return true;
        }
    },

    mounted() {
    },
});

</script>

<template>

<div>
    <p>
        Please specify where you currently live.
    </p>

    <LocationSelecter v-model.locationId="demo.locationId"/>

    <hr>
    <p>
        Please entere as much information below to fine tune your disaster probabilities. 
        We do not transmit your information outside your computer 
        (this information is only used to adjust probabilities within this session.)
    </p>

    <p>
        <b>Your age</b><br>
        <input type="number" v-model.number="demo.age"/>
    </p>

    <p>
        <b>Your gender</b>
        <br>
        <input type="radio" id="demoGenderMale" value="male" name="demoGender" v-model="demo.gender">
        <label for="demoGenderMale">Male</label><br>
        <input type="radio" id="demoGenderFemale" value="female" name="demoGender" v-model="demo.gender">
        <label for="demoGenderFemale">Female</label><br>
        <input type="radio" id="demoGenderNonBinary" value="nonbinary" name="demoGender" v-model="demo.gender">
        <label for="demoGenderNonBinary">Non-Binary</label><br>
    </p>

    <p>
        <b>Do you live in or near the flood zone?</b>
        <br>
        <!--
        <input type="radio" id="demoLiveNearFloodzoneDontknow" value="" name="demoLiveNearFloodzone" v-model="demo.demoLiveNearFloodzone">
        <label for="demoLiveNearFloodzoneDontknow">I don't know</label><br>
        -->
        <input type="radio" id="demoLiveNearFloodzoneYes" :value="true" name="demoLiveNearFloodzone" v-model="demo.demoLiveNearFloodzone">
        <label for="demoLiveNearFloodzoneYes">Yes</label><br>
        <input type="radio" id="demoLiveNearFloodzoneNo" :value="false" name="demoLiveNearFloodzone" v-model="demo.demoLiveNearFloodzone">
        <label for="demoLiveNearFloodzoneNo">No</label><br>
    </p>

    <p>
        <b>How many minutes do you typically spend driving each day?</b><br>
        <input type="number" v-model.number="demo.driveMinutes"/>
    </p>

    <input type="button" value="Submit" @click="$emit('submit', demo)"/>

    <h3>debug</h3>
    <pre>{{demo}}</pre>
</div>

</template>

<style lang="scss" scoped>
</style>
