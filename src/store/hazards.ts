import { IHazardInfo } from "../types";

const hazards = {} as {[key: string] : IHazardInfo};

hazards["avalanche"] = {
    shortDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    name: "Avalanche",
    assets: [ "life/health", "property" ],
    urls: [
      "https://someurl.com/avalanche"
    ],
    logo: "/images/hazards/avalanche.jpg",
    readmeURL: ""
};

hazards["drought"] = {
    shortDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    name: "Drought",
    assets: [ "life/health", "property" ],
    urls: [
      "https://someurl.com/drought"
    ],
    logo: "/images/hazards/drought.jpg",
    readmeURL: ""
};

hazards["seiche"] = {
    name: "Seiche",
    shortDesc: "A seiche is a standing wave in an enclosed or partially enclosed body of water. Seiches and seiche-related phenomena have been observed on lakes, reservoirs, swimming pools, bays, harbours and seas.",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    assets: [ "life", "property" ],
    urls: [
      "https://someurl.com"
    ],
    logo: "/images/hazards/unknown.jpg",
    readmeURL: ""
};

hazards["duststorm"] = {
    name: "Duststorm",
    shortDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    assets: [ "life", "property" ],
    urls: [
      "https://someurl.com/duststorm"
    ],
    logo: "/images/hazards/duststorm.jpg",
    readmeURL: ""
};

hazards["earthquake"] = {
    shortDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    name: "Earthquake",
    assets: [ "life/health", "property" ],
    urls: [
      "https://someurl.com/earthquake"
    ],
    logo: "/images/hazards/earthquake.jpg",
    readmeURL: ""
};

hazards["wildfire"] = {
    name: "Wildfire",
    shortDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    assets: [ "life/health", "property" ],
    urls: [
      "https://someurl.com/forestfire"
    ],
    logo: "/images/hazards/forestfire.jpg",
    readmeURL: ""
};

hazards["hailstorm"] = {
    shortDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    name: "Hailstorm",
    assets: [ "life/health", "property" ],
    urls: [
      "https://someurl.com/hailstorm"
    ],
    logo: "/images/hazards/hailstorm.jpg",
    readmeURL: ""
};

hazards["hurricane"] = {
    name: "Hurricane",
    shortDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    assets: [ "life/health", "property" ],
    urls: [
      "https://someurl.com/hurricane"
    ],
    logo: "/images/hazards/hurricane.jpg",
    readmeURL: ""
};

hazards["tropicaldepression"] = {
    name: "Tropical Depression",
    shortDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    assets: [ "life/health", "property" ],
    urls: [
      "https://someurl.com/hurricane"
    ],
    logo: "/images/hazards/hurricane.jpg",
    readmeURL: ""
};

hazards["tropicalstorm"] = {
    name: "Tropical Storm",
    shortDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    assets: [ "life/health", "property" ],
    urls: [
      "https://someurl.com/hurricane"
    ],
    logo: "/images/hazards/hurricane.jpg",
    readmeURL: ""
};

hazards["sandstorm"] = {
    shortDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    name: "Sandstorm",
    assets: [ "life/health", "property" ],
    urls: [
      "https://someurl.com/sandstorm"
    ],
    logo: "/images/hazards/sandstorm.jpg",
    readmeURL: ""
};

hazards["sinkhole"] = {
    shortDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    name: "Sinkhole",
    assets: [ "life/health", "property" ],
    urls: [
      "https://someurl.com/sinkhole"
    ],
    logo: "/images/hazards/sinkhole.jpg",
    readmeURL: ""
};

hazards["thunderstorm"] = {
    shortDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    name: "Thunderstorm/Wind",
    assets: [ "life/health", "property" ],
    urls: [
      "https://someurl.com/thunderstorm"
    ],
    logo: "/images/hazards/thunderstorm.jpg",
    readmeURL: "//raw.githubusercontent.com/iuctil/dsla/master/content/docs/KnowledgeObjects/AWS_EC2.md"
};

hazards["tornado"] = {
    shortDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    name: "Tornado",
    assets: [ "life/health", "property" ],
    urls: [
      "https://someurl.com/tornado"
    ],
    logo: "/images/hazards/tornado.jpg",
    readmeURL: "//raw.githubusercontent.com/iuctil/dsla/master/content/docs/KnowledgeObjects/AWS_EC2.md"
};

