export interface ISummary {
    location: [number, number]
}

export interface IDemoInfo {
    locationID: null|string
    age: null|number
    gender: null|"male"|"female"|"nonbinary" 
    demoLiveNearFloodzone: null|boolean
    driveMinutes: null|number
}