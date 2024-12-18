import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './SearchBox.css'
import { useState } from 'react';

export default function SearchBox({updateweather}){
    let[city,setCity]=useState("");
    // require('dotenv').config();
    // process.env.REACT_APP_KEY      "f5804411806745619d3173933241712"  
    
    const API_KEY=import.meta.env.VITE_KEY; 
    const API_URL="https://api.weatherapi.com/v1/current.json"  

    let getWeatherInfo = async () => {
        let response = await fetch(`${API_URL}?key=${API_KEY}&q=${city}`);
        let jsonResponse = await response.json();

        let result={
            Location :city,
            Condition : jsonResponse.current.condition.text,
            icon : jsonResponse.current.condition.icon,
            Temperature :jsonResponse.current.temp_c+"℃",
            Feel_Like:jsonResponse.current.feelslike_c+"℃",
            Heat_Index:jsonResponse.current.heatindex_c+"℃",
            Cloud :jsonResponse.current.cloud,
            humidity : jsonResponse.current.humidity,
            wind_dir:jsonResponse.current.wind_dir,
            wind_Speed:jsonResponse.current.wind_kph+"km/hr"
        };
        return result;
    };

    let handleChange =(evt)=>{
        setCity(evt.target.value)
    };

    let handleSubmit =async(evt)=>{
        evt.preventDefault();
        let result = await getWeatherInfo();
        updateweather(result);        
        setCity("");
    };

    return(
        <div className='Search'>
        <h2 className='h2'>Search By City Name</h2>
        <form onSubmit={handleSubmit}> 
        <TextField 
        id="city"
        label="City Name"
        variant="outlined"
        onChange={handleChange}            
        required 
        value={city}                        
        />
        <br></br> <br></br>
        <Button variant="contained" type="submit">Search </Button>

        </form>
        </div>
    );
}
