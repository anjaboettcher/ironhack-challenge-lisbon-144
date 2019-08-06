import React from "react";
import { useState } from "react";


function Calculator(props) {
  //useState = inital value
  const [temperature, setTemperature] = useState("");

  let answer 
  if (temperature <= 10) {
    answer = "It's cold ❄️";
  } else if (temperature > 10 && temperature < 30) {
    answer = "It's nice 🌼";
  } else if (temperature >= 30) {
    answer = "It's warm ☀️";
  }


  function handleChange(e) {
    setTemperature(e.target.value);
  }

  return (
    <div>
      <h1>Temperature</h1>  
      
      <input type="number" value={temperature} onChange={handleChange} /><br/>
      {answer}
    </div>
  );
}

export default Calculator;
