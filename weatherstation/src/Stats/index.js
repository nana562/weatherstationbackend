import React  from 'react';
import './stats.css';
import Icon from './../assets/cloudy.png';

const Stats = (props) =>{
    const date  = new Date();
    let months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    let days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

    const data = props.data

    return(
        <div className="stats">
            <div className="temperature">
                <h1>{Math.ceil(data.main.temp - 273.15)} <sup>o</sup> </h1>
            </div>
            <div className="location-date">
                <div className="location">
                    <h2>{data.name}</h2>
                </div>
                <div className="date">
                    <p>{date.getHours()}:{date.getMinutes()} - {days[date.getDay()]}, {date.getDate()} {months[date.getMonth()]} {date.getFullYear()}</p>
                </div>
            </div>
            <div className="weather">
                <div className="icon">
                    <img src={Icon} alt="cloudy"/>
                </div>
                <p>{data.weather[0].description}</p>
            </div>
        </div>
    )
}



export default Stats