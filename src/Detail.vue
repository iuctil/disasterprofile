<script lang="ts">

import { defineComponent } from 'vue'

import { IHazardInfo, IProfile, IHazardProfile } from "./types";

import HazardCard from './components/HazardCard.vue'
import Mitigation from './components/Mitigation.vue'
import RiskMeter from "./components/RiskMeter.vue"

import { mapState, mapGetters, } from 'vuex'

import numeral from 'numeral';

export default defineComponent({
    components: {
        HazardCard,
        Mitigation,
        RiskMeter,
    },

    data() {
        return {
            title: "",
            profile: null as null|IProfile,

            adjustedProb: 0,
            adjustedImpact: 0,

            //stores answers given by mitigations
            probMitigations: {} as any, 
            impactMitigations: {} as any, 
        }  
    },

    computed: {
        ...mapState(['hazards']),
        hazard() : IHazardInfo|undefined {
            return (this.hazards as IHazardInfo[]).find(h=>h.id == this.$route.params.hazardId);
        },

        hazardProfile() : IHazardProfile|undefined {
            if(!this.profile) return undefined; //not yet loaded?
            return this.profile.hazards.find(h=>h.hazardId == this.$route.params.hazardId);
        },

        adjustProb() {
            if(!this.hazardProfile?.prob) return;
            if(!this.hazard) return;

            //start by using hazard prob
            let prob = this.hazardProfile.prob;
            this.hazard.probMitigations.forEach((mitigation, idx)=>{
                const v = this.probMitigations[idx];    
                const answer = mitigation.answers.find(a=>a.v == v);
                if(answer) prob *= answer.vunl;
                //else vuln *= 0.5;
            });

            this.adjustedProb = prob;
        },
        
        adjustImpact() {
            if(!this.hazardProfile?.prob) return;
            if(!this.hazard) return;

            //start by using hazard prob
            let prob = 1.0;
            this.hazard.impactMitigations.forEach((mitigation, idx)=>{
                const v = this.impactMitigations[idx];    
                const answer = mitigation.answers.find(a=>a.v == v);
                if(answer) prob *= answer.vunl;
                //else vuln *= 0.5;
            });

            this.adjustedImpact = prob;
        },
        
    },

    async mounted() {
        
        //load profile information for specified location
        const location_source = "profile.json?zip=47403&age=43&gender=male";
        const res = await fetch(location_source);
        const json = await res.json();
        this.profile = json; 

        /*
        //reset mitigation answers
        this.hazard?.mitigations.forEach((mitigations, idx)=>{
            this.mitigations[idx] = null;
        });
        */
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
    <p> {{hazard.shortDesc}} </p>
    <p>
        {{hazard.desc}}
    </p>
    <p>
        <!--<span class="tag">Impact: <b>{{hazard.impact}}</b></span>-->
        <span class="tag" v-for="(asset, idx) in hazard.assets" :key="idx">{{asset}}</span>
    </p>
    <br>
    <br>
    
    <h2>Probability</h2>
    <p v-if="hazardProfile">
        Residents in living under this ZIP code have <span class="hazard-level">{{formatPercentage(hazardProfile.prob)}}</span> chance of   
        experiencing this hazard at least once this year.
    </p>
    <!--
    <p>
        <img src="./assets/demo-images/noaa.png" style="width: 100%"/>
    </p>
    -->

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

    <h3>How can I reduce the probability?</h3>
    <p>
        You can take steps to reduce the probabilities for this disaster scenarios.
    </p>

    <div class="center">
        <RiskMeter :risk="adjustedProb"/>
        <br>
        <h2>
            <span style="font-weight: normal;">Adjusted Probability</span> <br>
            <b style="font-size: 150%;">{{formatPercentage(adjustedProb)}}</b><br>
        </h2>
    </div>
        
    <Mitigation v-for="(mitigation, midx) in hazard.probMitigations" :key="midx" :mitigation="mitigation" v-model="probMitigations[midx]" @change="adjustProb"/>

    <br>
    <br>
    <hr>
    
    <h2>Impact</h2>
    <p>Based on our records, resident on this ZIP code has spent <span class="hazard-level">$35,000</span> on average to deal with this disaster.</p>
    <p>In the last 10 years, <span class="hazard-level">7</span> people have lost life due to this disaster.</p>

    <b>TODO... show graphs / charts to backup the claim above</b>

    <br>
    <br>

    <h3>How can I reduce the impact?</h3>
    <p>
        You can take steps to reduce the impact of this disaster.
    </p>

    <div class="center">
        <RiskMeter :risk="adjustedImpact"/>
        <br>
        <h2>
            <span style="font-weight: normal;">Adjusted Impact</span><br>
            <b style="font-size: 150%;">{{formatPercentage(adjustedImpact)}}</b>
        </h2>
    </div>
        
    <Mitigation v-for="(mitigation, midx) in hazard.impactMitigations" :key="midx" :mitigation="mitigation" v-model="impactMitigations[midx]" @change="adjustImpact"/>  

    <br>
    <br>
    <hr>
    
    <h2>Response</h2>

    <h3>During a flood...</h3>

    <div class="response">
        <p>
            Evacuate if told to do so. Find a shelter, or move to higher group or higher floor and stay where you are.
        </p>
    </div>

    <div class="response">
        <p>
            Listen to EAS, NOAA weather radio or local alerting systems through portal communication devices. 
        </p>
    </div>

    <h3>After a flood...</h3>

    <div class="response shadow">
        <p>
            Pay attention to authorities and return home only when it is safe.
        </p>
    </div>

    <div class="response shadow">
        <p>
            Once the immediate threat is past, call your city to make sure the storm drains are open and cleaned out to ensure the water recedes faster. 
            Wear heavy work gloves, protective clothing and boots during clean up 
        </p>
    </div>

    <div class="response shadow">
        <p>
            Avoid wading in floodwater and be aware of the risk of electrocution.
        </p>
    </div>

    <br>
    <br>

    <h2>More</h2>
    <p v-for="(url, idx) in hazard.urls" :key="idx" >
        <a :href="url" target="external">{{url}}</a>
    </p>

    <br>
    <br>
    <br>
    <br>
    <!--
    <h2>Debug</h2>
    <pre>
        {{mitigations}}
    </pre>
    -->
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
    border-left: 4px solid $primary-color-dark;
    background-color: white;
    padding: 10px 20px;
    margin-bottom: 10px;
    border-radius: 5px;
}
.hazard-level {
    font-size: 150%;
    font-weight: bold;
}
.response {
    background-color: white;
    padding: 10px;
    border-radius: 10px;
    border-left: 4px solid $secondary-color-dark;
    margin-bottom: 10px;
}
</style>
