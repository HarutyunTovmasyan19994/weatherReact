import React, { useState } from "react";
import { useSelector } from "react-redux";
import './style.css'



const FiveDaysWeather =  ({unit}) =>{
    const {list} = useSelector(s=>s.weather)
   
    const filterFiveDays = (list) => {
        if (!list) {
          return [];
        }
    
        const firstObjTime = list[0].dt_txt.split(" ")[1];
        return list.filter((data) => data.dt_txt.endsWith(firstObjTime));
      };
    
      const filteredForecast = filterFiveDays(list?.list);
    return(
        <div className="commonWeather">
        
        {filteredForecast.length > 0 ? (
                        <div className="weatherDiv">
                          {filteredForecast.map((data, index) => {
                            const date = new Date(data.dt_txt);
                            const day = date.toLocaleDateString("en-US", {
                              weekday: "short",
                            });
                            return (
                              <div className="Infoweather" key={index}>
                                <h5>{day}</h5>
                                <img
                                  src={`https://openweathermap.org/img/wn/${data.weather[0].icon}.png`}
                                  alt="icon"
                                />
                                <h5>{data.weather[0].description}</h5>
                                <h5 className="min-max-temp">
                                  {Math.round(data.main.temp)}&deg; 
                                  {"  "}
                                  {unit === "metric" ? "C" : "F"}
                                </h5>
                              </div>
                            );
                          })}
                        </div>
                      ) : (
                        <div className="error-msg">No Data Found</div>
                      )}
        </div>
    )
}


export default FiveDaysWeather

