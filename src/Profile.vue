<script lang="ts">

import { defineComponent, nextTick } from 'vue'
import { IProfile, IHazardInfo, IHazardProfile } from "./types"
import HazardCard from './components/HazardCard.vue'
import HospitalUtilization from './components/HospitalUtilization.vue'

import { mapState, } from 'vuex'

// @ts-ignore
import Plotly from 'plotly.js-dist'

// @ts-ignore
import Markdown from 'vue3-markdown-it';

export default defineComponent({
    components: {
        HazardCard, Markdown, HospitalUtilization,
    },

    data() {
        return {
            profile: null as null|IProfile,

            //hazard details in markdown content
            details: {} as {[key: string]: string},
        }
    },

    computed: {
        ...mapState(['hazards', 'config']),
    },

    async mounted() {
        //load profile information for specified location
        const location_source = this.config.apiHost+"/profile/"+this.$route.params.locationId+"?age=43&gender=male";
        const res = await fetch(location_source);
        const json = await res.json();
        this.profile = json; 
        this.profile?.hazards.forEach(hazard=>{
            hazard.detailLoaded = false;
        });

        nextTick(()=>{
            //wait for v-if/profile to be applied so we can attach to $refs.stormPlot
            this.createStormPlot();
        })
    },

    methods: {

        createStormPlot() {
            if(!this.profile?.noaa) return;

            const layout = {
                margin: {
                    l: 40,
                    r: 30,
                    t: 10,
                    b: 30,
                },
                legend: {
                    y: 1.15,
                    bgcolor: 'rgba(255, 255, 255, 0)',
                    bordercolor: 'rgba(255, 255, 255, 0)',
                    orientation: 'h',
                },
                barmode: 'stack',
            }

            const data = [];
            for(const key in this.profile.noaa) {
                const x = [];
                const y = [];
                for(const year in this.profile.noaa[key]) {
                    x.push(year);
                    y.push(this.profile.noaa[key][year]);
                }
                data.push({
                    x,
                    y,
                    name: key,
                    type: 'bar',
                });
            }
            Plotly.newPlot(this.$refs.stormPlot, data, layout);
        },

        async loadDetail(hazard: IHazardProfile) {
            const info = this.hazards[hazard.hazardId];
            const url = this.config.mdHost+"/hazards/"+hazard.hazardId+".md";
            const res = await fetch(url);
            if(res.status == 200) {
                hazard.detailLoaded = true;
                this.details[hazard.hazardId] = await res.text();
            } else {
                console.dir(res);
                this.details[hazard.hazardId] = "No Info. Please create "+url;
            }
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
    <div v-if="profile">
        <br>
        <br>
        <div class="center">
            <h2>Disaster Risks for</h2>
            <h1 style="font-weight: normal;">
                <b>{{$route.params.age}}/{{$route.params.gender}}</b>
                living in
                <b>{{profile.city}}, {{profile.state}} {{profile.zip}}</b>
            </h1>
            <p>You have higher risk of experiencing the following disasters. Click a disaster to learn more.</p>
        </div>
        <br>

        <div class="hazards">
            <div class="hazard" v-for="hazard in profile.hazards.filter(h=>h.prob > 0.2).sort(sortHazard)" :key="hazard.hazardId">
                <HazardCard :hazardProfile="hazard" class="hazard" @click="loadDetail(hazard)"/>
                <transition name="slide">
                    <Markdown class="detail" v-if="details[hazard.hazardId]" :source="details[hazard.hazardId]"/>
                </transition>
            </div>
        </div>

        <div class="center">
            <h2>Other Potential Disasters</h2>
            <p>Although less likely, you could also experience the following disasters.</p>
        </div>
        <br>

        <div class="hazards">
            <div class="hazard" v-for="hazard in profile.hazards.filter(h=>h.prob <= 0.2).sort(sortHazard)" :key="hazard.hazardId">
                <HazardCard :hazardProfile="hazard" @click="loadDetail(hazard)"/>
                <transition name="slide">
                    <Markdown class="detail" v-if="details[hazard.hazardId]" :source="details[hazard.hazardId]"/>
                </transition>
            </div>
        </div>

        <div class="center">
            <h2>Storm History</h2>
            <p>This graph shows the number of storm events that you county has experienced in the past.</p>
        </div>
        <div ref="stormPlot"/>

        <br>
        <br>

        <div v-if="profile.hospitals && Object.keys(profile.hospitals).length">
            <div class="center">
                <h2>Hospital Utilizations</h2>
                <p>Here are the hospital in your county and their current hospital utilizations. If your hospital is over utilized, it might affect the ability to provide necessary medical cares.</p>
            </div>
            <!--
            <div ref="hospitalPlot"/>
            -->
            <div class="hospitals">
                <HospitalUtilization class="hospital" v-for="(data, key) in profile.hospitals" :key="key" :hospital="data"/>
            </div>
        </div>

        <br>
        <br>
        <br>

        <h3>Debug</h3>
        <pre>{{profile}}</pre>
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
    .hazard {
        margin-bottom: 20px;
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
.detail {
    margin: 50px 0;
    border-left: 5px solid #0002;
    padding-left: 30px;
}

.hospitals {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
}

</style>
