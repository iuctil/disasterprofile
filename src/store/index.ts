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
//export type IState = typeof state;

const store = createStore({ 
    state, 
    mutations: {
        incTest(state) {
            state.test++; 
        },
    }, 
    
    actions: {
        saySomething(context) {
            context.commit("intTest");
        },        
    }, 
    
    getters: {
        /*
        getHazardById:(state)=>(id: string) : IHazard=>{
            return state.hazards
        }
        */
    }
})
export default store;

