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
    desc: "A dust storm, also called a sandstorm, is a meteorological phenomenon common in arid and semi-arid regions.",
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
    logo: "/images/hazards/wildfire.jpg",
};

hazards["hailstorm"] = {
    desc: "Hail damage is a significant risk to property across the US. Every year, thousands of Americans experience damage to their cars, roofs, windows, and gutters as a result of hail storms.",
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
    desc: "A tropical depression is a tropical cyclone that has maximum sustained surface winds (one-minute average) of 38 mph (33 knots) or less.",
    logo: "/images/hazards/hurricane.jpg",
};

hazards["tropicalstorm"] = {
    name: "Tropical Storm",
    desc: "A tropical storm is a tropical cyclone that has maximum sustained surface winds ranging from 39-73 mph (34 to 63 knots).",
    logo: "/images/hazards/hurricane.jpg",
};

hazards["sandstorm"] = {
    desc: "A sandstorm refers to a high amount of wind occurring in sandy areas, usually in deserts, where the wind speed is able to lift the top layer of sand from the ground, and push it in every imaginable direction.",
    name: "Sandstorm",
    logo: "/images/hazards/sandstorm.jpg",
};

hazards["sinkhole"] = {
    desc: "A sinkhole is a depression in the ground that has no natural external surface drainage. Basically, this means that when it rains, all of the water stays inside the sinkhole and typically drains into the subsurface. [USGS]",
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
    desc: "A funnel cloud is a funnel-shaped cloud of condensed water droplets, associated with a rotating column of wind and extending from the base of a cloud (usually a cumulonimbus or towering cumulus cloud) but not reaching the ground or a water surface. [wikipedia]",
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

hazards["ashfall"] = {
    name: "Volcanic Ashfall",
    desc: "Ashfall is the most widespread and frequent volcanic hazard. Ashfall rarely endangers human lives, but it can have devastating effects on the things that we rely upon from day to day. [USGS]",
    logo: "/images/hazards/volcano.jpg",
};

hazards["highwind"] = {
    name: "High Wind",
    desc: "'High wind' with sustained speeds of 40 to 57 mph.",
    logo: "/images/hazards/windstorm.jpg",
};

hazards["frostfreeze"] = {
    name: "Frost/Freeze",
    desc: "A frost event is the formation of thin ice crystals on the ground. Killing frost refers to a severe frost that will end the growing season, and would be associated with below freezing temperatures. Freeze refers to a situation where the temperature will fall to freezing or below. [weather.gov]",
    logo: "/images/hazards/icestorm.jpg",
};

hazards["extremecold"] = {
    name: "Extreme Cold/Wind Chill",
    desc: "Wind chill is a great predictor of such dangers as frostbite and hypothermia. Being exposed to below zero wind chills can induce frostbite within five minutes. While wind chills below minus 20 degrees can result in frostbite within a minute of exposure. [actionnews5.com]",
    logo: "/images/hazards/icestorm.jpg",
};

hazards["heat"] = {
    name: "Heat",
    desc: "There is hot, and then there is hot! Extreme heat is a period of high heat and humidity with temperatures above 90 degrees for at least two to three days. In extreme heat your body works extra hard to maintain a normal temperature, which can lead to death. Extreme heat is responsible for the highest number of annual deaths among all weather-related hazards.",
    logo: "/images/hazards/heat.jpg",
};

hazards["dustdevil"] = {
    name: "Dust Devil",
    desc: "A dust devil is a strong, well-formed, and relatively short-lived whirlwind, ranging from small (half a metre wide and a few metres tall) to large (more than 10 m wide and more than 1 km tall). [wikipedia]",
    logo: "/images/hazards/unknown.jpg",
};

hazards["duststorm"] = {
    name: "Dust Storm",
    desc: "A dust storm, also called a sandstorm, is a meteorological phenomenon common in arid and semi-arid regions. Dust storms arise when a gust front or other strong wind blows loose sand and dirt from a dry surface. Fine particles are transported by saltation and suspension, a process that moves soil from one place and deposits it in another. [wikipedia]",
    logo: "/images/hazards/unknown.jpg",
};

hazards["avalanche"] = {
    name: "Avalanche",
    desc: "An avalanche (also called a snow slide) is a rapid flow of snow down a slope, such as a hill or mountain. [wikipedia]",
    logo: "/images/hazards/unknown.jpg",
};

hazards["sleet"] = {
    name: "Sleet",
    desc: "Sleet is simply frozen raindrops and occurs when the layer of freezing air along the surface is thicker. This causes the raindrops to freeze before reaching the ground. [weather.gov]",
    logo: "/images/hazards/unknown.jpg",
};

hazards["landslide"] = {
    name: "Landslide",
    desc: "Landslides occur in all U.S. states and territories and can be caused by many factors including earthquakes, storms, volcanic eruptions, fire and human modification of land. The most deadly landslides are the ones that occur quickly, often with little notice.",
    logo: "/images/hazards/unknown.jpg",
};

hazards["densefog"] = {
    name: "Dense Fog",
    desc: "Fog or smoke are considered dense when the visibility is lowered to a quarter of a mile or less. The combination of smoke and fog is a very dangerous situation that can lower visiblity to zero. If dense fog is predicted or observed over a large enough area, the National Weather Service wil issue a Dense Fog Advisory. [weather.gov]",
    logo: "/images/hazards/unknown.jpg",
};

hazards["highsurf"] = {
    name: "High Surf",
    desc: "High surf is when large waves break on or near the shore, as a result of a storm offshore or persistent winds blowing onshore. [wacotrib.com]",
    logo: "/images/hazards/unknown.jpg",
};

hazards["debrisflow"] = {
    name: "Debris Flow",
    desc: "Debris flows are fast-moving landslides that are particularly dangerous to life and property because they move quickly, destroy objects in their paths, and often strike without warning. [USGS]",
    logo: "/images/hazards/unknown.jpg",
};

hazards["freezingfog"] = {
    name: "Freezing Fog",
    desc: "When fog forms in temperatures that are below freezing, the tiny water droplets in the air remain as liquid. They become supercooled water droplets remaining liquid even though they are below freezing temperature. This occurs because liquid needs a surface to freeze upon. [metoffice.gov.uk]",
    logo: "/images/hazards/unknown.jpg",
};

hazards["heavysnow"] = {
    name: "Heavy Storm",
    desc: "A heavy fall of rain, snow, or hail, or a violent outbreak of thunder and lightning, unaccompanied by strong winds. Also called violent storm . Meteorology. a wind of 64–72 miles per hour (29–32 meters per second). [dictionary.com]",
    logo: "/images/hazards/snowstorm.jpg",
};

hazards["lakeeffectsnow"] = {
    name: "Lake-Effect Snow",
    desc: "Lake Effect snow occurs when cold air, often originating from Canada, moves across the open waters of the Great Lakes.",
    logo: "/images/hazards/snowstorm.jpg",
};

hazards["blizzard"] = {
    name: "Blizzard",
    desc: "A storm with large amounts of snow or blowing snow, winds greater than 35 mph (56 kph), and visibility of less than 1/4 mile (0.4 km) for at least three hours. Some blizzards, called ground blizzards, have no falling snow. [National Weather Service]",
    logo: "/images/hazards/snowstorm.jpg",
};

hazards["winterstorm"] = {
    name: "Winter Storm",
    desc: "A winter storm is an event in which wind coincides with varieties of precipitation that only occur at freezing temperatures, such as snow, mixed snow and rain, or freezing rain. [wikipedia]",
    logo: "/images/hazards/snowstorm.jpg",
};

hazards["snowstorm"] = {
    name: "Snow Storm",
    desc: "Winter storms create a higher risk of car accidents, hypothermia, frostbite, carbon monoxide poisoning, and heart attacks from overexertion. Winter storms including blizzards can bring extreme cold, freezing rain, snow, ice and high winds.",
    logo: "/images/hazards/snowstorm.jpg",
};

hazards["winterweather"] = {
    name: "Winter Weather",
    desc: "Winter storms create a higher risk of car accidents, hypothermia, frostbite, carbon monoxide poisoning, and heart attacks from overexertion. Winter storms including blizzards can bring extreme cold, freezing rain, snow, ice and high winds.",
    logo: "/images/hazards/snowstorm.jpg",
};

hazards["heavyrain"] = {
    name: "Heavy Rain",
    desc: "Heavy Rain - when the precipitation rate is > 7.6 mm (0.30 in) per hour, or between 10 mm (0.39 in) and 50 mm (2.0 in) per hour.",
    logo: "/images/hazards/heavyrain.jpg",
};

hazards["lightning"] = {
    name: "Lightning",
    desc: "According to National Geographic, annually about 2,000 people are killed worldwide by lightning. [wikipedia]",
    logo: "/images/hazards/lightning.jpg",
};

hazards["flashflood"] = {
    name: "Flash Flood",
    desc: "A flash flood is a rapid flooding of low-lying areas. It may be caused by heavy rain associated with a severe thunderstorm, hurricane, tropical storm, or meltwater from ice or snow flowing over ice sheets or snowfields. ",
    logo: "/images/hazards/flood.jpg",
};

hazards["stormsurge"] = {
    name: "Storm Surge",
    desc: "A storm surge is a coastal flood of rising water commonly associated with low pressure weather systems (such as tropical cyclones and strong extratropical cyclones), which is the main cause of coastal disaster.",
    logo: "/images/hazards/stormsurge.jpg",
};

hazards["ripcurrent"] = {
    name: "Rip Current",
    desc: "Rip currents are powerful, channeled currents of water flowing away from shore. They typically extend from the shoreline, through the surf zone, and past the line of breaking waves. Rip currents can occur at any beach with breaking waves.",
    logo: "/images/hazards/stormsurge.jpg",
};

hazards["coastalflood"] = {
    name: "Coastal Flood",
    desc: "Coastal flooding normally occurs when dry and low-lying land is submerged by seawater.",
    logo: "/images/hazards/flood.jpg",
};

hazards["lakeshoreflood"] = {
    name: "Lakeshore Flood",
    desc: "The inundation of land areas along any of the Great Lakes over and above normal lake levels. This flooding may impact the immediate lakefront, bays, and interfaces between the Great Lakes and connecting waterways, such as rivers.",
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

hazards["sneakerwave"] = {
    name: "sneakerwave",
    desc: "A sneaker wave, also known as a sleeper wave, or in Australia as a king wave, is a disproportionately large coastal wave that can sometimes appear in a wave train without warning. [wikipedia]",
    logo: "/images/hazards/unknown.jpg",
};

hazards["smoke"] = {
    desc: "TODO..",
    name: "smoke",
    logo: "/images/hazards/unknown.jpg",
};



//CDC
hazards["heart-disease"] = {
    desc: "Heart disease remained the top killer in the U.S. in 2020, accounting for about 21% of deaths and for 31,841 more deaths than in 2019. The nearly 5% increase in heart disease deaths in 2020 was the largest such increase since 2012, researchers said.",
    name: "Heart Disease",
    logo: "/images/hazards/heartdisease.jpg",
};

hazards["cancer"] = {
    desc: "#2 killer of Americans in 2020, accounting for about 18% of overall deaths",
    name: "Cancer",
    logo: "/images/hazards/cancer.jpg",
};

hazards["injuries"] = {
    name: "Unintentional Injuries",
    desc: "Unintentional injuries is the 3rd most leading cause of death in the US.",
    logo: "/images/hazards/injury.jpg",
};
hazards["clrd"] = {
    desc: "Chronic lower respiratory diseases (CLRD) are the 4th leading cause of death in the US. It includes several chronic conditions of the respiratory tract such as chronic bronchitis, bronchiectasis, chronic obstructive pulmonary disease (COPD), emphysema and asthma.",
    name: "CLRD",
    logo: "/images/hazards/clrd.jpg",
};

hazards["stroke"] = {
    desc: "Stroke is the 5th leading cause of death in the US.",
    name: "Stroke",
    logo: "/images/hazards/stroke.jpg",
};

hazards["alzheimer"] = {
    desc: "alzheimer's disease is the 6th leading cause of death in the US.",
    name: "Alzheimer's Disease",
    logo: "/images/hazards/alzheimer.jpg",
};

hazards["diabetes"] = {
    desc: "diabetes is the 7th leading cause of death in the US.",
    name: "diabetes",
    logo: "/images/hazards/diabetes.jpg",
};

hazards["influenza"] = {
    desc: "influenza is the 8th leading cause of death in the US.",
    name: "influenza",
    logo: "/images/hazards/influenza.jpg",
};

hazards["kidney-disease"] = {
    desc: "kidney-disease is the 9th leading cause of death in the US.",
    name: "kidney-disease",
    logo: "/images/hazards/kidney.jpg",
};

hazards["suicide"] = {
    desc: "Suicide is the 10th leading cause of death in the US.",
    name: "Suicide",
    logo: "/images/hazards/suicide.jpg",
};


export default hazards;
