<script lang="ts">

import { defineComponent, PropType } from 'vue'

export default defineComponent({
    components: {
    },

    props: {
        value: {
            type: String as PropType<string>,
            //required: true,
        },
    },

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
            this.$emit("update:locationID", this.query);
        }
    }
});

</script>

<template>
<div class="profileselecter">
    <input type="text" v-model="query" placeholder="Enter Address, ZIP Code, City, or State" class="input"/>
    <input type="button" @click="submit" value="Open"/>
</div>
</template>

<style lang="scss" scoped>
.profileselecter {
    flex-grow: 2;
    display: flex;
}
.input {
    font-size: 13pt;
    border: #ccc;
    flex-grow: 1;
    color: black;
}
input:focus-visible {
    border: #999;
}
</style>
