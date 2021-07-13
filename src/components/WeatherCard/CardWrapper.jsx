import React from 'react';
import weekDayForecasts from '../../data/weather.data';
import WeatherCard from './WeatherCard';

const CardWrapper = () => (
    <div className="card-wrapper">
        {
            weekDayForecasts.map((item) => <WeatherCard weekDay={item.weekDay} imgURL={item.imgURL} temp={item.temp} key={item.id} />)
        }
    </div>
);

export default CardWrapper;
