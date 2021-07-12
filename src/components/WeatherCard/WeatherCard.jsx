import React from 'react';

const WeatherCard = (props) => {
    return (
        <div>
            <h1>{props.weekDay}</h1>
            <img src={props.imgURL} alt="Weather"/>
            <p>{props.temp}</p>
        </div>
    );
}

export default WeatherCard;
