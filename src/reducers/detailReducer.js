import * as actions from '../action-types'

const initialState = {
    loading  : false,
    countryDetail : [],
    error : ""
}

const detailReducer = ( state = initialState, action) => {
    switch(action.type){

        case actions.FETCH_COUNTRY_DETAIL_REQUEST:
            return{
                ...state,
                loading: true
            }
        case actions.FETCH_COUNTRY_DETAIL_SUCCESS:
            console.log(action,"FETCH_COUNTRY_DETAIL_SUCCESS")
            return{
                ...state,
                loading: false,
                countryDetail: action.payload,
            }
        case actions.FETCH_COUNTRY_DETAIL_FAILURE:
            return{
                ...state,
                loading: false,
                error: action.error
            }
        default: return state;
    }
}

export default detailReducer;