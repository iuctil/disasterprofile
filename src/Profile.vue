<script lang="ts">

import { defineComponent } from 'vue'

//import DemoForm from './components/DemoForm.vue'
//import Summary from './components/Summary.vue'
//import { ISummary, IDemoInfo } from "./types";
import { IProfile } from "./types";

import HazardCard from './components/HazardCard.vue'

import { mapState, mapGetters, } from 'vuex'

export default defineComponent({
    components: {
        //DemoForm, 
        //Summary,
        HazardCard,
    },

    data() {
        return {
            title: "",
            //json: null as any|null,

            //visitor demographic information
            //demo: null as null|IDemoInfo,
            //summary: null as null|ISummary,
            profile: null as null|IProfile,

            hazardId: null as null|string, //selected hazard to show detail on
        }  
    },

    computed: {
        ...mapState(['hazards']),
    },

    async mounted() {
        console.log("Profile mounted", this.$route.params.locationId);
        
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
    },
});

</script>

<template>
<div class="content">
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
    <div v-if="!hazardId && profile">
        <br>
        <br>
        <center>
            <h2>Common Hazards for</h2>
            <h1 style="font-weight: normal;"><b>43/male</b> living in <b>Bloomington, IN 47403</b></h1>
        </center>
        <br>
        <div class="hazards">
            <HazardCard v-for="hazard in profile.hazards" :key="hazard.hazardId"
                :id="hazard.hazardId" class="card" @click="hazardId = hazard.hazardId"/>
        </div>
    </div>
    <div v-if="hazardId">
        selected {{hazardId}}
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

.hazards {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    .card {
        //width: 230px;
        margin-bottom: 20px;
    }



    @media screen and (min-width: 10em) {
        .card {
        max-width: 300px;
        margin: auto;
        margin-bottom: 20px;
        }
    }

    @media screen and (min-width: 40em) {
        .card {
        max-width: calc(50% -  1em);
        }
    }

    @media screen and (min-width: 50em) {
        .card {
        max-width: calc(33% -  1em);
        }
    }
    
    @media screen and (min-width: 60em) {
        .card {
            max-width: calc(25% - 1em);
        }
    }
    padding-bottom: 50px;
}

h2 {
    opacity: 0.8;
}
</style>
