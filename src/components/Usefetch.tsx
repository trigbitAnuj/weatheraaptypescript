import { useEffect, useState } from "react";
import { Data } from "../model";




const UseFetch = (city:string) => {
  const [data, setData] = useState<Data|null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error|null>(null);
  
  useEffect(() => {
    setLoading(true);
    setData(null);
    setError(null);
    
    


    const fetchData = async () => {
      try {
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_API_KEY}&units=metric`
          );

        if (!response.ok) {
          throw new Error("could not fetch city");
        }

        const resData = await response.json();
        setData(resData);
        setLoading(false);
      } catch (error:any) {
        console.log(error)
         setError(error)
    
        setLoading(false);
      }
    };
    fetchData();
  }, [city]);

  return { data, loading, error };
};
export default UseFetch;
