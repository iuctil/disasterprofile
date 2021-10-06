<script lang="ts">

import { defineComponent, PropType } from 'vue'

export default defineComponent({
    props: {
        risk: {
            type: Number as PropType<Number>,
            required: true,
        },
    },
    data() {
        return {
        }
    },
    watch: {
        risk() {
        },
    },

    created() {
        /*
        setInterval(()=>{
            this._risk+=0.05;
            if(this._risk > 1.0) this._risk = 0;
            console.log(this._risk);
        }, 100);
        */
    },
    computed: {
        riskDeg() { 
            const d = ((this.risk*180)-90).toFixed(1)+'deg';
            return d;
        }
    },
});

</script>

<template>
<div class="riskmeter">
    <img src="../assets/images/riskmeter.svg" width="400" height="200"/>
    <img src="../assets/images/riskmeterNeedle.svg" class="needle" :style="{transform: 'rotate('+riskDeg+')'}"/>
</div>
</template>

<style lang="scss" scoped>
.riskmeter {
    position: relative;
    display: inline-block;
}
.needle {
    position: absolute;
    left: 180px;
    transition: 0.3s transform;
    transform-origin: 25px 163px;
    bottom: 0;
}
</style>
