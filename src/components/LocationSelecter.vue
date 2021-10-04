<script lang="ts">

import { defineComponent, PropType } from 'vue'

export default defineComponent({
    components: {
    },

    props: {
        modelValue: {
            type: String as PropType<string>|undefined,
            //required: true,
        },
    },

    data() {
        return {
            query: "",
        }
    },

    created() {
        console.log("App created", this.modelValue);
        if(this.modelValue) this.query = this.modelValue;
    },

    methods: {
        /*
        submit() {
            console.log("emit input", this.query)
            //this.$emit("update:locationID", this.query);
            this.$emit("submit", this.query);
        }
        */
    }
});

</script>

<template>
<div class="profileselecter">
    <input type="text" v-model="query" 
        placeholder="Enter Address, ZIP Code, City, or State" 
        @change="$emit('update:modelValue', query)"
        class="input"/>
</div>
</template>

<style lang="scss" scoped>

</style>
