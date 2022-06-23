import * as actions from '../action-types/index'

export const fetchCountriesRequest = (URL) =>{
    return{
        type: actions.FETCH_COUNTRIES_REQUEST,
        payload: URL
    }
}
export const fetchCountriesSuccess = (countries) =>{
    return{
        type: actions.FETCH_COUNTRIES_SUCCESS,
        payload: countries
    }
}
export const fetchCountriesFailure = (error) =>{
    return{
        type: actions.FETCH_COUNTRIES_FAILURE,
        payload: error
    }
}