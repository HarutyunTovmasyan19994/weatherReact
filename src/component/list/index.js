import React,{useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import {WEATHER_LIST} from "../../redux/action/actionType"
import axios from "axios";
import "./style.css"


const ListWeather = () => {
    const {list,city} = useSelector(s=>s.weather)
    const dispatch = useDispatch()
    useEffect(()=>{
        axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=3ab6f95dea6914e7670ba0dffe4791b0&units=metric`)
        .then(resp=>dispatch({type:WEATHER_LIST,payload:resp.data}))
    },[city])
    const filterForecastByFirstObjTime = (list) => {
        if (!list) {
          return [];
        }
    
        const firstObjTime = list[0].dt_txt.split(" ")[1];
        return list.filter((data) => data.dt_txt.endsWith(firstObjTime));
      };
    
      const filteredForecast = filterForecastByFirstObjTime(list?.list);

    // console.log(weatherState.list,"list")
    return(
        <div>
          {
            filteredForecast.length > 0 ? (
            <div>
                {
                    filteredForecast.map(item=>(
                        <ul className="ul" key={item.dt}>
                        <li>
                            {item.dt_txt.slice(10)}{" "} {Math.round(item.main.temp)} &deg; {" "}C
                            <img  src={`http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`} className="img"/>
                            </li>
                        
                    </ul>
                    ))
                }
            </div>
            ):(
                <div className="error-msg">No Data Found</div>
            )
          }
        </div>
    )
}

export default ListWeather


// >(
//     <ul className="ul" key={data.dt}>
//     <li>
//         {data.dt_txt.slice(10)}{" "} {Math.round(data.main.temp)} &deg; {" "}C
//         <img  src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`} className="img"/>
//         </li>
    
// </ul>
// )