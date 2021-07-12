import React from 'react';
import './WeatherCard.css'

const WeatherCard = (props) => {
    return (
        <div className="weather-card">
            <h2 className="weather-card__week">{props.weekDay}</h2>
            <img src={props.imgURL} alt="Weather" className="weather-card__img"/>
            <p className="weather-card__temp">{props.temp}</p>
        </div>
    );
}

export default WeatherCard;
