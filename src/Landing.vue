<script lang="ts">

import { defineComponent, defineAsyncComponent } from 'vue'

import LocationSelecter from './components/LocationSelecter.vue'

export default defineComponent({
    components: {
        LocationSelecter,
    },

    data() {
        return {
            errors: [] as string[],

            locationId: "",
            age: 43,
            gender: "male",
        }
    },

    created() {
        console.log("Landing created");
    },

    watch: {
    },

    methods: {
        validate() : boolean {
            this.errors = [];
            if(!this.locationId) this.errors.push("Please specify your location");
            if(!this.age) this.errors.push("Please specify your age");
            if(!this.gender) this.errors.push("Please specify your gender");
            return this.errors.length == 0;
        },

        start() {
            if(!this.validate()) return;
            this.$router.push(`/profile/${this.locationId}/${this.age}/${this.gender}`);
        }
    },
});

</script>

<template>
<div class="content">
    <center>
        <h1>Find your disaster profiles</h1>
        <p>
            Enter your ZIP code / county to discover your likely disater scenarios and learn how you can avoid/prepare
            for those disasters.
        </p>
        <br>
    </center>

    <div class="banner">

        <p v-for="(error, idx) in errors" :key="idx" class="error">
            {{error}}
        </p>

        <p>
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
    <h2>Understanding your disaster profile</h2>
    <p>Are you aware of all likely disaster scenarios that could happen to your life? We aggregate various public data sources and calculate the likelihood of various hazards based on your demographics (age, gender, where you live). Our goal is not to scare our visitors but to inform them about hazards that they might not be aware of, never thought of. By knowing what to look out for, we hope that you can avoid or better prepare for common disaster scenarios.</p>
</div>
<br>

</template>

<style lang="scss" scoped>
.banner {
    background-image: url('./assets/landingDrop3.jpg');
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
