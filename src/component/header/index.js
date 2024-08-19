import React,{useState,useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import{WEATHER_CITY,WEATHER_CESIUS_FATHR} from "../../redux/action/actionType"
import "./style.css"


const Header = ()=>{
    const[city,setCity] = useState("")
    const [unit, setUnit] = useState("metric");
    const weatherState = useSelector(s=> s.weather)
    const dispatch = useDispatch("")

    const searchHandle =()=>{
        dispatch({type:WEATHER_CITY,payload:city})
        setCity("")
    }

    const toggleUnit = () => {
        setUnit(unit === "metric" ? "imperial" : "metric");
        
      };

      useEffect(()=>{
        dispatch({type:WEATHER_CESIUS_FATHR,payload:unit})
      },[])

    console.log(unit,"555");
    
    return(
        <div className="headerCommon">
            <div className="navDiv"></div>   
            <div className="navDiv">
                <input type="text" placeholder="City Name ..." value={city} name="city" className="searchCity" onChange={e=>setCity(e.target.value)} />
                <button className="searchCityBtn" onClick={searchHandle}> Search City</button>    
            </div> 
            <div className="switch" onClick={toggleUnit}>
              <div
                className={`switch-toggle ${unit === "metric" ? "c" : "f"}`}
              ></div>
              <span className="c">C</span>
              <span className="f">F</span>
            </div>     
        </div>
    )
}

export default Header