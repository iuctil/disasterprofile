<script lang="ts">

import { defineComponent, PropType } from 'vue'

// @ts-ignore
import Plotly from 'plotly.js-dist'

import { IHospitalData } from "../types"

export default defineComponent({
    components: {
    },
    props: {
        hospital: {
            type: Object as ()=>IHospitalData,
            required: true,
        },
    },

    data() {
        return {
        }
    },

    mounted() {
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
            autosize: true,
            width: 450,
            height: 200,
        }

        const dates : Date[] = [];
        const icuAvail : number[] = [];
        const icuUsed : number[] =  [];
        const inpAvail : number[] = [];
        const inpUsed : number[] = [];
        this.hospital.data.forEach(rec=>{
            dates.push(new Date(rec.collection_week));
            icuAvail.push(rec.total_icu_beds_7_day_avg - rec.icu_beds_used_7_day_avg);
            icuUsed.push(rec.icu_beds_used_7_day_avg);
            inpAvail.push(rec.inpatient_beds_7_day_avg - rec.inpatient_beds_used_7_day_avg);
            inpUsed.push(rec.inpatient_beds_used_7_day_avg);
        });

        //console.dir(this.hospital.data);
        Plotly.newPlot(this.$refs.plotICU, [
            {
                x: dates,
                y: icuUsed,
                name: "ICU Beds Used",
                type: 'bar',
            },
            {
                x: dates,
                y: icuAvail,
                name: "ICU Beds Available",
                type: 'bar',
            },
        ], layout);

        Plotly.newPlot(this.$refs.plotINP, [
            {
                x: dates,
                y: inpUsed,
                name: "Inp.Beds Used",
                type: 'bar',
            },
            {
                x: dates,
                y: inpAvail,
                name: "Inp.Beds Available",
                type: 'bar',
            },
        ], layout);

    }
});

</script>

<template>
<div v-if="hospital">
    <h3>{{hospital.name}}</h3>
    <p>{{hospital.address}} {{hospital.city}}</p>
    <div ref="plotICU" class="plot"/>
    <div ref="plotINP" class="plot"/>
</div>
</template>

<style lang="scss" scoped>
.plot {
}
</style>
