<script lang="ts">

import { defineComponent, PropType } from 'vue'

import { IMitigation } from "../types";

export default defineComponent({
    components: {
    },

    props: {
        mitigation: {
            type: Object as PropType<IMitigation>,
            required: true,
        },
        modelValue: {
            type: String as PropType<string>,
        },
    },

    computed: {
        hint() {
            const answer = this.mitigation.answers.find(f=>f.v == this.v);
            if(answer) return answer.desc;
            return null;
        },
        vunl() {
            const answer = this.mitigation.answers.find(f=>f.v == this.v);
            if(!answer) return null;
            return answer.vunl;
        },
    },

    data() {
        return {
            v: null as null|string,
        }
    },

    created() {
        this.v = this.modelValue;
        console.log("creating mitigation compoonent", this.modelValue);
    },

    methods: {
        select(v: string|null) {
            this.$emit("update:modelValue", v)
        },
    }
});

</script>

<template>
<div class="mitigation shadow">
    <div class="qa">
        <div v-if="vunl && v">
            <span class="vunl vunl-sustain" v-if="vunl == 1.0">Bad</span>
            <span class="vunl vunl-lower" v-if="vunl < 1.0">Good</span>
        </div>
        <div class="question"><h4>{{mitigation.question}}</h4></div>
        <div class="answers">
            <div v-for="(answer, aidx) in mitigation.answers" :key="aidx">
                <div v-if="answer.v != null">
                    <input type="radio" :value="answer.v" @change="select(answer.v)" v-model="v">
                    <label>{{answer.v}}</label>
                </div>
            </div>
        </div>
    </div>
    <div class="hint" v-if="hint">{{hint}}</div>

</div> 
</template>

<style lang="scss" scoped>
.mitigation {
    margin-bottom: 10px;
    background-color: white;
    border-radius: 10px;
    padding: 10px;
    .hint {
        opacity: 0.8;
    }
    .question h4 {
        margin-bottom: 0;
    }

    .vunl {
        float: right;
        padding: 0 10px;
        background-color: gray;
        color: white;
        border-radius: 5px;

        &.vunl-sustain {
            background-color: rgb(196, 25, 25);
        }
        &.vunl-lower {
            background-color: rgb(19, 163, 38);
        }
    }
}
</style>
