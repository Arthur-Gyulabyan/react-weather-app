import React from 'react';
import { weatherInfo } from '../../App';
import WeatherCard from './WeatherCard';
import './CardWrapper.css'

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
