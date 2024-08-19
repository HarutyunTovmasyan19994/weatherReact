import {WEATHER_INFO,WEATHER_CITY,WEATHER_LIST,WEATHER_CESIUS_FATHR} from "../action/actionType"


const initialState = {
    data:[],
    list:{},
    city:"Yerevan",
}

const reducer = (state = initialState, action)=>{
    switch(action.type){
        case WEATHER_INFO:
            return {...state,data:[action.payload]}
        case WEATHER_CITY:
            return {...state,city:action.payload}
        case WEATHER_LIST:
            return {...state,list:action.payload}
        default:
            return state
    }
}

export default reducer