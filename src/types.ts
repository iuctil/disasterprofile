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
    //id: string,
    //shortDesc: string, //to show on card
    desc: string,
    name: string,
    //assets: string[],
    //urls: string[],
    logo: string,
    //readmeURL: string,

    //probMitigations: IMitigation[],
    //impactMitigations: IMitigation[],
}

export interface IHazardProfile {
    hazardId: string,
    prob: number,
    source: string,

    //source: CDC-COD
    deaths?: number,
    totalDeaths?: number,
    sourceYear: number,

    //source: NOAA-STORM-EVENTS
    experiencedYears?: number,
    totalYears?: number,

    detailLoaded: boolean,
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
