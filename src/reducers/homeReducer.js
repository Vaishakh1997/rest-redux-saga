import * as actions from '../action-types'

const initialState = {
    loading  : false,
    countries : [],
    error : ""
}

const homeReducer = ( state = initialState, action) => {
    switch(action.type){
        case actions.FETCH_COUNTRIES_REQUEST:
            return{
                ...state,
                loading: true
                
            }
        case actions.FETCH_COUNTRIES_SUCCESS:
            return{
                ...state,
                loading: false,
                countries: action.payload,
            }
        case actions.FETCH_COUNTRIES_FAILURE:
            return{
                ...state,
                loading: false,
                error: action.error
            }
        default: return state;
    }
}

export default homeReducer;