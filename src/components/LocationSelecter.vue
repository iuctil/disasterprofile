<script lang="ts">

import { defineComponent, PropType } from 'vue'

import { mapState, mapGetters, } from 'vuex'

import VueSelect from 'vue-next-select'
import 'vue-next-select/dist/index.min.css'

export default defineComponent({
    components: {
        VueSelect,
    },

    computed: {
        ...mapState(['config']),
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
            list: [] as { value: string; label: string; }[],
            options: [] as { value: string; label: string; }[],
            value: "",
            loading: false,
        }
    },

    created() {
        //console.log("App created", this.modelValue);
        if(this.modelValue) this.value = this.modelValue;
        /*
        const states = [
            'Alabama',
            'Alaska',
            'Arizona',
            'Arkansas',
            'California',
            'Colorado',
            'Connecticut',
            'Delaware',
            'Florida',
            'Georgia',
            'zip-47403'
        ];

        this.list = states.map((item) => {
            return { value: `value:${item}`, label: `${item}` }
        })
        */
    },


    methods: {
        /*
        submit() {
            console.log("emit input", this.query)
            //this.$emit("update:locationID", this.query);
            this.$emit("submit", this.query);
        }
        */
        search(query: string) {
            console.log("searching", query);
            if (query !== '') {
                this.loading = true
                fetch(this.config.apiHost+"/profile/keys?q="+query).then(res=>res.json()).then(res=>{
                    this.loading = false
                    this.options = res.map((r:any)=>({value: r.id, label: r.name}));
                });
            } else {
                this.options = []
            }
        },
    }
});

</script>

<template>
<div class="profileselecter">
  <el-select
    v-model="value"
    remote
    reserve-keyword
    placeholder="Search City / State / ZIP Code"
    :remote-method="search"
    :loading="loading"
    clearable
    class="select"
    filterable
    @change="$emit('update:modelValue', value)"
  > 
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value"
    >
    </el-option>
  </el-select>
  <!--
    <input type="text" v-model="query" 
        placeholder="Enter Address, ZIP Code, City, or State" 
        @change="$emit('update:modelValue', query)"
        class="input"/>
        -->
</div>
</template>

<style lang="scss" scoped>
.select {
    width: 100%;
}
::v-deep(.el-input__inner) {
    border-radius: 0;
}
</style>