hazards["funnelcloud"] = {
    name: "Funnel Cloud",
    shortDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    assets: [ "life/health", "property" ],
    urls: [ "https://someurl.com/tornado" ],
    logo: "/images/hazards/tornado.jpg",
    readmeURL: "//raw.githubusercontent.com/iuctil/dsla/master/content/docs/KnowledgeObjects/AWS_EC2.md"
};

hazards["tsunami"] = {
    shortDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    name: "Tsunami",
    assets: [ "life/health", "property" ],
    urls: [
      "https://someurl.com/tsunami"
    ],
    logo: "/images/hazards/tsunami.jpg",
    readmeURL: "//raw.githubusercontent.com/iuctil/dsla/master/content/docs/KnowledgeObjects/AWS_EC2.md"
};

hazards["volcano"] = {
    shortDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    name: "Volcano",
    assets: [ "life/health", "property" ],
    urls: [
      "https://someurl.com/volcano"
    ],
    logo: "/images/hazards/volcano.jpg",
    readmeURL: "//raw.githubusercontent.com/iuctil/dsla/master/content/docs/KnowledgeObjects/AWS_EC2.md"
};

hazards["highwind"] = {
    shortDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    name: "High Wind",
    assets: [ "life/health", "property" ],
    urls: [
      "https://someurl.com/windstorm"
    ],
    logo: "/images/hazards/windstorm.jpg",
    readmeURL: "//raw.githubusercontent.com/iuctil/dsla/master/content/docs/KnowledgeObjects/AWS_EC2.md"
};

hazards["frostfreeze"] = {
    name: "Frost/Freeze",
    shortDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    assets: [ "todo" ],
    urls: [ "https://someurl.com/" ],
    logo: "/images/hazards/icestorm.jpg",
    readmeURL: "//raw.githubusercontent.com/iuctil/dsla/master/content/docs/KnowledgeObjects/AWS_EC2.md"
};

hazards["extremecold"] = {
    name: "Extreme Cold/Wind Chill",
    shortDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    assets: [ "todo" ],
    urls: [ "https://someurl.com/" ],
    logo: "/images/hazards/icestorm.jpg",
    readmeURL: "//raw.githubusercontent.com/iuctil/dsla/master/content/docs/KnowledgeObjects/AWS_EC2.md"
};

hazards["winterstorm"] = {
    name: "Winter Storm",
    shortDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    assets: [ "todo" ],
    urls: [ "https://someurl.com/" ],
    logo: "/images/hazards/snowstorm.jpg",
    readmeURL: "//raw.githubusercontent.com/iuctil/dsla/master/content/docs/KnowledgeObjects/AWS_EC2.md"
};

hazards["winterweather"] = {
    name: "Winter Weather",
    shortDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    assets: [ "todo" ],
    urls: [ "https://someurl.com/" ],
    logo: "/images/hazards/snowstorm.jpg",
    readmeURL: "//raw.githubusercontent.com/iuctil/dsla/master/content/docs/KnowledgeObjects/AWS_EC2.md"
};

hazards["heat"] = {
    name: "Heat",
    shortDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    assets: [ "todo" ],
    urls: [ "https://someurl.com/" ],
    logo: "/images/hazards/unknown.jpg",
    readmeURL: "//raw.githubusercontent.com/iuctil/dsla/master/content/docs/KnowledgeObjects/AWS_EC2.md"
};

hazards["dustdevil"] = {
    name: "Dust Devil",
    shortDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    assets: [ "todo" ],
    urls: [ "https://someurl.com/" ],
    logo: "/images/hazards/unknown.jpg",
    readmeURL: "//raw.githubusercontent.com/iuctil/dsla/master/content/docs/KnowledgeObjects/AWS_EC2.md"
};

hazards["duststorm"] = {
    name: "Dust Storm",
    shortDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    assets: [ "todo" ],
    urls: [ "https://someurl.com/" ],
    logo: "/images/hazards/unknown.jpg",
    readmeURL: "//raw.githubusercontent.com/iuctil/dsla/master/content/docs/KnowledgeObjects/AWS_EC2.md"
};

