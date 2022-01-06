<script lang="ts">

import { defineComponent, defineAsyncComponent } from 'vue'

export default defineComponent({
    props: {
        prob: {
            type: Number,
            required: true,
        },
    },

    methods: {
        formatNumber(p: number) {
            return (p*100).toFixed(1)+"%";
        }
    }
});

</script>

<template>
<div class="prob" :title="formatNumber(prob)">
    <span class="prob-2sig" v-if="prob > 0.977">Very High</span>
    <span class="prob-1sig" v-else-if="prob>0.841">High</span>
    <span class="prob-0sig" v-else-if="prob>0.5">Higher</span>
    <span class="prob-0sig-neg" v-else-if="prob>0.159">Lower</span>
    <span class="prob-1sig-neg" v-else-if="prob>0.023">Low</span>
    <span class="prob-2sig-neg" v-else>Very Low</span>
</div>
</template>

<style lang="scss" scoped>
.prob span {
    float: right;
    font-size: 120%;
    padding: 0px 10px;
    border-radius: 5px;
    color: white;
}

.prob-2sig {
    background-color: hsl(0, 50%, 50%);
}
.prob-1sig {
    background-color: hsl(30, 50%, 50%);
}
.prob-0sig {
    background-color: hsl(60, 50%, 50%);
}
.prob-0sig-neg {
    background-color: hsl(90, 50%, 50%);
}
.prob-1sig-neg {
    background-color: hsl(120, 50%, 50%);
}
.prob-2sig-neg {
    background-color: hsl(150, 50%, 50%);
}
</style>
