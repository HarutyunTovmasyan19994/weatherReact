import React,{useState} from "react";
import Header from "./component/header";
import WeatherApp from "./component/weather";


function App() {
  const [unit, setUnit] = useState("metric");

  return (
    <>
     <Header unit={unit} setUnit={setUnit}/> 
     <WeatherApp unit={unit}/>
    </>
  );
}

export default App;
