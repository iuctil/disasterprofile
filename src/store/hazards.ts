import { IHazardInfo } from "../types";

const hazards = {} as {[key: string] : IHazardInfo};

hazards["avalanche"] = {
    desc: "An avalanche is a large amount of snow moving quickly down a mountain, typically on slopes of 30 to 45 degrees. When an avalanche stops, the snow becomes solid like concrete and people are unable to dig out. People caught in avalanches can die from suffocation, trauma or hypothermia. (https://www.ready.gov/avalanche)",
    name: "Avalanche",
    logo: "/images/hazards/avalanche.jpg",
};

hazards["terrorism"] = {
    desc: "The unlawful use of violence and intimidation, especially against civilians, in the pursuit of political aims.",
    name: "terrorism",
    logo: "/images/hazards/terrorism.jpg",
};

hazards["drought"] = {
    desc: "Nearly every part of the U.S. experiences periods of reduced rainfall. Planning in advance for a drought can protect us in dry years.",
    name: "Drought",
    logo: "/images/hazards/drought.jpg",
};

hazards["seiche"] = {
    name: "Seiche",
    desc: "A seiche is a standing wave in an enclosed or partially enclosed body of water. Seiches and seiche-related phenomena have been observed on lakes, reservoirs, swimming pools, bays, harbours and seas.",
    logo: "/images/hazards/unknown.jpg",
};

hazards["duststorm"] = {
    name: "Duststorm",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    logo: "/images/hazards/duststorm.jpg",
};

hazards["earthquake"] = {
    desc: "An earthquake is a sudden, rapid shaking of the ground caused by the shifting of rocks deep underneath the earth’s surface. Earthquakes can cause fires, tsunamis, landslides or avalanches. While they can happen anywhere without warning, areas at higher risk for earthquakes include Alaska, California, Hawaii, Oregon, Puerto Rico, Washington and the entire Mississippi River Valley.",
    name: "Earthquake",
    logo: "/images/hazards/earthquake.jpg",
};

hazards["wildfire"] = {
    name: "Wildfire",
    desc: "Wildfires are unplanned fires that burn in natural areas like forests, grasslands or prairies. These dangerous fires spread quickly and can devastate not only wildfire and natural areas, but also communities.",
    logo: "/images/hazards/forestfire.jpg",
};

hazards["hailstorm"] = {
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    name: "Hailstorm",
    logo: "/images/hazards/hailstorm.jpg",
};

hazards["hurricane"] = {
    name: "Hurricane",
    desc: "Hurricanes are dangerous and can cause major damage because of storm surge, wind damage, rip currents and flooding. They can happen along any U.S. coast or in any territory in the Atlantic or Pacific oceans. Storm surge is historically the leading cause of hurricane-related deaths in the United States.",
    logo: "/images/hazards/hurricane.jpg",
};

hazards["tropicaldepression"] = {
    name: "Tropical Depression",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    logo: "/images/hazards/hurricane.jpg",
};

hazards["tropicalstorm"] = {
    name: "Tropical Storm",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    logo: "/images/hazards/hurricane.jpg",
};

hazards["sandstorm"] = {
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    name: "Sandstorm",
    logo: "/images/hazards/sandstorm.jpg",
};

hazards["sinkhole"] = {
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    name: "Sinkhole",
    logo: "/images/hazards/sinkhole.jpg",
};

hazards["thunderstorm"] = {
    desc: "Thunderstorms are dangerous storms that include lightning and can create or cause: powerful winds over 50mph, hail, flash flooding and/or tornadoes",
    name: "Thunderstorm/Wind",
    logo: "/images/hazards/thunderstorm.jpg",
};

hazards["tornado"] = {
    desc: "Tornadoes are violently rotating columns of air that extend from a thunderstorm to the ground. Tornadoes can destroy buildings, flip cars, and create deadly flying debris.",
    name: "Tornado",
    logo: "/images/hazards/tornado.jpg",
};

