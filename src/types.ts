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

export interface IHospitalData {
    name: string;
    address: string;
    city: string;
    state: string;
    zip: number;
    data: [{
        collection_week: string;
        inpatient_beds_7_day_avg: number;
        inpatient_beds_used_7_day_avg: number;

        total_icu_beds_7_day_avg: number;
        icu_beds_used_7_day_avg: number;
    }];
}

export interface IProfile {
    locationId: string
    lonlat: [number, number]

    hazards: [IHazardProfile]
    noaa: {[key: string]: { //storm type
        [key: string]: number, //year / count
    }}

    zip: string

    counties: [{
        fips: string
        county: string //"Greene County"
        state: string //"Indiana"
        state2: string //"IN"
        city: string 
    }],

    hospitals: {
        [key: string]: IHospitalData
    }
}

export interface IDemoInfo {
    locationId: undefined|string
    age: undefined|number
    gender: undefined|"male"|"female"|"nonbinary" 
    demoLiveNearFloodzone: undefined|boolean
    driveMinutes: undefined|number
}
