import {useSelector} from 'react-redux'
import './style.css'

const DetailedState = () =>{

    const weather = useSelector(state => state.weather)

    return(
        <div className="detailed">
            <div className="stat temperature">
                <div className="title">Temperature</div>
                <div className="actual">
                    <div className="actual-title">Actaul Temp</div>
                    <div className="actual-no">25.4<sup>o</sup></div>
                    <div className="actual-unit">Celcius</div>
                </div>
                <div className="progress">
                    <div className="full">
                        <div style={{width : '70%'}} className="actual-progress">s </div>
                    </div>
                </div>

            </div>
            <div className="stat humidity">
                <div className="title">Relative Humidity</div>
                <div className="actual">
                    <div className="actual-title">Mid Saturation</div>
                    <div className="actual-no">25.4<sup>o</sup></div>
                    <div className="actual-unit">Celcius</div>
                </div>
                <div className="progress">
                    <div className="full">
                        <div style={{width : '70%'}} className="actual-progress">s </div>
                    </div>
                </div>

            </div>
            
        </div>
    )
}

export default DetailedState