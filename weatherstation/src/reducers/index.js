const initialState = {
    location: 'Kumasi'
}

const reducer = (state = initialState, action) =>{
    switch(action.type){
        case 'SEARCH_LOCATION':
            const temp_state = {...state}
            temp_state.location = action.payload.location
            return {...temp_state}
        default: return {...state}
    }
}

export default reducer