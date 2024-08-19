import { combineReducers } from "redux";
import reducer from ".";


const rootReducer = combineReducers({
    weather:reducer
})

export default rootReducer