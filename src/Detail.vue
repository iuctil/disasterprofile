<script lang="ts">

import { defineComponent } from 'vue'

import { IHazardInfo, IProfile, IHazardProfile } from "./types";

import HazardCard from './components/HazardCard.vue'
import Mitigation from './components/Mitigation.vue'

import { mapState, mapGetters, } from 'vuex'

import numeral from 'numeral';

export default defineComponent({
    components: {
        //DemoForm, 
        //Summary,
        HazardCard,
        Mitigation,
    },

    data() {
        return {
            title: "",
            profile: null as null|IProfile,

            mitigations: {} as any, //stores answers given by mitigations
        }  
    },

    computed: {
        ...mapState(['hazards']),
        hazard() {
            return (this.hazards as IHazardInfo[]).find(h=>h.id == this.$route.params.hazardId);
        },

        hazardProfile() : IHazardProfile|undefined {
            if(!this.profile) return undefined; //not yet loaded?
            return this.profile.hazards.find(h=>h.hazardId == this.$route.params.hazardId);
        },

        totalRisk() : null|number {
            if(!this.hazardProfile) return null;
            let risk = this.hazardProfile.prob;

            for(let idx in Object.keys(this.mitigations)) {
                const hazard = this.hazard?.mitigations[idx];
                const v = this.mitigations[idx];    
                const answer = hazard.answers.find(a=>a.v == v);
                risk *= answer.vunl;
            }

            return risk;
        },
    },

    async mounted() {
        
        //load profile information for specified location
        const location_source = "profile.json?zip=47403&age=43&gender=male";
        const res = await fetch(location_source);
        const json = await res.json();
        console.log("loaded profile");
        console.dir(json);
        this.profile = json; 
    },

    methods: {
        /*
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
        */
        formatPercentage(v : number|null) : string {
            if(!v) return "N/A";
            return numeral(v*100).format("0.2").toString()+"%";
        },
    },
});

</script>

<template>
<div class="content" v-if="profile && hazard">
    <!--
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
    -->

    <img :src="hazard.logo" align="right" style="width: 300px; margin-left: 20px;"/>
    <h1>{{hazard.name}}</h1>
    <h2>
        In <b>Bloomington, Indiana (47403)</b>
    </h2>
    <hr>
    <br>
    <p>
        <!--<span class="tag">Impact: <b>{{hazard.impact}}</b></span>-->
        <span class="tag" v-for="(tag, idx) in hazard.tags" :key="idx">{{tag}}</span>
    </p>
    <p> {{hazard.shortDesc}} </p>
    <p>
        {{hazard.desc}}
    </p>
    <p>
        <a :href="hazard.url" target="external">{{hazard.url}}</a>
    </p>
    <br>
    <br>
    
    <h2>Hazard Level</h2>
    <p v-if="hazardProfile">
        Based on past record, residents in this ZIP code have <span class="hazard-level">{{formatPercentage(hazardProfile.prob)}}</span> chance of   
        experiencing this hazard this year.
    </p>
    <p>
        
    </p>
    <p>
        <img src="./assets/demo-images/noaa.png" style="width: 100%"/>
    </p>

    <h3>Past Disaster Events</h3>
    <div class="disaster-event">
        <h4>FEMA Disaster Decleration</h4> 
        <time>2/24/2019</time> <b>Severe Storm and Flooding</b>
    </div>

    <div class="disaster-event">
        <h4>FEMA Disaster Decleration</h4> 
        <time>4/16/2013</time> <b>SEVERE STORMS, STRAIGHT-LINE WINDS, AND FLOODING</b>
    </div>

    <br>
    <br>

    <h2>How vulnerable are you?</h2>
    <p>
        Having a potential hazard does not necessary mean you are immediately vulnerable to it. 
        Please analyze your risk for this hazard.
    </p>
    
    <Mitigation v-for="(mitigation, midx) in hazard.mitigations" :key="midx" :mitigation="mitigation" v-model="mitigations[midx]"/>
    <h2 style="text-align: right;">Overall Risk: <b>{{formatPercentage(totalRisk)}}</b></h2>

    <br>
    <br>

    <h2>Debug</h2>
    <pre>
        {{mitigations}}
    </pre>
</div>
</template>

<style lang="scss" scoped>
h1 {
    font-size: 300%;
    padding: 30px 0;
    margin-bottom: 0;
    padding-bottom: 0;
}
.disaster-event {
    border-left: 6px solid $primary-color-dark;
    background-color: white;
    padding: 10px 20px;
    margin-bottom: 10px;
    border-radius: 5px;
}
.hazard-level {
    font-size: 150%;
    font-weight: bold;
}
</style>