hazards["avalanche"] = {
    name: "Avalanche",
    shortDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    assets: [ "todo" ],
    urls: [ "https://someurl.com/" ],
    logo: "/images/hazards/unknown.jpg",
    readmeURL: "//raw.githubusercontent.com/iuctil/dsla/master/content/docs/KnowledgeObjects/AWS_EC2.md"
};

hazards["sleet"] = {
    name: "Sleet",
    shortDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    assets: [ "todo" ],
    urls: [ "https://someurl.com/" ],
    logo: "/images/hazards/unknown.jpg",
    readmeURL: "//raw.githubusercontent.com/iuctil/dsla/master/content/docs/KnowledgeObjects/AWS_EC2.md"
};

hazards["landslide"] = {
    name: "Landslide",
    shortDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    assets: [ "todo" ],
    urls: [ "https://someurl.com/" ],
    logo: "/images/hazards/unknown.jpg",
    readmeURL: "//raw.githubusercontent.com/iuctil/dsla/master/content/docs/KnowledgeObjects/AWS_EC2.md"
};

hazards["densefog"] = {
    name: "Dense Fog",
    shortDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    assets: [ "todo" ],
    urls: [ "https://someurl.com/" ],
    logo: "/images/hazards/unknown.jpg",
    readmeURL: "//raw.githubusercontent.com/iuctil/dsla/master/content/docs/KnowledgeObjects/AWS_EC2.md"
};

hazards["highsurf"] = {
    name: "High Surf",
    shortDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    assets: [ "todo" ],
    urls: [ "https://someurl.com/" ],
    logo: "/images/hazards/unknown.jpg",
    readmeURL: "//raw.githubusercontent.com/iuctil/dsla/master/content/docs/KnowledgeObjects/AWS_EC2.md"
};

hazards["debrisflow"] = {
    name: "Debris Flow",
    shortDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    assets: [ "todo" ],
    urls: [ "https://someurl.com/" ],
    logo: "/images/hazards/unknown.jpg",
    readmeURL: "//raw.githubusercontent.com/iuctil/dsla/master/content/docs/KnowledgeObjects/AWS_EC2.md"
};

hazards["freezingfog"] = {
    name: "Freezing Fog",
    shortDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    assets: [ "todo" ],
    urls: [ "https://someurl.com/" ],
    logo: "/images/hazards/unknown.jpg",
    readmeURL: "//raw.githubusercontent.com/iuctil/dsla/master/content/docs/KnowledgeObjects/AWS_EC2.md"
};

hazards["heavysnow"] = {
    name: "Heavy Storm",
    shortDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    assets: [ "todo" ],
    urls: [ "https://someurl.com/" ],
    logo: "/images/hazards/snowstorm.jpg",
    readmeURL: "//raw.githubusercontent.com/iuctil/dsla/master/content/docs/KnowledgeObjects/AWS_EC2.md"
};

hazards["lakeeffectsnow"] = {
    name: "Lake-Effect Snow",
    shortDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    assets: [ "todo" ],
    urls: [ "https://someurl.com/" ],
    logo: "/images/hazards/snowstorm.jpg",
    readmeURL: "//raw.githubusercontent.com/iuctil/dsla/master/content/docs/KnowledgeObjects/AWS_EC2.md"
}

hazards["blizzard"] = {
    name: "Blizzard",
    shortDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    assets: [ "todo" ],
    urls: [ "https://someurl.com/" ],
    logo: "/images/hazards/snowstorm.jpg",
    readmeURL: "//raw.githubusercontent.com/iuctil/dsla/master/content/docs/KnowledgeObjects/AWS_EC2.md"
};

hazards["heavyrain"] = {
    name: "Heavy Rain",
    shortDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    assets: [ "todo" ],
    urls: [ "https://someurl.com/" ],
    logo: "/images/hazards/unknown.jpg",
    readmeURL: "//raw.githubusercontent.com/iuctil/dsla/master/content/docs/KnowledgeObjects/AWS_EC2.md"
};

