import React from 'react';

const WeatherCard = ({ weekDay, imgURL, temp }) => (
    <div className="weather-card">
        <h2 className="weather-card__week">{weekDay}</h2>
        <img src={imgURL} alt="Weather" className="weather-card__img" />
        <p className="weather-card__temp">{temp}</p>
    </div>
);

export default WeatherCard;
