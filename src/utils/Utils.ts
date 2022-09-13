import { BASE_URL } from "./constants";


export  const formatDate = (dateString:string) => {
    var now         = new Date(dateString);
    var options:any = { year: 'numeric', month: 'long', day: 'numeric' };
    return now.toLocaleDateString("fr", options);
}

export const getApiData = async (url : string,callBack : any , array :boolean = false , index : number = 0) => {    
    try {
      const response = fetch(BASE_URL+url, {
        headers: {
          'content-Type': 'application/json',
          'Accept': 'application/json'
        },
        method:'GET'
      });
      const data = (await response).json();
      data.then(e => !array ? callBack(e) : callBack(e[index]));
      if (!(await response).ok) throw new Error((await response).statusText);
    } catch (error) {
      console.log("Error :"+error);
    } 
  }
export const sum = (a:number , b:number) => {
  return a + b;
}