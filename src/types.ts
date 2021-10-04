/*
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
*/

export interface IHazardMotigationAnswers {
    v: null|string,
    vunl: number,
    desc: string,
}

export interface IHazardMitigation {
    question: string,
    answers: IHazardMotigationAnswers[],
}

export interface IHazardInfo {
    id: string,
    shortDesc: string, //to show on card
    desc: string,
    impact: string,
    name: string,
    tags: string[],
    url: string,
    logo: string,
    mitigations: IMitigation[],
}

export interface IHazardProfile {
    hazardId: string,
    prob: number,
}

export interface IProfile {
    locationId: string,
    lonlat: [number, number], 

    hazards: [IHazardProfile],
}
