<script lang="ts">

import { defineComponent, defineAsyncComponent, PropType } from 'vue'
import { mapState, mapGetters, } from 'vuex'

import { IHazardInfo, IHazardProfile } from '../types';

export default defineComponent({
    
    props: {
        hazardProfile: {
            type: Object as PropType<IHazardProfile>,
            required: true,
        },
    },
    
    computed: {
        ...mapState(['hazards']),
        hazard() : IHazardInfo|undefined {
            return this.hazards.find((h:IHazardInfo)=>h.id == this.hazardProfile.hazardId);
        }
    },
    data() {
        return {
        }
    }
});

</script>

<template>
<div class="hazard-card" v-if="hazard">
    <img :src="hazard.logo" class="logo" style="width: 100%; height: 150px;"/>
    <div class="prob">{{hazardProfile.prob*100}}%</div>
    <div class="header">
        <h2>{{hazard.name}}</h2> 
    </div>
    <p class="desc">{{hazard.shortDesc}}</p>
</div>
</template>

<style lang="scss" scoped>
.hazard-card {
    height: 350px;
    background: $secondary-color-dark;
    /*background: linear-gradient(45deg, $primary-color-dark 0%, $secondary-color-dark 100%);*/

    display: inline-block;
    border-radius: 10px;
    color: white;

    overflow: hidden;
    box-shadow: 1px 1px 10px #0002;

    position: relative;
}

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

.desc {
    font-size: 12px;
    padding: 0 10px;
    font-size: 80%;
}
</style>
