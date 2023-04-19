import { Favourite } from "./model";




export const getCity = ():string=> {
    let city = localStorage.getItem("city")||"chandigarh"

    console.log(city)
   return city




  };

  
  
  export const getCitiesFromLocalStorage = ():Favourite[]=> {
    const list:Favourite[] = JSON.parse( localStorage.getItem("favouriteCity")|| '[]')
    
        return list;
    
  };


