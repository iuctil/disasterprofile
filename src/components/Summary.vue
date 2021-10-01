<script lang="ts">

import { defineComponent, PropType } from 'vue'

import { MapboxMap } from "vue-mapbox-ts";

import { ISummary } from "../types";

export default defineComponent({
    components: {
        MapboxMap,
    },
    props: {
        summary: {
            type: Object as PropType<ISummary>,
            required: true,
        },
    },
    data() {
        return {
            //localhost key
            myAccessToken: "pk.eyJ1Ijoic29pY2hpaCIsImEiOiJjazVqdnFzNmwwN29qM21td2VrcG1hYjdhIn0.I_ft7vdvwxKjka-Vc9m6Vg",
        }
    },
    created() {
        console.log(this.summary);
    }
});

</script>

<template>
<div>
    <mapbox-map :accessToken="myAccessToken" 
        height="400px" width="100%" 
        mapStyle="light-v10" 
        :center="summary.location" :zoom="8">
        <mapbox-geocoder-control /> 
    </mapbox-map>
</div>
</template>

<style lang="scss" scoped>

</style>
