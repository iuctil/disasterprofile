<script lang="ts">

import { defineComponent } from 'vue'

import DemoForm from './components/DemoForm.vue'
import Summary from './components/Summary.vue'

import { ISummary, IDemoInfo } from "./types";

export default defineComponent({
    components: {
        DemoForm, Summary,
    },

    data() {
        return {
            title: "",
            //json: null as any|null,

            //visitor demographic information
            demo: null as null|IDemoInfo,
            summary: null as null|ISummary,
        }  
    },

    mounted() {
        //console.log("Profile mounted", this.$route.params.id);
    },

    methods: {
        setDemo(demo: IDemoInfo) {
            //console.log("received demo", demo);
            this.demo = demo;

            //load profile for a given locationID
            const source = "sampleprofile.json";
            fetch(source).then(res=>res.json()).then(json=>{
                console.debug(json);

                //TODO - adjust probabilities

                //finally pass information to UI
                this.summary = {
                    location: json.location
                }
                this.title = "Sample Profile as "+this.$route.params.id;

            }).catch(err=>{
                console.error(err);
            })
        }
    },
});

</script>

<template>
<div class="content">
    <div v-if="!demo" class="demoform">
        <DemoForm @submit="setDemo"/>
    </div>
    <div v-else>
        <div class="side">
            <b>{{title}}</b>
            <hr>
            <ul class="menu">
                <li>Summary</li>
                <li>Fine Tune Risk Profile</li>
            </ul>
        </div>
        <div class="main">
            <Summary v-if="summary" :summary="summary"/>
        </div>
    </div>

</div>
</template>

<style lang="scss" scoped>

.demoform {
    max-width: 700px;
    margin: auto;
    padding: 30px 0;
}
.side {
    width: 300px;
    float: left;
    padding: 20px;
}
.main {
    margin-left: 350px;
    padding: 20px;
}

.menu {
    list-style: none;
    padding: 0;
    li {
        padding: 10px 20px;
        transition: 0.3s background-color, 0.3s color;
        cursor: pointer;
    }
    li:hover {
        background-color: #eee;
        color: $primary-color;
    }
}
</style>
