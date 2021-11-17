<script lang="ts">

import { defineComponent, defineAsyncComponent, PropType } from 'vue'
import { mapState, mapGetters, } from 'vuex'

import { IHazardInfo, IHazardProfile } from '../types';

import numeral from 'numeral'

export default defineComponent({
    
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
            return this.hazards.find((h:IHazardInfo)=>h.id == this.hazardProfile.hazardId);
        }
    },
    methods: {
        formatProb(p : number) {
            return numeral(p).format("0,0.0%");
        },
    },

});

</script>

<template>
<div class="hazard-card" v-if="hazard">
    <div class="prob">{{formatProb(hazardProfile.prob)}}</div>
    <div class="header">
        <img :src="hazard.logo" class="logo"/>
        <h2 class="title">{{hazard.name}}</h2> 
        <p class="desc">{{hazard.shortDesc}}</p>
    </div>
</div>
</template>

<style lang="scss" scoped>
/*
.hazard-card {
    height: 350px;
    background: $secondary-color-dark;

    display: inline-block;
    border-radius: 10px;
    color: white;

    overflow: hidden;
    box-shadow: 1px 1px 10px #0002;

    position: relative;
}
*/
.hazard-card {
    width: 100%;
    background: white; 
    padding: 15px;
    border-radius: 10px;
    cursor: pointer;

    transition: 0.2s background;
    
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
            font-size: 10pt;
        }
    }

    .prob {
        float: right;
        font-size: 130%;
        background-color: $primary-color-dark;
        padding: 0px 15px;
        border-radius: 10px;
        color: white;
    }

    &:hover {
        background: #0001;
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
