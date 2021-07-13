import React from 'react';
import { weatherInfo } from '../../data/weather.data';
import WeatherCard from './WeatherCard';
import '../../assets/styles/CardWrapper.css'

const CardWrapper = () => {
    return (
        <div className="card-wrapper">
            {
                weatherInfo.map(item => <WeatherCard weekDay={item.weekDay} imgURL={item.imgURL} temp={item.temp} key={item.id}/>)
            }
        </div>
    )
}

export default CardWrapper;
