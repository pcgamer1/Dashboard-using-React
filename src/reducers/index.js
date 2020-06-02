import statsReducer from './statsReducer'
import authReducer from './authReducer'
import {combineReducers} from 'redux'

export default combineReducers({
    stats: statsReducer,
    auth: authReducer
})