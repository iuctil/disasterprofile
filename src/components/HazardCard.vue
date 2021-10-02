<script lang="ts">

import { defineComponent, defineAsyncComponent, PropType } from 'vue'
import { mapState, mapGetters, } from 'vuex'

import { IHazardInfo } from '../types';

export default defineComponent({
    
    props: {
        id: {
            type: String as PropType<string>,
            required: true,
        },
    },
    
    computed: {
        ...mapState(['hazards']),
        hazard() : IHazardInfo|undefined {
            return this.hazards.find((h:IHazardInfo)=>h.id == this.id);
        }
    },
    data() {
        return {
        }
    }
});

</script>

<template>
<div class="hazard-card">
    <img :src="hazard.logo" class="logo" style="width: 100%; height: 150px;"/>
    <div class="header">
        <h2>{{hazard.name}}</h2> 
    </div>
    <p class="desc">{{hazard.desc}}</p>
</div>
</template>

<style lang="scss" scoped>
.hazard-card {
    height: 350px;
    background: rgb(34,193,195);
    background: linear-gradient(45deg, rgba(34,193,195,1) 0%, rgba(253,187,45,1) 100%);

    display: inline-block;
    border-radius: 10px;
    color: white;

    overflow: hidden;
    box-shadow: 1px 1px 10px #0002;
}

.header {
    padding: 0 10px;
    h2 {
        color: white;
        margin-bottom: 0;
    }
}

.desc {
    font-size: 12px;
    padding: 0 10px;
    font-size: 80%;
}
</style>