hazards["lightning"] = {
    name: "Lightning",
    shortDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    assets: [ "todo" ],
    urls: [ "https://someurl.com/" ],
    logo: "/images/hazards/unknown.jpg",
    readmeURL: "//raw.githubusercontent.com/iuctil/dsla/master/content/docs/KnowledgeObjects/AWS_EC2.md"
};

hazards["flashflood"] = {
    name: "Flash Flood",
    shortDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    assets: [ "todo" ],
    urls: [ "https://someurl.com/" ],
    logo: "/images/hazards/flood.jpg",
    readmeURL: "//raw.githubusercontent.com/iuctil/dsla/master/content/docs/KnowledgeObjects/AWS_EC2.md"
};

hazards["stormsurge"] = {
    name: "Storm Surge",
    shortDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    assets: [ "todo" ],
    urls: [ "https://someurl.com/" ],
    logo: "/images/hazards/stormsurge.jpg",
    readmeURL: "//raw.githubusercontent.com/iuctil/dsla/master/content/docs/KnowledgeObjects/AWS_EC2.md"
};

hazards["ripcurrent"] = {
    name: "Rip Current",
    shortDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    assets: [ "todo" ],
    urls: [ "https://someurl.com/" ],
    logo: "/images/hazards/stormsurge.jpg",
    readmeURL: "//raw.githubusercontent.com/iuctil/dsla/master/content/docs/KnowledgeObjects/AWS_EC2.md"
},

hazards["coastalflood"] = {
    name: "Coastal Flood",
    shortDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    assets: [ "todo" ],
    urls: [ "https://someurl.com/" ],
    logo: "/images/hazards/flood.jpg",
    readmeURL: "//raw.githubusercontent.com/iuctil/dsla/master/content/docs/KnowledgeObjects/AWS_EC2.md"
},

hazards["lakeshoreflood"] = {
    name: "Lakeshore Flood",
    shortDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    assets: [ "todo" ],
    urls: [ "https://someurl.com/" ],
    logo: "/images/hazards/flood.jpg",
    readmeURL: "//raw.githubusercontent.com/iuctil/dsla/master/content/docs/KnowledgeObjects/AWS_EC2.md"
},

hazards["flood"] = {
    shortDesc: "Believe it or not, flooding is the deadliest type of severe weather. There’s probably a lot about floods and flooding you don’t know.",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    name: "Flooding",
    assets: [ "life", "property" ],
    urls: [
      "https://www.ready.gov/floods",
      "https://www.earthnetworks.com/flooding/",
      "https://www.valuepenguin.com/homeowners-insurance/how-to-prevent-home-flooding"
    ],
    logo: "/images/hazards/flood.jpg",
    readmeURL: "//raw.githubusercontent.com/iuctil/dsla/master/content/docs/KnowledgeObjects/AWS_EC2.md"

    /*
    probMitigations: [
      {
        question: "Is your property within or near the flood zone?",
        answers: [
          {
            v: null,
            vunl: 0.8,
            desc: "The first against flooding is to know if you are in a floodzone. We recommend visiting https://floodfactor.com and understand your flood risks."
          },
          {
            v: "Yes",
            vunl: 1,
            desc: "If you are in/near the flood zone, you must take this hazard seriously. Please examine the rest of the vulnerabilities."
          },
          {
            v: "No",
            vunl: 0.3,
            desc: "The Flood zone calculation might not include a rare flooding events. You might also be affected indirectly by flooded access road, or utility systems that are not directly next to your resident."
          }
        ]
      },
      {
        question: "Does your home sit on stilts/piers above the flood level?",
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
    ],
    impactMitigations: [
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
      },
      {
        question: "Are your appliances equipped with automatic shutoff valves to prevent leakage and limit water damage?",
        answers: [
          {
            v: "Yes",
            vunl: 0.80,
            desc: "Great. TODO... add info"
          },
          {
            v: "No",
            vunl: 1,
            desc: "TODO - you should look into it!",
          }
        ]
      }
    ]
    */
};

hazards["icestorm"] = {
    shortDesc: "The U.S. National Weather Service defines an ice storm as a storm which results in the accumulation of at least 0.25-inch (6.4 mm) of ice on exposed surfaces.",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    name: "Ice Storm",
    assets: [ "life/health", "property" ],
    urls: [
      "https://en.wikipedia.org/wiki/Ice_storm/"
    ],
    logo: "/images/hazards/icestorm.jpg",
    readmeURL: "//raw.githubusercontent.com/iuctil/dsla/master/content/docs/KnowledgeObjects/AWS_EC2.md"
};

