export interface ISummary {
    location: [number, number]
}


export interface IMitigationAnswers {
    v: null|string,
    vunl: number,
    desc: string,
}

export interface IMitigation {
    question: string,
    answers: IMitigationAnswers[],
}

export interface IHazardInfo {
    id: string,
    shortDesc: string, //to show on card
    desc: string,
    //impact: string,
    name: string,
    assets: string[],
    urls: string[],
    logo: string,
    
    probMitigations: IMitigation[],
    impactMitigations: IMitigation[],
}

export interface IHazardProfile {
    hazardId: string,
    prob: number,
}

export interface IProfile {
    locationId: string
    lonlat: [number, number]

    hazards: [IHazardProfile]
    noaa: {[key: string]: { //storm type
        [key: string]: number, //year / count
    }}

    city: string
    state: string
    zip: string
}

export interface IDemoInfo {
    locationId: undefined|string
    age: undefined|number
    gender: undefined|"male"|"female"|"nonbinary" 
    demoLiveNearFloodzone: undefined|boolean
    driveMinutes: undefined|number
}
