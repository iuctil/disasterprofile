export interface ISummary {
    location: [number, number]
}

export interface IDemoInfo {
    locationId: null|string
    age: null|number
    gender: null|"male"|"female"|"nonbinary" 
    demoLiveNearFloodzone: null|boolean
    driveMinutes: null|number
}

export interface IHazardInfo {
    id: string,
    desc: string,
    impact: string,
    name: string,
    tags: string[],
    url: string,
}

export interface IHazardProb {
    hazardId: string,
    prob: number,
}

export interface IProfile {
    locationId: string,
    lonlat: [number, number], 

    hazards: [IHazardProb],
}