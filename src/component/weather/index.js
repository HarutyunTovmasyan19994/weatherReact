import React,{useEffect,useState} from "react";
import { useSelector, useDispatch } from "react-redux";
import {WEATHER_INFO} from "../../redux/action/actionType"
import ListWeather from "../list";
import FiveDaysWeather from "../fiveDaysWeahter";
import axios from "axios";
import "./style.css"



const WeatherApp = ({unit})=>{
    const {data,city,metricImperial} = useSelector(s=>s.weather)
    const dispatch = useDispatch()
    useEffect(()=>{
        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=3ab6f95dea6914e7670ba0dffe4791b0&units=${unit}`)
        .then(resp=>dispatch({type:WEATHER_INFO,payload:resp}))
        .catch(e=>{
            alert("555")
        })
    },[city,unit])

    return(
        <div className="coomonApp">  
            <div className="weather">
                <div className="weatherInfo">
                    {
                            data.map(item=>(
                                <div key={item.data.id}>
                                <p className="nameCountry"> {item.data.name}</p>
                                <p className="cecius">{Math.round(item.data.main.temp)}{" "}  &deg; {unit === "metric" ? "C" : "F"} </p>
                               
                                {
                                item.data.weather.map(it=>(
                                    <div key={it.id}>
                                         <img  src={`http://openweathermap.org/img/wn/${it.icon}@2x.png`} className="img2"/>
                                        <p className="clouds">{it.main}</p>
                                    </div>
                                ))}
                            
                            </div>
                            ))
                    }
                               
                </div>
                <div className="weatherList">
                    <ListWeather unit={unit}/>
                </div>
            </div>
            <FiveDaysWeather unit={unit}/>
        </div>
    )
}
export default WeatherApp

