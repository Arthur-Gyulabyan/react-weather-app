import React from 'react';
import {weatherInfo} from '../../App';
import WeatherCard from './WeatherCard';

const CardWrapper = () => {
    return (
        <div>
            {
                weatherInfo.map(item => <WeatherCard weekDay={item.weekDay} imgURL={item.imgURL} temp={item.temp} key={item.id}/>)
            }
        </div>
    )
}

export default CardWrapper;
