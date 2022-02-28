<script lang="ts">

import { defineComponent, defineAsyncComponent, PropType } from 'vue'
import { mapState, mapGetters, } from 'vuex'

import { IHazardInfo, IHazardProfile } from '../types';

import Prob from './Prob.vue'

import numeral from 'numeral'

export default defineComponent({

    components: {
        Prob,
    },

    props: {
        hazardProfile: {
            type: Object as PropType<IHazardProfile>,
            required: true,
        },
    },

    data() {
        return {
        }
    },

    computed: {
        ...mapState(['hazards']),
        hazard() : IHazardInfo|undefined {
            //return this.hazards.find((h:IHazardInfo)=>h.id == this.hazardProfile.hazardId);
            return this.hazards[this.hazardProfile.hazardId];
        }
    },
    methods: {
        formatProb(p: number) {
            return numeral(p).format("0,0.0%");
        },
        formatNumber(n: number) {
            return numeral(n).format("0,0");
        }
    },

});

</script>

<template>
<div v-if="hazard" class="hazard-card">
    <Prob :prob="hazardProfile.prob"/>
    <div class="header">
        <img :src="hazard.logo" class="logo"/>
        <h2 class="title">{{hazard.name}}</h2>
        <p class="desc">{{hazard.desc}}</p>
        <p class="desc" v-if="hazardProfile.source == 'CDC-COD' && hazardProfile.deaths && hazardProfile.totalDeaths">
            In the year <b>{{hazardProfile.sourceYear}}</b>, there has been
            <b>{{formatNumber(hazardProfile.deaths)}}</b> <i>{{hazard.name}}</i>
            deaths in your state (total reported death of <b>{{formatNumber(hazardProfile.totalDeaths)}}</b>).
        </p>
        <p class="desc" v-if="hazardProfile.source == 'NOAA-STORM-EVENTS'">
            In the last <b>{{hazardProfile.totalYears}}</b> years, there has been
            <b>{{hazardProfile.experiencedYears}}</b> years with at least 1 storm events of this type.
        </p>
    </div>
</div>
</template>

<style lang="scss" scoped>
.hazard-card {
    flex-shrink: 0;
    flex-grow: 1;

    box-shadow: 2px 2px 8px #0002;
    background-color: white;
    padding: 15px;
    border-radius: 10px;
    cursor: pointer;
    box-sizing: border-box;

    transition: 0.3s box-shadow;

    .header {
        .logo {
            width: 100px;
            float: left;
        }
        .title {
            color: $primary-color-dark;
            margin-bottom: 0;
            margin-left: 120px;
        }
        .desc {
            margin-left: 120px;
            font-size: 12pt;
        }
    }

    &:hover {
        box-shadow: 2px 2px 10px #0003;
    }
}

/*
.header {
    padding: 0 10px;
    h2 {
        color: white;
        margin-bottom: 0;
    }
}

.prob {
    position: absolute;
    top: 10px;
    right: 10px;
    font-size: 150%;
    background-color: #0009;
    padding: 0px 15px;
    border-radius: 10px;
    font-style: italic;
}
*/

</style>
