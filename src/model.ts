export type Favourite ={
    name:string;
    id:number;
    temp:number;
    temp_max:number;
    temp_min:number;
  
  }


  export type Data={
    name:string;
    id:number;
    main:{temp:number,temp_min:number,temp_max:number}
    weather:[{description:string, icon:string}]


}


export type Props={
    data:Data;
    favCities:Favourite[]
    setFavCities:React.Dispatch<React.SetStateAction<Favourite[]>>
}

export type Error={
    message: string;
  
}

export type ErrorProps={
    error:Error
  }