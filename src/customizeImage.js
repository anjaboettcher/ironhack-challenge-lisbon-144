import React from "react";
import { useState } from "react";


function Customizer(props) {
  const [size, setSize] = useState("");
  const [url, setUrl]  = useState("");


  function handleChange(e) {
    setSize(e.target.value);
  }

  function handleUrl(e) {
    setUrl(e.target.value);
  }

  return (
    <div>
      <h1>Customize Image</h1>
      <form >
        <input type="text" value={url} onChange={handleUrl}  />
        <br/>
        <div>
        <label>
          <input 
            id="typeinp" 
            type="range" 
            min="0" max="200"
            value={size}
            onChange={handleChange}
            step="1"/>
            <br/>
            <span>{size} x {size} px</span>
        </label>
      </div>
      <br/>
        <img src= {url} alt="" width={size} height={size}  />
    </form>
    </div>
  );
}

export default Customizer;