hazards["funnelcloud"] = {
    name: "Funnel Cloud",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    logo: "/images/hazards/tornado.jpg",
};

hazards["tsunami"] = {
    desc: "A tsunami can kill or injure people and damage or destroy buildings and infrastructure as waves come in and go out. A tsunami is a series of enormous ocean waves caused by earthquakes, underwater landslides, volcanic eruptions, or asteroids. ",
    name: "Tsunami",
    logo: "/images/hazards/tsunami.jpg",
};

hazards["volcano"] = {
    desc: "A volcano is an opening in the Earth’s crust that allows molten rock, gases, and debris to escape to the surface. Alaska, Hawaii, California, and Oregon have the most active volcanoes, but other states and territories have active volcanoes, too. A volcanic eruption may involve lava and other debris that can flow up to 100 mph, destroying everything in their path. Volcanic ash can travel 100s of miles and cause severe health problems.",
    name: "Volcano",
    logo: "/images/hazards/volcano.jpg",
};

hazards["highwind"] = {
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    name: "High Wind",
    logo: "/images/hazards/windstorm.jpg",
};

hazards["frostfreeze"] = {
    name: "Frost/Freeze",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    logo: "/images/hazards/icestorm.jpg",
};

hazards["extremecold"] = {
    name: "Extreme Cold/Wind Chill",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    logo: "/images/hazards/icestorm.jpg",
};

hazards["winterstorm"] = {
    name: "Winter Storm",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    logo: "/images/hazards/snowstorm.jpg",
};

hazards["winterweather"] = {
    name: "Winter Weather",
    desc: "Winter storms create a higher risk of car accidents, hypothermia, frostbite, carbon monoxide poisoning, and heart attacks from overexertion. Winter storms including blizzards can bring extreme cold, freezing rain, snow, ice and high winds.",
    logo: "/images/hazards/snowstorm.jpg",
};

hazards["heat"] = {
    name: "Heat",
    desc: "There is hot, and then there is hot! Extreme heat is a period of high heat and humidity with temperatures above 90 degrees for at least two to three days. In extreme heat your body works extra hard to maintain a normal temperature, which can lead to death. Extreme heat is responsible for the highest number of annual deaths among all weather-related hazards.",
    logo: "/images/hazards/unknown.jpg",
};

hazards["dustdevil"] = {
    name: "Dust Devil",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    logo: "/images/hazards/unknown.jpg",
};

hazards["duststorm"] = {
    name: "Dust Storm",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    logo: "/images/hazards/unknown.jpg",
};

hazards["avalanche"] = {
    name: "Avalanche",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    logo: "/images/hazards/unknown.jpg",
};

hazards["sleet"] = {
    name: "Sleet",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    logo: "/images/hazards/unknown.jpg",
};

hazards["landslide"] = {
    name: "Landslide",
    desc: "Landslides occur in all U.S. states and territories and can be caused by many factors including earthquakes, storms, volcanic eruptions, fire and human modification of land. The most deadly landslides are the ones that occur quickly, often with little notice.",
    logo: "/images/hazards/unknown.jpg",
};

hazards["densefog"] = {
    name: "Dense Fog",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    logo: "/images/hazards/unknown.jpg",
};

hazards["highsurf"] = {
    name: "High Surf",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    logo: "/images/hazards/unknown.jpg",
};

hazards["debrisflow"] = {
    name: "Debris Flow",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    logo: "/images/hazards/unknown.jpg",
};

hazards["freezingfog"] = {
    name: "Freezing Fog",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    logo: "/images/hazards/unknown.jpg",
};

hazards["heavysnow"] = {
    name: "Heavy Storm",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    logo: "/images/hazards/snowstorm.jpg",
};

hazards["lakeeffectsnow"] = {
    name: "Lake-Effect Snow",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    logo: "/images/hazards/snowstorm.jpg",
};

