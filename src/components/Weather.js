
import axios from "axios";
import { useState } from "react";
import './Weather.css'
import Sunny from '../icons/01d.png'
import Showers from '../icons/10d.png'
import unknown from '../icons/unknown.png'

export default function Weather() {

    const [currentWeather, setCurrentWeather] = useState('Showers');
    const [currentDegree, setCurrentDegree] = useState(null);
    const [date, setDate] = useState(null);

    const options = {
        method: 'GET',
        url: 'https://yahoo-weather5.p.rapidapi.com/weather',
        params: {
          location: 'munich',
          format: 'json',
          u: 'c'
        },
        headers: {
          'X-RapidAPI-Key': '964105a09dmshe7ea9fa3f3063aep1b0e2ejsn200401731d98',
          'X-RapidAPI-Host': 'yahoo-weather5.p.rapidapi.com'
        }
      };

    const getWeather = async () => {
        const response = await axios.request(options);
        setCurrentDegree(response.data.current_observation.condition.temperature);
        setCurrentWeather(response.data.current_observation.condition.text)
        setDate(new Date().getUTCDate())
    };


    const chooseIcon = () => {
      switch(currentWeather) {
        case 'Showers': return <img src={Showers} alt="Showers"></img>
        case 'Sunny': return <img src={Sunny} alt="Cloudy"></img>
        default: return <img src={unknown} alt="unkown"></img>
      }
    }


    return <div>
        <h1>How is the weather today in munich?</h1>
        <button onClick={() => getWeather()}>Press for weather</button>
        <p className="currentDegree">It is {currentDegree} degrees</p>
        <p className='currentWeather'>{currentWeather}</p>
        <div>
          {chooseIcon()}
        </div>
        <p>Today is {date}</p>
    </div>
}