<script lang="ts">

import { defineComponent } from 'vue'
import { mapState, } from 'vuex'

// @ts-ignore
import Markdown from 'vue3-markdown-it';

export default defineComponent({
    components: {
        Markdown,
    },

    computed: {
        ...mapState(['config']),
    },

    async created() {
        const url = this.config.mdHost+"/about.md";
        const res = await fetch(url);
        this.content = await res.text();
    },

    data() {
        return {
            content: "Loading..",
        }
    },
});

</script>

<template>
<Markdown class="content" :source="content"/>
</template>

<style lang="scss" scoped>
</style>
