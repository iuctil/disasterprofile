<script lang="ts">

import { defineComponent } from 'vue'

//import DemoForm from './components/DemoForm.vue'
//import Summary from './components/Summary.vue'
//import { ISummary, IDemoInfo } from "./types";
import { IProfile, IHazardInfo, IHazardProfile } from "./types";

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
        select(hazardId : string) {
            const p = this.$route.params;
            this.$router.push(`/profile/${p.locationId}/${p.age}/${p.gender}/${hazardId}`);
        },

        getHazard(id : string) : IHazardInfo|undefined {
            console.log("looking for ", id);
            (this.hazards as IHazardInfo[]).forEach(h=>{
                console.log(h);
            });
            return this.hazards.find((h:IHazardInfo)=>h.id == id);
        },

        sortHazard(a : IHazardProfile , b: IHazardProfile) : number {
            if(a.prob < b.prob) return 1;
            if(a.prob > b.prob) return -1;
            return 0;
        },
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
    <div v-if="profile">
        <br>
        <br>
        <center>
            <h2>Common Hazards for</h2>
            <h1 style="font-weight: normal;"><b>43/male</b> living in <b>Bloomington, IN 47403</b></h1>
        </center>
        <br>
        <div class="hazards">
            <HazardCard v-for="hazard in profile.hazards.filter(h=>h.prob > 0.2).sort(sortHazard)" :key="hazard.hazardId"
                :hazardProfile="hazard" class="card" @click="select(hazard.hazardId)"/>
        </div>

        <center>
            <h2>Other potential Hazards</h2>
        </center>
        <br>
        <div class="minor-hazards">
            <!--TODO .. use component-->
            <div v-for="hazard in profile.hazards.filter(h=>h.prob <= 0.2).sort(sortHazard)" :key="hazard.hazardId" 
                class="hazard" 
                :title="getHazard(hazard.hazardId).name">
                <img :src="getHazard(hazard.hazardId).logo" 
                    @click="hazardId = hazard.hazardId" 
                    style="width: 40px; height: 40px;"/>
            </div>
        </div>
        <br>
        <br>
        <br>
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
        margin-bottom: 20px;
        cursor: pointer;
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

.minor-hazards {
    display: flex;
    align-items: center;
    justify-content: center;
    
    .hazard {
        padding-left: 20px;
        cursor: pointer;
    }
}

</style>
