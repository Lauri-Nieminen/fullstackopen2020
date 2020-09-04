import React, {useState, useEffect} from 'react';
import axios from 'axios'

const Weather = ({location}) =>  {
    const [weather, setWeather] = useState([])
    const api_key = process.env.REACT_APP_API_KEY;
    useEffect( () => {
        console.log('weather loading effect')
        const weather_url='http://api.weatherstack.com/current?access_key='+api_key+'&query='+location;
        
        console.log('weather url', weather_url)
        axios
          .get(weather_url)
          .then(response => {
            console.log('weather response', response.data)
            setWeather(response.data.current)
          })
      }, []) 
    if (weather === undefined) {
            console.log('weather not loaded yet')
        return(
            <p>Loading weather...</p>
        )
    } else {
        console.log('Render weather',weather)
        return (
            <>
                <h2>Weather in {location}</h2>
                <p>
                    <p><b>temperature:</b> {weather.temperature} celsius</p>
                    <img src={weather.weather_icons} alt="weather icon" height="10%" width="10%"/>
                    <p><b>wind:</b> {weather.wind_speed} kph direction {weather.wind_dir}</p>
                </p>
            </>
        )
    }
}

export default Weather