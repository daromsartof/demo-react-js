export interface dataType {
    name : string,
    firstName: string,
    birthdays:String,
    userOld:number,
    email:string,
    phone :string
    address:string
    degree:string
    ciriculumVitae:string
    biographie:string
    profession:string
    city:string
    profilsPath:string
    social:{
        twitter :String
        github  :String
        gitlab  :String
        facebook:String
        linkdln :String
    }
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
    usCrsEndDate:string,
    usCrsPlace:String,
    usCrsStartDate:string,
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
export interface PortFolioType  {
    id   : number,
    usprTitle:String,
    usprDescription:String,
    usprImagePath:String
}

export type getDataType = () => void;


export interface GlobalDataType {
    SkilsCategory:Array<SkilsCategoryType>
    skils: Array<SkilsType>,
    profils: dataType,
    porfolio:Array<PortFolioType>
}