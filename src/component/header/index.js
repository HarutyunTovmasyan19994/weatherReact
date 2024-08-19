import React,{useState} from "react";
import { useDispatch } from "react-redux";
import{WEATHER_CITY} from "../../redux/action/actionType"
import "./style.css"


const Header = ({unit,setUnit})=>{
    const[city,setCity] = useState("")
    const dispatch = useDispatch("")

    const searchHandle =()=>{
        dispatch({type:WEATHER_CITY,payload:city})
        setCity("")
    }

    const toggleUnit = () => {
        setUnit(unit === "metric" ? "imperial" : "metric");
        
      };

    
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