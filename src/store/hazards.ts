const hazards = [
  {
    shortDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    id: "avalanche",
    impact: "high",
    name: "Avalanche",
    tags: [
      "natural"
    ],
    urls: [
      "https://someurl.com/avalanche"
    ],
    logo: "/src/assets/images/hazards/avalanche.jpg"
  },
  {
    shortDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    id: "drought",
    impact: "high",
    name: "Drought",
    tags: [
      "natural"
    ],
    urls: [
      "https://someurl.com/drought"
    ],
    logo: "/src/assets/images/hazards/drought.jpg"
  },
  {
    shortDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    id: "duststorm",
    impact: "high",
    name: "Duststorm",
    tags: [
      "natural"
    ],
    urls: [
      "https://someurl.com/duststorm"
    ],
    logo: "/src/assets/images/hazards/duststorm.jpg"
  },
  {
    shortDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    id: "earthquake",
    impact: "high",
    name: "Earthquake",
    tags: [
      "natural"
    ],
    urls: [
      "https://someurl.com/earthquake"
    ],
    logo: "/src/assets/images/hazards/earthquake.jpg"
  },
  {
    shortDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    id: "forestfire",
    impact: "high",
    name: "Forestfire",
    tags: [
      "natural"
    ],
    urls: [
      "https://someurl.com/forestfire"
    ],
    logo: "/src/assets/images/hazards/forestfire.jpg"
  },
  {
    shortDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    id: "hailstorm",
    impact: "high",
    name: "Hailstorm",
    tags: [
      "natural"
    ],
    urls: [
      "https://someurl.com/hailstorm"
    ],
    logo: "/src/assets/images/hazards/hailstorm.jpg"
  },
  {
    shortDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    id: "hurricane",
    impact: "high",
    name: "Hurricane",
    tags: [
      "natural"
    ],
    urls: [
      "https://someurl.com/hurricane"
    ],
    logo: "/src/assets/images/hazards/hurricane.jpg"
  },
  {
    shortDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    id: "sandstorm",
    impact: "high",
    name: "Sandstorm",
    tags: [
      "natural"
    ],
    urls: [
      "https://someurl.com/sandstorm"
    ],
    logo: "/src/assets/images/hazards/sandstorm.jpg"
  },
  {
    shortDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    id: "sinkhole",
    impact: "high",
    name: "Sinkhole",
    tags: [
      "natural"
    ],
    urls: [
      "https://someurl.com/sinkhole"
    ],
    logo: "/src/assets/images/hazards/sinkhole.jpg"
  },
  {
    shortDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    id: "snowstorm",
    impact: "high",
    name: "Snowstorm",
    tags: [
      "natural"
    ],
    urls: [
      "https://someurl.com/snowstorm"
    ],
    logo: "/src/assets/images/hazards/snowstorm.jpg"
  },
  {
    shortDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    id: "thunderstorm",
    impact: "high",
    name: "Thunderstorm",
    tags: [
      "natural"
    ],
    urls: [
      "https://someurl.com/thunderstorm"
    ],
    logo: "/src/assets/images/hazards/thunderstorm.jpg"
  },
  {
    shortDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    id: "tornado",
    impact: "high",
    name: "Tornado",
    tags: [
      "natural"
    ],
    urls: [
      "https://someurl.com/tornado"
    ],
    logo: "/src/assets/images/hazards/tornado.jpg"
  },
  {
    shortDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    id: "tsunami",
    impact: "high",
    name: "Tsunami",
    tags: [
      "natural"
    ],
    urls: [
      "https://someurl.com/tsunami"
    ],
    logo: "/src/assets/images/hazards/tsunami.jpg"
  },
  {
    shortDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    id: "volcano",
    impact: "high",
    name: "Volcano",
    tags: [
      "natural"
    ],
    urls: [
      "https://someurl.com/volcano"
    ],
    logo: "/src/assets/images/hazards/volcano.jpg"
  },
  {
    shortDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    id: "windstorm",
    impact: "high",
    name: "Windstorm",
    tags: [
      "natural"
    ],
    urls: [
      "https://someurl.com/windstorm"
    ],
    logo: "/src/assets/images/hazards/windstorm.jpg"
  },
  {
    id: "flood",
    shortDesc: "Believe it or not, flooding is the deadliest type of severe weather. There’s probably a lot about floods and flooding you don’t know.",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    impact: "high",
    name: "Flooding",
    tags: [
      "natural"
    ],
    urls: [
      "https://www.earthnetworks.com/flooding/",
      "https://www.valuepenguin.com/homeowners-insurance/how-to-prevent-home-flooding"
    ],
    logo: "/src/assets/images/hazards/flood.jpg",
    mitigations: [
      {
        question: "Do you know if you live in a flood zone?",
        answers: [
          {
            v: null,
            vunl: 0.8,
            desc: "The first against flooding is to know if you are in a floodzone. We recommend visiting https://floodfactor.com and understand your flood risks."
          },
          {
            v: "Yes",
            vunl: 1,
            desc: "If you are in/near the flood zone, you must take this hazard extremely seriously. Please examine the rest of the vulnerabilities."
          },
          {
            v: "No",
            vunl: 0.3,
            desc: "The Flood zone calculation might not include a rare flooding events. You might also be affected indirectly by flooded access road, or utility systems that are not directly next to your resident."
          }
        ]
      },
      {
        question: "Do you store sandbags/inflatable flood diversion tubes?",
        answers: [
          {
            v: "Yes",
            vunl: 0.8,
            desc: "Great! TODO... add info"
          },
          {
            v: "No",
            vunl: 1,
            desc: "Sandbags or inflatable flood tubes that can be deployed quickly could lessen the impact of less severe flooding that happens more frequently."
          }
        ]
      },
      {
        question: "Does your home sit on stilts/piers?",
        answers: [
          {
            v: "Yes",
            vunl: 0.3,
            desc: "Great! TODO... add info"
          },
          {
            v: "No",
            vunl: 1,
            desc: "While expensive to build retroactively, raising your house could substantially protect your home. Even an inch of flood water could cause significant amount of damage."
          }
        ]
      },
      {
        question: "Do you have your electrical outlets/switches above the flood level?",
        answers: [
          {
            v: "Yes",
            vunl: 0.8,
            desc: "Great. TODO... add info "
          },
          {
            v: "No",
            vunl: 1,
            desc: "All outlets, switches, sockets and circuit breakers should be at least one foot above flood level to avoid significant electrical damage in the case of a flood."
          }
        ]
      },
      {
        question: "Does your downspouts point away from your home?",
        answers: [
          {
            v: "Yes",
            vunl: 0.95,
            desc: "Great. TODO... add info"
          },
          {
            v: "No",
            vunl: 1,
            desc: " If your gutter runoff is not pointed away from your house in an appropriate direction, it can pool at the corners of your house and may eventually create leaks in your basement."
          }
        ]
      }
    ]
  },
  {
    shortDesc: "The U.S. National Weather Service defines an ice storm as a storm which results in the accumulation of at least 0.25-inch (6.4 mm) of ice on exposed surfaces.",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    id: "icestorm",
    impact: "medium",
    name: "Ice Storm",
    tags: [
      "natural"
    ],
    urls: [
      "https://en.wikipedia.org/wiki/Ice_storm/"
    ],
    logo: "/src/assets/images/hazards/icestorm.jpg"
  },
  {
    shortDesc: "No. 2 killer of Americans in 2020, accounting for about 18% of overall deaths",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    id: "cancer",
    impact: "medium",
    name: "Cancer",
    tags: [
      "health"
    ],
    urls: "https://somewhere.com/cancer/",
    logo: "/src/assets/images/hazards/cancer.jpg"
  },
  {
    shortDesc: "Heart disease remained the top killer in the U.S. in 2020, accounting for about 21% of deaths and for 31,841 more deaths than in 2019. The nearly 5% increase in heart disease deaths in 2020 was the largest such increase since 2012, researchers said.",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    id: "heart-disease",
    impact: "medium",
    name: "Heart Disease",
    tags: [
      "health"
    ],
    urls: [
      "https://somewhere.com/heartdisease/"
    ],
    logo: "/src/assets/images/hazards/heartdisease.jpg"
  },
  {
    id: "economic-collapse",
    shortDesc: "Economic collapse is any of a broad range of bad economic conditions, ranging from a severe, prolonged depression with high bankruptcy rates and high unemployment (such as the Great Depression of the 1930s)",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    impact: "high",
    name: "Economic Collapse",
    tags: [
      "economy"
    ],
    urls: [
      "https://en.wikipedia.org/wiki/Economic_collapse"
    ],
    logo: "/src/assets/images/hazards/economiccollapse.jpg"
  }
];

export default hazards;