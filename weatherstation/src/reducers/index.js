const initialState = {
    location: 'Kumasi',
    weather: {}
}

const reducer = (state = initialState, action) =>{
    switch(action.type){
        case 'SEARCH_LOCATION':
            let temp_state = {...state}
            temp_state.location = action.payload.location
            return {...temp_state}
        case 'UPDATE_WEATHER':
            let w_temp_state = {...state}
            w_temp_state.weather = action.payload.weather
            return {...w_temp_state}
        default: return {...state}
    }
}

export default reducer