hazards["blizzard"] = {
    name: "Blizzard",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    logo: "/images/hazards/snowstorm.jpg",
};

hazards["heavyrain"] = {
    name: "Heavy Rain",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    logo: "/images/hazards/unknown.jpg",
};

hazards["lightning"] = {
    name: "Lightning",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    logo: "/images/hazards/unknown.jpg",
};

hazards["flashflood"] = {
    name: "Flash Flood",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    logo: "/images/hazards/flood.jpg",
};

hazards["stormsurge"] = {
    name: "Storm Surge",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    logo: "/images/hazards/stormsurge.jpg",
};

hazards["ripcurrent"] = {
    name: "Rip Current",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    logo: "/images/hazards/stormsurge.jpg",
};

hazards["coastalflood"] = {
    name: "Coastal Flood",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    logo: "/images/hazards/flood.jpg",
};

hazards["lakeshoreflood"] = {
    name: "Lakeshore Flood",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    logo: "/images/hazards/flood.jpg",
};

hazards["flood"] = {
    desc: "Believe it or not, flooding is the most common, and the deadliest type of severe weather. Flooding is a temporary overflow of water onto land that is normally dry. Failing to evacuate flooded areas or entering flood waters can lead to injury or death.",
    name: "Flooding",
    logo: "/images/hazards/flood.jpg",
};

hazards["icestorm"] = {
    desc: "The U.S. National Weather Service defines an ice storm as a storm which results in the accumulation of at least 0.25-inch (6.4 mm) of ice on exposed surfaces.",
    name: "Ice Storm",
    logo: "/images/hazards/icestorm.jpg",
};

hazards["cancer"] = {
    desc: "No. 2 killer of Americans in 2020, accounting for about 18% of overall deaths",
    name: "Cancer",
    logo: "/images/hazards/cancer.jpg",
};

hazards["heart-disease"] = {
    desc: "Heart disease remained the top killer in the U.S. in 2020, accounting for about 21% of deaths and for 31,841 more deaths than in 2019. The nearly 5% increase in heart disease deaths in 2020 was the largest such increase since 2012, researchers said.",
    name: "Heart Disease",
    logo: "/images/hazards/heartdisease.jpg",
};

hazards["economic-collapse"] = {
    desc: "Economic collapse is any of a broad range of bad economic conditions, ranging from a severe, prolonged depression with high bankruptcy rates and high unemployment (such as the Great Depression of the 1930s)",
    name: "Economic Collapse",
    logo: "/images/hazards/economiccollapse.jpg",
};

hazards["house-fire"] = {
    name: "House Fire",
    desc: "A fire can become life-threatening in just two minutes. A residence can be engulfed in flames in five minutes.",
    logo: "/images/hazards/housefire.jpg",
};

hazards["id-theft"] = {
    name: "Identity Theft",
    desc: "TODO..",
    logo: "/images/hazards/idtheft.jpg",
};

hazards["car-accident"] = {
    name: "Car Accident",
    desc: "TODO..",
    logo: "/images/hazards/caraccident.jpg",
};

hazards["power-failure"] = {
    name: "Power Failure",
    desc: "",
    logo: "/images/hazards/powerfailure.jpg",
};

hazards["cyber-attack"] = {
    name: "Cyber Attack",
    desc: "Service outages and randomware that can criple effensial operations.",
    logo: "/images/hazards/cyberattack.jpg",
};

hazards["riots"] = {
    name: "Riots",
    desc: "TODO..",
    logo: "/images/hazards/riots.jpg",
};

hazards["household"] = {
    name: "Household Emergencies",
    desc: "TODO..",
    logo: "/images/hazards/riots.jpg",
};

hazards["nuclear"] = {
    name: "Nuclear Emergencies",
    desc: "Nuclear explosions can cause significant damage and casualties from blast, heat, and radiation but you can keep your family safe by knowing what to do and being prepared if it occurs.",
    logo: "/images/hazards/riots.jpg",
};

export default hazards;
