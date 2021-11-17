import { createStore } from 'vuex'

//import hazards from './hazards.yaml' .. "SyntaxError: Invalid left-hand side expression in prefix operation"

import { IHazardInfo } from '../types';

import hazards from './hazards';

const state = {
    test: 0,
    //vue-i18n parser returns object wrapped in (ctx) callbacks.. we want plain object!
    hazards: hazards as IHazardInfo[],

    config: {
        siteName: "disasterProfile.org",
        apiHost: "https://api.disasterprofile.org",
    },
}

const mutations = {
    incTest(state) {
        state.test++; 
    },
}

const actions = {
    saySomething(context) {
        context.commit("intTest");
    },
}


const getters = {
    /*
    getHazardById:(state)=>(id: string) : IHazard=>{
        return state.hazards
    }
    */
}

const store = createStore({ state, mutations, actions, getters })
export default store;

