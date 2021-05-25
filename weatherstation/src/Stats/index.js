import React from 'react';
import './stats.css';
import Icon from './../assets/cloudy.png';

const Stats = () =>{
    return(
        <div className="stats">
            <div className="temperature">
                <h1>91 <sup>o</sup> </h1>
            </div>
            <div className="location-date">
                <div className="location">
                    <h2>Accra</h2>
                </div>
                <div className="date">
                    <p>06:00 - Monday, 26 April 2021</p>
                </div>
            </div>
            <div className="weather">
                <div className="icon">
                    <img src={Icon} alt="cloudy"/>
                </div>
                <p>Cloudy</p>
            </div>
        </div>
    )
}

export default Stats