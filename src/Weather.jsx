import SearchBox from "./searchBox";
import InfoBox  from "./infoBox";
import { useState } from "react";


export default function WeatherApp(){
  const [weatherinfo,setweatherinfo]=useState({
    Location :"London",
    Condition: 'Partly cloudy',
    icon: '//cdn.weatherapi.com/weather/64x64/day/116.png',
    Temperature: '14.2℃', 
    Feel_Like: '12℃',
    Heat_Index:"13.8℃",
    Cloud :50,
    humidity :72,
    wind_dir:"WSW",
    wind_Speed:"32km/hr"
});

  let updateweather=(result)=>{
    setweatherinfo(result);
  };

    return (
        <>
          <SearchBox updateweather={updateweather}  />
          <InfoBox info={weatherinfo}/>
        </>
      )
}