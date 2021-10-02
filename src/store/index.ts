

import { createStore } from 'vuex'

//import hazards from './hazards.yaml' .. "SyntaxError: Invalid left-hand side expression in prefix operation"

import { IHazardInfo } from '../types';

const state = {
    siteName: "DisasterProfile.org",
    test: 0,
    hazards: [
        {
            "desc": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            "id": "avalanche",
            "impact": "high",
            "name": "Avalanche",
            "tags": [
               "natural"
            ],
            "url": "https://someurl.com/avalanche",
            "logo": "/src/assets/images/hazards/avalanche.jpg",
        },
        {
            "desc": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            "id": "drought",
            "impact": "high",
            "name": "Drought",
            "tags": [
               "natural"
            ],
            "url": "https://someurl.com/drought",
            "logo": "/src/assets/images/hazards/drought.jpg",
        },

        {
            "desc": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            "id": "duststorm",
            "impact": "high",
            "name": "Duststorm",
            "tags": [
               "natural"
            ],
            "url": "https://someurl.com/duststorm",
            "logo": "/src/assets/images/hazards/duststorm.jpg",
        },

        {
            "desc": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            "id": "earthquake",
            "impact": "high",
            "name": "Earthquake",
            "tags": [
               "natural"
            ],
            "url": "https://someurl.com/earthquake",
            "logo": "/src/assets/images/hazards/earthquake.jpg",
        },

        {
            "desc": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            "id": "forestfire",
            "impact": "high",
            "name": "Forestfire",
            "tags": [
               "natural"
            ],
            "url": "https://someurl.com/forestfire",
            "logo": "/src/assets/images/hazards/forestfire.jpg",
        },

        {
            "desc": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            "id": "hailstorm",
            "impact": "high",
            "name": "Hailstorm",
            "tags": [
               "natural"
            ],
            "url": "https://someurl.com/hailstorm",
            "logo": "/src/assets/images/hazards/hailstorm.jpg",
        },

        {
            "desc": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            "id": "hurricane",
            "impact": "high",
            "name": "Hurricane",
            "tags": [
               "natural"
            ],
            "url": "https://someurl.com/hurricane",
            "logo": "/src/assets/images/hazards/hurricane.jpg",
        },

        {
            "desc": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            "id": "sandstorm",
            "impact": "high",
            "name": "Sandstorm",
            "tags": [
               "natural"
            ],
            "url": "https://someurl.com/sandstorm",
            "logo": "/src/assets/images/hazards/sandstorm.jpg",
        },

        {
            "desc": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            "id": "sinkhole",
            "impact": "high",
            "name": "Sinkhole",
            "tags": [
               "natural"
            ],
            "url": "https://someurl.com/sinkhole",
            "logo": "/src/assets/images/hazards/sinkhole.jpg",
        },


        {
            "desc": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            "id": "snowstorm",
            "impact": "high",
            "name": "Snowstorm",
            "tags": [
               "natural"
            ],
            "url": "https://someurl.com/snowstorm",
            "logo": "/src/assets/images/hazards/snowstorm.jpg",
        },

        {
            "desc": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            "id": "thunderstorm",
            "impact": "high",
            "name": "Thunderstorm",
            "tags": [
               "natural"
            ],
            "url": "https://someurl.com/thunderstorm",
            "logo": "/src/assets/images/hazards/thunderstorm.jpg",
        },


        {
            "desc": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            "id": "tornado",
            "impact": "high",
            "name": "Tornado",
            "tags": [
               "natural"
            ],
            "url": "https://someurl.com/tornado",
            "logo": "/src/assets/images/hazards/tornado.jpg",
        },

        {
            "desc": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            "id": "tsunami",
            "impact": "high",
            "name": "Tsunami",
            "tags": [
               "natural"
            ],
            "url": "https://someurl.com/tsunami",
            "logo": "/src/assets/images/hazards/tsunami.jpg",
        },

        {
            "desc": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            "id": "volcano",
            "impact": "high",
            "name": "Volcano",
            "tags": [
               "natural"
            ],
            "url": "https://someurl.com/volcano",
            "logo": "/src/assets/images/hazards/volcano.jpg",
        },

        {
            "desc": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            "id": "windstorm",
            "impact": "high",
            "name": "Windstorm",
            "tags": [
               "natural"
            ],
            "url": "https://someurl.com/windstorm",
            "logo": "/src/assets/images/hazards/windstorm.jpg",
        },

        {
           "desc": "Believe it or not, flooding is the deadliest type of severe weather. There’s probably a lot about floods and flooding you don’t know.",
           "id": "flood",
           "impact": "high",
           "name": "Flooding",
           "tags": [
              "natural"
           ],
           "url": "https://www.earthnetworks.com/flooding/",
           "logo": "/src/assets/images/hazards/flood.jpg",
        },
        {
           "desc": "The U.S. National Weather Service defines an ice storm as a storm which results in the accumulation of at least 0.25-inch (6.4 mm) of ice on exposed surfaces.",
           "id": "icestorm",
           "impact": "medium",
           "name": "Ice Storm",
           "tags": [
              "natural"
           ],
           "url": "https://en.wikipedia.org/wiki/Ice_storm/",
           "logo": "/src/assets/images/hazards/icestorm.jpg",
        },
        {
           "desc": "No. 2 killer of Americans in 2020, accounting for about 18% of overall deaths",
           "id": "cancer",
           "impact": "medium",
           "name": "Cancer",
           "tags": [
              "health"
           ],
           "url": "https://somewhere.com/cancer/",
           "logo": "/src/assets/images/hazards/cancer.jpg",
        },
        {
           "desc": "Heart disease remained the top killer in the U.S. in 2020, accounting for about 21% of deaths and for 31,841 more deaths than in 2019. The nearly 5% increase in heart disease deaths in 2020 was the largest such increase since 2012, researchers said.",
           "id": "heart-disease",
           "impact": "medium",
           "name": "Heart Disease",
           "tags": [
              "health"
           ],
           "url": "https://somewhere.com/heartdisease/",
           "logo": "/src/assets/images/hazards/heartdisease.jpg",
        }
    ] as IHazardInfo[],
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

