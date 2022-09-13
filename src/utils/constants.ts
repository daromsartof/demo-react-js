import { GlobalDataType } from "./TypeInterface";

export let initialData:GlobalDataType = {
    SkilsCategory:[],
    skils: [],
    profils: {
      profilsPath:"",
      firstName: "",
      biographie:"",
      ciriculumVitae:'',
      name: "",
      birthdays:"",
      phone: "",
      city: "",
      userOld:0,
      email: "",
      degree:"",
      profession:"",
      social:{
              twitter : "",
              github  : "",
              gitlab  : "",
              facebook:"",
              linkdln :""
          },
      address :""
    },
    porfolio:[]
}; 
export const BASE_URL    = "http://dev.daroms-art.local/";
export const BASE_UPLOAD = "assets/image/"