hazards["cancer"] = {
    shortDesc: "No. 2 killer of Americans in 2020, accounting for about 18% of overall deaths",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    name: "Cancer",
    assets: [ "life/health" ],
    urls: ["https://somewhere.com/cancer/"],
    logo: "/images/hazards/cancer.jpg",
    readmeURL: "//raw.githubusercontent.com/iuctil/dsla/master/content/docs/KnowledgeObjects/AWS_EC2.md"
}

hazards["heart-disease"] = {
    shortDesc: "Heart disease remained the top killer in the U.S. in 2020, accounting for about 21% of deaths and for 31,841 more deaths than in 2019. The nearly 5% increase in heart disease deaths in 2020 was the largest such increase since 2012, researchers said.",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    name: "Heart Disease",
    assets: [ "life/health" ],
    urls: [
      "https://somewhere.com/heartdisease/"
    ],
    logo: "/images/hazards/heartdisease.jpg",
    readmeURL: "//raw.githubusercontent.com/iuctil/dsla/master/content/docs/KnowledgeObjects/AWS_EC2.md"
}

hazards["economic-collapse"] = {
    shortDesc: "Economic collapse is any of a broad range of bad economic conditions, ranging from a severe, prolonged depression with high bankruptcy rates and high unemployment (such as the Great Depression of the 1930s)",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    name: "Economic Collapse",
    assets: [ "property" ],
    urls: [
      "https://en.wikipedia.org/wiki/Economic_collapse"
    ],
    logo: "/images/hazards/economiccollapse.jpg",
    readmeURL: "//raw.githubusercontent.com/iuctil/dsla/master/content/docs/KnowledgeObjects/AWS_EC2.md"
};

hazards["house-fire"] = {
    name: "House Fire",
    shortDesc: "",
    desc: "",
    assets: [ "life/health", "property" ],
    urls: [ ],
    logo: "/images/hazards/housefire.jpg",
    readmeURL: "//raw.githubusercontent.com/iuctil/dsla/master/content/docs/KnowledgeObjects/AWS_EC2.md"
};

hazards["id-theft"] = {
    name: "Identity Theft",
    shortDesc: "",
    desc: "",
    assets: [ "information" ],
    urls: [ ],
    logo: "/images/hazards/idtheft.jpg",
    readmeURL: "//raw.githubusercontent.com/iuctil/dsla/master/content/docs/KnowledgeObjects/AWS_EC2.md"
};

hazards["car-accident"] = {
    name: "Car Accident",
    shortDesc: "",
    desc: "",
    assets: [ "life/health", "property" ],
    urls: [ ],
    logo: "/images/hazards/caraccident.jpg",
    readmeURL: "//raw.githubusercontent.com/iuctil/dsla/master/content/docs/KnowledgeObjects/AWS_EC2.md"
};

hazards["power-failure"] = {
    name: "Power Failure",
    shortDesc: "",
    desc: "",
    assets: [ "life/health", "property" ],
    urls: [ ],
    logo: "/images/hazards/powerfailure.jpg",
    readmeURL: "//raw.githubusercontent.com/iuctil/dsla/master/content/docs/KnowledgeObjects/AWS_EC2.md"
};

hazards["cyber-attack"] = {
    name: "Cyber Attack",
    shortDesc: "Service outages and randomware that can criple effensial operations.",
    desc: "",
    assets: [ "life/health", "property" ],
    urls: [ ],
    logo: "/images/hazards/cyberattack.jpg",
    readmeURL: "//raw.githubusercontent.com/iuctil/dsla/master/content/docs/KnowledgeObjects/AWS_EC2.md"
};

hazards["riots"] = {
    name: "Riots",
    shortDesc: "",
    desc: "",
    assets: [ "life/health", "property" ],
    urls: [ ],
    logo: "/images/hazards/riots.jpg",
    readmeURL: "//raw.githubusercontent.com/iuctil/dsla/master/content/docs/KnowledgeObjects/AWS_EC2.md"
};

export default hazards;
