
import axios from "axios";
import { useState } from "react";
import './Weather.css'
import { WEATHER_API_KEY } from "../api";
import Search from "./Search";
import Unkmown from '../icons/unknown.png'


export default function Weather() {

    const [currentWeather, setCurrentWeather] = useState('Showers');
    const [currentDegree, setCurrentDegree] = useState(null);
    const [currentIcon, setCurrentIcon] = useState(null);

    let [lat, lon] = [48.137154, 11.576124];

    const handleSearch = (input) => {
        console.log(input)
    }

    const getWeather = async () => {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}`)
        console.log(response.data)
        setCurrentDegree(response.data.main.temp);
        setCurrentWeather(response.data.weather[0].main);
        setCurrentIcon(response.data.weather[0].icon);
    };


    const chooseIcon = () => {
      switch (currentIcon) {
        case '01d':
          return <img  alt='01d' src="https://img.icons8.com/emoji/48/000000/sun-emoji.png"/>
        case '01n':
          return <img alt='01d' src="https://img.icons8.com/emoji/48/000000/crescent-moon-emoji.png"/>
        case '02d':
          return <img alt='01d' src="https://img.icons8.com/emoji/48/000000/sun-behind-cloud-emoji.png"/>
        case '02n':
          return <img alt='01d' src="https://img.icons8.com/emoji/48/000000/crescent-moon-emoji.png"/>
        case '03d':
          return <img alt='01d' src="https://img.icons8.com/emoji/48/000000/cloud-emoji.png"/>
        case '03n':
          return <img alt='01d' src="https://img.icons8.com/emoji/48/000000/cloud-emoji.png"/>
        case '04d':
          return <img alt='01d' src="https://img.icons8.com/emoji/48/000000/cloud-emoji.png"/>
        case '04n':
          return <img alt='01d' src="https://img.icons8.com/emoji/48/000000/cloud-emoji.png"/>
        case '09d':
          return <img alt='01d' src="https://img.icons8.com/emoji/48/000000/cloud-with-rain-emoji.png"/>
        case '09n':
          return <img alt='01d' src="https://img.icons8.com/emoji/48/000000/cloud-with-rain-emoji.png"/>
        case '10d':
          return <img alt='01d' src="https://img.icons8.com/emoji/48/000000/cloud-with-rain-emoji.png"/>
        case '10n':
          return <img alt='01d' src="https://img.icons8.com/emoji/48/000000/cloud-with-rain-emoji.png"/>
        case '11d':
          return <img alt='01d' src="https://img.icons8.com/emoji/48/000000/cloud-with-lightning-emoji.png"/>
        case '11n':
          return <img alt='01d' src="https://img.icons8.com/emoji/48/000000/cloud-with-lightning-emoji.png"/>
        case '13d':
          return <img alt='01d' src="https://img.icons8.com/emoji/48/000000/snowflake-emoji.png"/>
        case '13n':
          return <img alt='01d' src="https://img.icons8.com/emoji/48/000000/snowflake-emoji.png"/>
        case '50d':
          return <img alt='01d' src="https://img.icons8.com/emoji/48/000000/foggy-emoji.png"/>
        case '50n':
          return <img alt='01d' src="https://img.icons8.com/emoji/48/000000/foggy-emoji.png"/>
        default:
          return <img alt='01d' src={Unkmown}/>

      }
    }


    return <div>
        <h1>How is the weather today in your city?</h1>
        <Search handleSearch={handleSearch}/>
        <button onClick={() => getWeather()}>Press for weather</button>
        <p className="currentDegree">It is {currentDegree} degrees</p>
        <p className='currentWeather'>{currentWeather}</p>
        <div>
          {chooseIcon()}
        </div>
        <p>Today is {
          new Date().toLocaleDateString('en-US', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          })
          }</p>
    </div>
}