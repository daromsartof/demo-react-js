export interface dataType {
    name : string,
    firstName: string,
    birthdays:Date,
    userOld:number,
    email:string,
    phone :string
    address:string
    degree:string
    profession:string
    city:string
    profilsPath:string
}

export interface date {
    date:string,
    timezone_type:number,
    timezone:string
}
export interface DataCursuType {
    id : Number,
    usCrsCategory:String,
    usCrsDescription:Array<String>,
    usCrsEndDate:date,
    usCrsPlace:String,
    usCrsStartDate:date,
    usCrsTitle:String
};

export interface SkilsType {
    id: number,
    uskImageUrl: string,
    uskTitle: string,
    uskCategory:string
    uskValue: number,
}

export interface SkilsCategoryType {
    id:number,
    userSkils:Array<string>,
    uskCatTitle:string
}
