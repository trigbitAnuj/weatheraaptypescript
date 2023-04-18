import { Favourite } from "./App";



export const getCity = ():string=> {
    let city = localStorage.getItem("city")??"chandigarh"

    return city;
  };

  
  
  export const getCitiesFromLocalStorage = ():Favourite[]=> {
    const lists:Favourite[] = JSON.parse( localStorage.getItem("favouriteCity")|| '[]')
    
        return lists;
    
  };
