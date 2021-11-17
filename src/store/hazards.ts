const hazards = [
  {
    shortDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    id: "avalanche",
    name: "Avalanche",
    assets: [ "life/health", "property" ],
    urls: [
      "https://someurl.com/avalanche"
    ],
    logo: "/src/assets/images/hazards/avalanche.jpg"
  },
  {
    shortDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    id: "drought",
    name: "Drought",
    assets: [ "life/health", "property" ],
    urls: [
      "https://someurl.com/drought"
    ],
    logo: "/src/assets/images/hazards/drought.jpg"
  },

  {
    id: "seiche",
    name: "Seiche",
    shortDesc: "A seiche is a standing wave in an enclosed or partially enclosed body of water. Seiches and seiche-related phenomena have been observed on lakes, reservoirs, swimming pools, bays, harbours and seas.",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    assets: [ "life", "property" ],
    urls: [
      "https://someurl.com"
    ],
    logo: "/src/assets/images/hazards/unknown.jpg"
  },

  {
    id: "duststorm",
    name: "Duststorm",
    shortDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    assets: [ "life", "property" ],
    urls: [
      "https://someurl.com/duststorm"
    ],
    logo: "/src/assets/images/hazards/duststorm.jpg"
  },
  {
    shortDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    id: "earthquake",
    name: "Earthquake",
    assets: [ "life/health", "property" ],
    urls: [
      "https://someurl.com/earthquake"
    ],
    logo: "/src/assets/images/hazards/earthquake.jpg"
  },
  {
    id: "wildfire",
    name: "Wildfire",
    shortDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    assets: [ "life/health", "property" ],
    urls: [
      "https://someurl.com/forestfire"
    ],
    logo: "/src/assets/images/hazards/forestfire.jpg"
  },
  {
    shortDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    id: "hailstorm",
    name: "Hailstorm",
    assets: [ "life/health", "property" ],
    urls: [
      "https://someurl.com/hailstorm"
    ],
    logo: "/src/assets/images/hazards/hailstorm.jpg"
  },

  {
    id: "hurricane",
    name: "Hurricane",
    shortDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    assets: [ "life/health", "property" ],
    urls: [
      "https://someurl.com/hurricane"
    ],
    logo: "/src/assets/images/hazards/hurricane.jpg"
  },

  {
    id: "tropicaldepression",
    name: "Tropical Depression",
    shortDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    assets: [ "life/health", "property" ],
    urls: [
      "https://someurl.com/hurricane"
    ],
    logo: "/src/assets/images/hazards/hurricane.jpg"
  },

  {
    id: "tropicalstorm",
    name: "Tropical Storm",
    shortDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    assets: [ "life/health", "property" ],
    urls: [
      "https://someurl.com/hurricane"
    ],
    logo: "/src/assets/images/hazards/hurricane.jpg"
  },

  {
    shortDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    id: "sandstorm",
    name: "Sandstorm",
    assets: [ "life/health", "property" ],
    urls: [
      "https://someurl.com/sandstorm"
    ],
    logo: "/src/assets/images/hazards/sandstorm.jpg"
  },
  {
    shortDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    id: "sinkhole",
    name: "Sinkhole",
    assets: [ "life/health", "property" ],
    urls: [
      "https://someurl.com/sinkhole"
    ],
    logo: "/src/assets/images/hazards/sinkhole.jpg"
  },
  {
    shortDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    id: "thunderstorm",
    name: "Thunderstorm/Wind",
    assets: [ "life/health", "property" ],
    urls: [
      "https://someurl.com/thunderstorm"
    ],
    logo: "/src/assets/images/hazards/thunderstorm.jpg"
  },

  {
    shortDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    id: "tornado",
    name: "Tornado",
    assets: [ "life/health", "property" ],
    urls: [
      "https://someurl.com/tornado"
    ],
    logo: "/src/assets/images/hazards/tornado.jpg"
  },

  {
    id: "funnelcloud",
    name: "Funnel Cloud",
    shortDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    assets: [ "life/health", "property" ],
    urls: [ "https://someurl.com/tornado" ],
    logo: "/src/assets/images/hazards/tornado.jpg"
  },

  {
    shortDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    id: "tsunami",
    name: "Tsunami",
    assets: [ "life/health", "property" ],
    urls: [
      "https://someurl.com/tsunami"
    ],
    logo: "/src/assets/images/hazards/tsunami.jpg"
  },
  {
    shortDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    id: "volcano",
    name: "Volcano",
    assets: [ "life/health", "property" ],
    urls: [
      "https://someurl.com/volcano"
    ],
    logo: "/src/assets/images/hazards/volcano.jpg"
  },
  {
    shortDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    id: "highwind",
    name: "High Wind",
    assets: [ "life/health", "property" ],
    urls: [
      "https://someurl.com/windstorm"
    ],
    logo: "/src/assets/images/hazards/windstorm.jpg"
  },

  {
    id: "frostfreeze",
    name: "Frost/Freeze",
    shortDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    assets: [ "todo" ],
    urls: [ "https://someurl.com/" ],
    logo: "/src/assets/images/hazards/icestorm.jpg"
  },

  {
    id: "Extreme Cold/Wind Chill",
    name: "extremecold",
    shortDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    assets: [ "todo" ],
    urls: [ "https://someurl.com/" ],
    logo: "/src/assets/images/hazards/icestorm.jpg"
  },

  {
    id: "winterstorm",
    name: "Winter Storm",
    shortDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    assets: [ "todo" ],
    urls: [ "https://someurl.com/" ],
    logo: "/src/assets/images/hazards/snowstorm.jpg"
  },

  {
    id: "winterweather",
    name: "Winter Weather",
    shortDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    assets: [ "todo" ],
    urls: [ "https://someurl.com/" ],
    logo: "/src/assets/images/hazards/snowstorm.jpg"
  },

  {
    id: "heat",
    name: "Heat",
    shortDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    assets: [ "todo" ],
    urls: [ "https://someurl.com/" ],
    logo: "/src/assets/images/hazards/unknown.jpg"
  },

  {
    id: "dustdevil",
    name: "Dust Devil",
    shortDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    assets: [ "todo" ],
    urls: [ "https://someurl.com/" ],
    logo: "/src/assets/images/hazards/unknown.jpg"
  },

  {
    id: "duststorm",
    name: "Dust Storm",
    shortDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    assets: [ "todo" ],
    urls: [ "https://someurl.com/" ],
    logo: "/src/assets/images/hazards/unknown.jpg"
  },

  {
    id: "avalanche",
    name: "Avalanche",
    shortDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    assets: [ "todo" ],
    urls: [ "https://someurl.com/" ],
    logo: "/src/assets/images/hazards/unknown.jpg"
  },

  {
    id: "sleet",
    name: "Sleet",
    shortDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    assets: [ "todo" ],
    urls: [ "https://someurl.com/" ],
    logo: "/src/assets/images/hazards/unknown.jpg"
  },

  {
    id: "landslide",
    name: "Landslide",
    shortDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    assets: [ "todo" ],
    urls: [ "https://someurl.com/" ],
    logo: "/src/assets/images/hazards/unknown.jpg"
  },

  {
    id: "densefog",
    name: "Dense Fog",
    shortDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    assets: [ "todo" ],
    urls: [ "https://someurl.com/" ],
    logo: "/src/assets/images/hazards/unknown.jpg"
  },

  {
    id: "highsurf",
    name: "High Surf",
    shortDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    assets: [ "todo" ],
    urls: [ "https://someurl.com/" ],
    logo: "/src/assets/images/hazards/unknown.jpg"
  },

  {
    id: "debrisflow",
    name: "Debris Flow",
    shortDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    assets: [ "todo" ],
    urls: [ "https://someurl.com/" ],
    logo: "/src/assets/images/hazards/unknown.jpg"
  },

  {
    id: "freezingfog",
    name: "Freezing Fog",
    shortDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    assets: [ "todo" ],
    urls: [ "https://someurl.com/" ],
    logo: "/src/assets/images/hazards/unknown.jpg"
  },

  {
    id: "heavysnow",
    name: "Heavy Storm",
    shortDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    assets: [ "todo" ],
    urls: [ "https://someurl.com/" ],
    logo: "/src/assets/images/hazards/snowstorm.jpg"
  },

  {
    id: "lakeeffectsnow",
    name: "Lake-Effect Snow",
    shortDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    assets: [ "todo" ],
    urls: [ "https://someurl.com/" ],
    logo: "/src/assets/images/hazards/snowstorm.jpg"
  },

  {
    id: "blizzard",
    name: "Blizzard",
    shortDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    assets: [ "todo" ],
    urls: [ "https://someurl.com/" ],
    logo: "/src/assets/images/hazards/snowstorm.jpg"
  },

  {
    id: "heavyrain",
    name: "Heavy Rain",
    shortDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    assets: [ "todo" ],
    urls: [ "https://someurl.com/" ],
    logo: "/src/assets/images/hazards/unknown.jpg"
  },

  {
    id: "lightning",
    name: "Lightning",
    shortDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    assets: [ "todo" ],
    urls: [ "https://someurl.com/" ],
    logo: "/src/assets/images/hazards/unknown.jpg"
  },

  {
    id: "flashflood",
    name: "Flash Flood",
    shortDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    assets: [ "todo" ],
    urls: [ "https://someurl.com/" ],
    logo: "/src/assets/images/hazards/flood.jpg"
  },

  {
    id: "stormsurge",
    name: "Storm Surge",
    shortDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    assets: [ "todo" ],
    urls: [ "https://someurl.com/" ],
    logo: "/src/assets/images/hazards/stormsurge.jpg"
  },

  {
    id: "ripcurrent",
    name: "Rip Current",
    shortDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    assets: [ "todo" ],
    urls: [ "https://someurl.com/" ],
    logo: "/src/assets/images/hazards/stormsurge.jpg"
  },

  {
    id: "coastalflood",
    name: "Coastal Flood",
    shortDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    assets: [ "todo" ],
    urls: [ "https://someurl.com/" ],
    logo: "/src/assets/images/hazards/flood.jpg"
  },

  {
    id: "lakeshoreflood",
    name: "Lakeshore Flood",
    shortDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    assets: [ "todo" ],
    urls: [ "https://someurl.com/" ],
    logo: "/src/assets/images/hazards/flood.jpg"
  },

  {
    id: "flood",
    shortDesc: "Believe it or not, flooding is the deadliest type of severe weather. There’s probably a lot about floods and flooding you don’t know.",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    name: "Flooding",
    assets: [ "life", "property" ],
    urls: [
      "https://www.ready.gov/floods",
      "https://www.earthnetworks.com/flooding/",
      "https://www.valuepenguin.com/homeowners-insurance/how-to-prevent-home-flooding"
    ],
    logo: "/src/assets/images/hazards/flood.jpg",

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
  },
  {
    shortDesc: "The U.S. National Weather Service defines an ice storm as a storm which results in the accumulation of at least 0.25-inch (6.4 mm) of ice on exposed surfaces.",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    id: "icestorm",
    name: "Ice Storm",
    assets: [ "life/health", "property" ],
    urls: [
      "https://en.wikipedia.org/wiki/Ice_storm/"
    ],
    logo: "/src/assets/images/hazards/icestorm.jpg"
  },
  {
    shortDesc: "No. 2 killer of Americans in 2020, accounting for about 18% of overall deaths",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    id: "cancer",
    name: "Cancer",
    assets: [ "life/health" ],
    urls: "https://somewhere.com/cancer/",
    logo: "/src/assets/images/hazards/cancer.jpg"
  },
  {
    shortDesc: "Heart disease remained the top killer in the U.S. in 2020, accounting for about 21% of deaths and for 31,841 more deaths than in 2019. The nearly 5% increase in heart disease deaths in 2020 was the largest such increase since 2012, researchers said.",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    id: "heart-disease",
    name: "Heart Disease",
    assets: [ "life/health" ],
    urls: [
      "https://somewhere.com/heartdisease/"
    ],
    logo: "/src/assets/images/hazards/heartdisease.jpg"
  },
  {
    id: "economic-collapse",
    shortDesc: "Economic collapse is any of a broad range of bad economic conditions, ranging from a severe, prolonged depression with high bankruptcy rates and high unemployment (such as the Great Depression of the 1930s)",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    name: "Economic Collapse",
    assets: [ "property" ],
    urls: [
      "https://en.wikipedia.org/wiki/Economic_collapse"
    ],
    logo: "/src/assets/images/hazards/economiccollapse.jpg"
  },
  {
    id: "house-fire",
    name: "House Fire",
    shortDesc: "",
    desc: "",
    assets: [ "life/health", "property" ],
    urls: [ ],
    logo: "/src/assets/images/hazards/housefire.jpg"
  },
  {
    id: "id-theft",
    name: "Identity Theft",
    shortDesc: "",
    desc: "",
    assets: [ "information" ],
    urls: [ ],
    logo: "/src/assets/images/hazards/idtheft.jpg"
  },
  {
    id: "car-accident",
    name: "Car Accident",
    shortDesc: "",
    desc: "",
    assets: [ "life/health", "property" ],
    urls: [ ],
    logo: "/src/assets/images/hazards/caraccident.jpg"
  },
  {
    id: "power-failure",
    name: "Power Failure",
    shortDesc: "",
    desc: "",
    assets: [ "life/health", "property" ],
    urls: [ ],
    logo: "/src/assets/images/hazards/powerfailure.jpg"
  },
  {
    id: "cyber-attack",
    name: "Cyber Attack",
    shortDesc: "Service outages and randomware that can criple effensial operations.",
    desc: "",
    assets: [ "life/health", "property" ],
    urls: [ ],
    logo: "/src/assets/images/hazards/cyberattack.jpg"
  },
  {
    id: "riots",
    name: "Riots",
    shortDesc: "",
    desc: "",
    assets: [ "life/health", "property" ],
    urls: [ ],
    logo: "/src/assets/images/hazards/riots.jpg"
  },

];

export default hazards;
