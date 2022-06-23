import * as actions from '../action-types/index'

export const fetchCountryDetailRequest = (params) =>{
    return{
        type: actions.FETCH_COUNTRY_DETAIL_REQUEST,
        payload: params    
    }
}
export const fetchCountryDetailSuccess = (countryDetail) =>{
    console.log(countryDetail,"FETCH_COUNTRY_DETAIL_SUCCESS")
    return{
        type: actions.FETCH_COUNTRY_DETAIL_SUCCESS,
        payload: countryDetail
    }
}
export const fetchCountryDetailFailure = (error) =>{
    return{
        type: actions.FETCH_COUNTRY_DETAIL_FAILURE,
        payload: error
    }
}