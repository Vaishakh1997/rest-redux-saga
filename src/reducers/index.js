import { combineReducers } from 'redux'

import homeReducer from './homeReducer'
import detailReducer from './detailReducer'

const rootReducers = combineReducers({
homeReducer,
detailReducer
})

export default rootReducers