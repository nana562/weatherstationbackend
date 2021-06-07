import React, { useEffect, useState } from 'react';
import './stats.css';
import Icon from './../assets/cloudy.png';
import { useSelector } from 'react-redux';

const Stats = () =>{
    const date  = new Date();
    let months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    let days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

    const location = useSelector(state => state.location)
    const [data, setData] = useState([])
    const [loading, setLoading] = useState('Loading...')

    useEffect(()=>{
        fetchData();
    },[location])

    const fetchData = () =>{
        setData([])
        setLoading('Loading...')
        fetch(`https://weatherstationbackend.herokuapp.com/${location}`)
            .then(response => response.json())
            .then(data =>{
                console.log(data)
                setData(data)
            })
            .catch(error=>{
                setLoading('Location Not available. Try somewhere Else')
                console.log(error)
            })
    }
    if(data.length === 0){
        return <div className="stats">{loading}</div>
    }
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