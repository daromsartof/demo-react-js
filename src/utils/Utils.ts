import { BASE_URL } from "../reactAppEnv";

export  const formatDate = (dateString:string) => {
    var now         = new Date(dateString);
    var options:any = { year: 'numeric', month: 'long', day: 'numeric' };
    return now.toLocaleDateString("fr", options);
}

export const getApiData = async (url : string,call_back : any , array :boolean = false , index : number = 0) => {    
    try {
      const response = fetch(BASE_URL+url, {
        headers: {
          'content-Type': 'application/json',
          'Accept': 'application/json'
        },
        method:'GET'
      });
      const data = (await response).json();
      data.then(e => !array ? call_back(e) : call_back(e[index]));
      if (!(await response).ok) throw new Error((await response).statusText);
    } catch (error) {
      console.log("Error :"+error);
    } 
  }