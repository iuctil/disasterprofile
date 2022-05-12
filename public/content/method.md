# Methods

disasterProfile.org maintains a list of disasters ("hazards"). For each hazard, we compute probabilities for each profile entry by aggregating a different set of data sources. We currently generate profiles for each zip code. 

For weather-related disasters, we've downloaded NOAA storm event data for the last decade, and we count the number of years that each county has experienced the storm categories and dividing by the total number of years (in this case 10). NOAA storm events are published for each county, so we aggregate storm events from all counties that each zip code is located. 

For health-related disasters, we've downloaded CDC's top-20 common causes of death for each state/age group for both males and females. Our current data contains the statistics from 2017, and we look up the "crude death rate" at runtime for each health-related hazards. "Crude Death Rate" is a ratio of the number of deaths during the year to the average population in that year. It is considered "crude" because a county with certain age distribution might have a higher or lower death rate for age-related diseases such as cancer. 

