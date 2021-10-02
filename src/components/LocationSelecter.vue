<script lang="ts">

import { defineComponent, PropType } from 'vue'

export default defineComponent({
    components: {
    },

    /*
    props: {
        value: {
            type: String as PropType<string>,
            //required: true,
        },
    },
    */

    data() {
        return {
            query: "",
        }
    },

    created() {
        console.log("App created");
    },

    methods: {
        submit() {
            console.log("emit input", this.query)
            //this.$emit("update:locationID", this.query);
            this.$emit("submit", "zip-us-99999");
        }
    }
});

</script>

<template>
<div class="profileselecter">
    <input type="text" v-model="query" placeholder="Enter Address, ZIP Code, City, or State" class="input"/>
</div>
</template>

<style lang="scss" scoped>

</style>
