import {  useEffect, useState } from 'react'

import './App.css'
import WeatherDetails from './components/WeatherDetails';
import UseFetch from './components/Usefetch';
import {  getCitiesFromLocalStorage, getCity } from './utils';
import { ErrorProps, Favourite } from './model';








const App=() =>{
  const [city, setCity] = useState<string>(getCity());
  // const [changecity, setChangeCity] = useState("")
   const {data,loading,error} = UseFetch(city);
   const [favCities, setFavCities] = useState <Favourite[]>(getCitiesFromLocalStorage());
     



    // const handleSearchCity=(city:string)=>{
    //   setCity(city);
    
    //       localStorage.setItem("city", city)
      
      
      
    // }

    const handleChangeCity=(e: React.ChangeEvent<HTMLInputElement>)=>{
      setTimeout(()=>{setCity(e.target.value)},1000)
        
        
        
    }
    

    useEffect(()=>{
      localStorage.setItem("favCity", JSON.stringify(favCities))
      localStorage.setItem("city", city)
      console.log(city) 
    },[favCities,city])

  return(
  <>

        <div className="   my-8 ">
            <section  className='flex justify-center'>
            <input
                  className="border p-2 text-xl border-black outline-none "
                  type="search"
                  
                  placeholder="Search City"
                  onChange={(e)=>{handleChangeCity(e)}}
                  
                />
                {/* <button
                  // onClick={() => {
                  // handleSearchCity(city)
                  // }}
                  className="mx-2 border border-black p-1"
                >
                  Search
                </button> */}
            </section>
                

                {loading && (
            <div className=" flex justify-center items-center my-10">
              <svg
                className="animate-spin  h-1/5 w-1/5 text-red-700"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
            </div>
          )}
           
          {error?<ErrorComponent error={error}/>:null}

         {data? <WeatherDetails data={data} favCities={favCities} setFavCities={setFavCities}/>:
         
         <h1 className='"  text-4xl  text-center xl my-9"'>No data found,Search again</h1>
                
          }
         
              </div>

              
                
                
             

  </>
  )
}

export default App


const ErrorComponent=({error}:ErrorProps)=>{
  return(
    <>
    <h1 className="text-center text-4xl my-9">{error.message}</h1>
    </>
    
  )
  }
