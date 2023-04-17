import { useContext, useEffect } from "react";



export type Data={
    name:string;
    id:number;
    main:{temp:number,temp_min:number,temp_max:number}
    weather:[{description:string, icon:string}]


}

type Props={
    data:Data
}

const WeatherDetails = ({ data}:Props) => {
   
 

  const iconUrl = (icon:string) => ` http://openweathermap.org/img/wn/${icon}@2x.png`;

 

  const { name, id, main, weather }:Data = data
  const { temp, temp_min, temp_max } = main ?? {};
  const [{ description, icon }] = weather ?? [{}];

  

 

  
  return (
    <>
     
        <section
          className="flex flex-col justify-center items-center my-4"
          
        >
         
           
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
     
    </>
  );
};

export default WeatherDetails;