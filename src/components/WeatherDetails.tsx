import { useContext, useEffect } from "react";
import { Favourite } from "../App";



export type Data={
    name:string;
    id:number;
    main:{temp:number,temp_min:number,temp_max:number}
    weather:[{description:string, icon:string}]


}


type Props={
    data:Data;
    favouriteCity:Favourite[]
    setfavouriteCity:React.Dispatch<React.SetStateAction<Favourite[]>>
}

const WeatherDetails = ({ data,favouriteCity,setfavouriteCity}:Props) => {
   
 

  const iconUrl = (icon:string) => ` http://openweathermap.org/img/wn/${icon}@2x.png`;

 

  const { name, id, main, weather }:Data = data
  const { temp, temp_min, temp_max } = main ?? {};
  const [{ description, icon }] = weather ?? [{}];

  
  const handleFavouriteCity=()=>{
    setfavouriteCity([...favouriteCity,{name,id,temp,temp_max,temp_min}])
       
  }

  const removefavouriteCity=(id:number)=>{
    setfavouriteCity((favouriteCity) =>
      favouriteCity.filter((city) => city.id !== id)
    );

  }
 

  
  return (
    <>
     
        <section
          className="flex flex-col justify-center items-center my-4"
          
        >
          <button
            className="border p-1 bg-red-400"
            onClick={handleFavouriteCity}
          >
            Add to favourite
          </button>
         
           
          <h1 className="city text-2xl">{name}</h1>
          <p className="temp text-3xl">{`${temp?.toFixed(1)}°`}</p>
          <img
            src={`${iconUrl(icon)}`}
            alt="icon"
            className="w-[100px] h-[100px]  "
          />
          <p className="desc">{description}</p>
          <p className="min-max-temp ">{`${temp_max?.toFixed(
            1
          )}° ${temp_min?.toFixed(1)}°`}</p>
        </section>

        <div className="flex flex-col items-center">
                <h1 className="text-3xl my-2">Favourite Cities</h1>
                <ul>
                  {favouriteCity?.length
                    ? favouriteCity.map((city) => (
                        <li
                          key={city.id}
                          className=" grid grid-cols-[200px_auto_auto_auto] place-content-center place-items-center my-3 "
                        >
                          <span>{city.name}</span>
                          <span className="temp text-3xl mx-3">{`${city.temp?.toFixed(
                            1
                          )}°`}</span>
                          <span className="min-max-temp mx-3">{`${city.temp_max?.toFixed(
                            1
                          )}° ${city.temp_min?.toFixed(1)}°`}</span>

                          <button
                            className="mx-4 border bg-red-400 text-white rounded-md"
                            onClick={() => {
                              removefavouriteCity(city.id);
                            }}
                          >
                            remove
                          </button>
                        </li>
                      ))
                    : null}
                </ul>
              </div>
     
    </>
  );
};

export default WeatherDetails;