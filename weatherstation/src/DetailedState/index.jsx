import {useSelector} from 'react-redux'
import './style.css'

const DetailedState = (props) =>{

    const weather = useSelector(state => state.weather)
    let data = props.data

    let pressure_preogress = ( data.main.pressure -950) / (1050 - 950) * 100
    let temp_preogress = ( data.main.temp -273.15) / ( 35) * 100
   
    const icn = 'http://openweathermap.org/img/w/'

    return(
        <div className="all">
            <div className="summary">
                <div className="h">
                    <h2>Location</h2>
                    <p><b>Longitude: </b> {data.coord.lon} </p>
                    <p><b> Latitude:</b> {data.coord.lat} <br/> </p>
                    <p><b>Country: </b> {data.sys.country} </p>
                    <p><b>Location: </b> {data.name} </p>

                </div>
                <div className="h">
                    <h2>Main Forecast</h2>
                    <p><b>Humidity:</b> {data.main.humidity}</p>
                    <p><b>Pressure:</b> {data.main.pressure}</p>
                    <p><b>Sea level:</b> {data.main.sea_level}</p>
                    <p><b>Temperature:</b> {data.main.temp}</p>

                </div>

            </div>
        <div className="detailed">

            <div className="stat temperature">
                <div className="title">Temperature</div>
                <div className="actual">
                    <div className="actual-title">Feels like</div>
                    <div className="actual-no">{data.main.feels_like}</div>
                    <div className="actual-unit">Kelvin</div>
                </div>
                        <div className="measure" >
                            <p>0</p>
                            <p>5</p>
                            <p>10</p>
                            <p>15</p>
                            <p>20</p>
                            <p>25</p>
                            <p>30</p>
                            <p>35</p>
                        </div>
                <div className="progress">
                    <div className="full">
                        <div style={{width : `${temp_preogress}%`}} className="actual-progress">s </div>
                    </div>
                </div>

            </div>

            <div className="stat humidity">
                <div className="title">Relative Humidity</div>
                <div className="actual">
                    <div className="actual-title">Mid Saturation</div>
                    <div className="actual-no">{data.main.humidity}</div>
                    <div className="actual-unit">Relative Humidity</div>
                </div>
                <div className="measure" >
                            <p>0</p>
                            <p>10</p>
                            <p>20</p>
                            <p>30</p>
                            <p>40</p>
                            <p>50</p>
                            <p>60</p>
                            <p>70</p>
                            <p>80</p>
                            <p>90</p>
                            <p>100</p>
                        </div>
                <div className="progress">
                    <div className="full">
                        <div style={{width : `${data.main.humidity}%`}} className="actual-progress">s </div>
                    </div>
                </div>

            </div>
            <div className="stat dew">
                <div className="title">Gust</div>
                <div className="actual">
                    <div className="actual-title">Gust</div>
                    <div className="actual-no">{data.wind.gust}</div>
                    <div className="actual-unit">km/h</div>
                </div>
                <div className="measure" >
                <p>0</p>
                            <p>10</p>
                            <p>20</p>
                            <p>30</p>
                            <p>40</p>
                            <p>50</p>
                            <p>60+</p>
                        </div>
                <div className="progress">
                    <div className="full">
                    <div style={{width : `${data.wind.gust}%`}} className="actual-progress">s </div>
                    </div>
                </div>

            </div>
            <div className="stat wind-speed">
                <div className="title">Average Wind Speed</div>
                <div className="actual">
                    <div className="actual-title"></div>
                    <div className="actual-no">{data.wind.speed}</div>
                    <div className="actual-unit">km/h</div>
                </div>
                <div className="measure" >
                            <p>0</p>
                            <p>10</p>
                            <p>20</p>
                            <p>30</p>
                            <p>40</p>
                            <p>50</p>
                            <p>60+</p>
                        </div>
                <div className="progress">
                    <div className="full">
                        <div style={{width : `${data.wind.speed}%`}} className="actual-progress">s </div>
                    </div>
                </div>

            </div>
            <div className="stat wind-dir">
                <div className="title">Wind Direction</div>
                <div className="actual wind">
                    <div className="up-down">
                        <div className="up">N</div>
                        <div className="down">S</div>
                    </div>
                    <div className="left-right">
                        <div className="left">W</div>
                        <div className="right">E</div>
                    </div>
                    <div className="actual-no" style={{ position: 'relative' }} >{data.wind.deg}<span style={{fontSize: 10}} >deg</span> </div>
                    <div className="actual-unit" style={{ position: 'absolute', width: '110%', height: '110%', transform: `rotate(${data.wind.deg}deg)`}} > <p></p> V</div>
                </div>

            </div>
            <div className="stat wind-speed">
                <div className="title">Wind Speed</div>
                <div className="actual">
                    <div className="actual-title"></div>
                    <div className="actual-no">{(data.wind.speed * 0.277778).toFixed(2)}</div>
                    <div className="actual-unit">m/s</div>
                </div>
                <div className="measure" >
                            <p>0</p>
                            <p>10</p>
                            <p>20</p>
                            <p>30</p>
                            <p>40</p>
                            <p>50</p>
                            <p>60+</p>
                        </div>
                <div className="progress">
                    <div className="full">
                        <div style={{width : `${data.wind.speed}%`}} className="actual-progress">s </div>
                    </div>
                </div>

            </div>
            
            <div className="stat temperature">
                <div className="title">Acutal Temperature</div>
                <div className="actual">
                    <div className="actual-title">Feels like</div>
                    <div className="actual-no">{(data.main.feels_like - 273.15).toFixed(2)}</div>
                    <div className="actual-unit">Celcuis</div>
                </div>
                        <div className="measure" >
                            <p>0</p>
                            <p>5</p>
                            <p>10</p>
                            <p>15</p>
                            <p>20</p>
                            <p>25</p>
                            <p>30</p>
                            <p>35</p>
                        </div>
                <div className="progress">
                    <div className="full">
                        <div style={{width : `${temp_preogress}%`}} className="actual-progress">s </div>
                    </div>
                </div>

            </div>
            <div className="stat wind-speed">
                <div className="title">Barometric Pressure</div>
                <div className="actual">
                    <div className="actual-title">Actual Pressure</div>
                    <div className="actual-no">{data.main.pressure}</div>
                    <div className="actual-unit">hPa</div>
                </div>
                <div className="measure" >
                            <p>950</p>
                            <p>1050</p>
                        </div>
                <div className="progress">
                    <div className="full">
                        <div style={{width : `${pressure_preogress}%` }} className="actual-progress">s </div>
                    </div>
                </div>

            </div>
            <div className="stat humidity">
                <div className="title">Forecast</div>
                <div className="actual">
                    <div className="actual-title">{data.weather[0].description}</div>
                
                <img src={`${icn}${data.weather[0].icon}.png`} alt="cloudy"/>
                </div>
            </div>
        </div>
            
        </div>
    )
}

export default DetailedState