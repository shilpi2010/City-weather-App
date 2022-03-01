import React, { useEffect, useState } from 'react';
import "./style.css"

const Tempapp = () => {

    const [city, setCity] = useState(null);
    const [search, setSearch] =useState("Espoo");

    useEffect( () => {
        console.log("indiside")
        const fetchApi = async() => {
            const url =`http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=0db9b8b8a074f8531a28a4f1962bb721`
           const response = await fetch (url)
           const resJson = response.json ();
          setCity(resJson.main);
        };
        fetchApi();
    },[search])

return(
    <>
      <div className="box">
        <div className="inputData">
            <input 
            type="search"
            value={search}
            className="inputField"
            onChange={ (event) => {setSearch (event.target.value)}} />
        </div>

    {!city ? (
        <p className='errorMsg'>No Data Found</p>
    ) : (
        <div>
    <div className='info'>
    <h2 className='location'><i className ="fa-solid fa-street-view"></i>{search}</h2>
    <h1 className='temp'>
     {city.temp}°Cel
     </h1>
    <h3 className='tempmin_max'>Min : {city.temp_min}°Cel | Max: {city.temp_min}°Cel </h3>
  </div>
   <div className='wave -one'></div>
   <div className='wave -two'></div>
   <div className='wave -three'></div>
     </div>  
    )}
    </div>
    </>
)
 }
 export default Tempapp;
 