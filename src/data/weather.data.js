import sun from '../assets/images/sun.svg';
import rain from '../assets/images/rain.svg';
import cloudy from '../assets/images/cloudy.svg';
import thunder from '../assets/images/thunder.svg';

const weekDayForecasts = [
    {
        id: 1,
        weekDay: 'Monday',
        imgURL: sun,
        temp: '36C',
    },
    {
        id: 2,
        weekDay: 'Tuesday',
        imgURL: rain,
        temp: '32C',
    },
    {
        id: 3,
        weekDay: 'Wednesday',
        imgURL: cloudy,
        temp: '35C',
    },
    {
        id: 4,
        weekDay: 'Thursday',
        imgURL: thunder,
        temp: '45C',
    },
    {
        id: 5,
        weekDay: 'Friday',
        imgURL: sun,
        temp: '36C',
    },
    {
        id: 6,
        weekDay: 'Saturday',
        imgURL: thunder,
        temp: '37C',
    },
    {
        id: 7,
        weekDay: 'Sunday',
        imgURL: sun,
        temp: '39C',
    },
];

export default weekDayForecasts;
