export const fetch_data = (payload) => {
    return{
        type:       'FETCH_DATA',
        payload:    payload
    }
}
export const search_location = (payload) => {
    return{
        type:       'SEARCH_LOCATION',
        payload:    payload
    }
}
export const update_weather = (payload) => {
    return{
        type:       'UPDATE_WEATHER',
        payload:    payload
    }
}
