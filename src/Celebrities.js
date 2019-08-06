import React, { useState, useEffect } from "react";
import axios from "axios";
import { Table } from "reactstrap";


function Celebrities() {
  const [celebrities, setCelebrities] = useState([]);
  useEffect(() => {
    
    axios
      .get(
        "https://api.themoviedb.org/3/person/popular?page=1&api_key=14554504c9b5654e1105067797153dcd"
      )
      .then(response => {
        console.log("DEBUG response.data", response.data);
        setCelebrities(response.data); // Change the state and re-render the component
      });
      return () => {
        console.log("Cleanup");
      };
    }, []);


    console.log("CELEBRITIES", celebrities)


  return (
    <div>
      <h1>Celebrities</h1>  

      <Table>
        <thead>
          <tr>
            <th>Photo</th>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {celebrities.results && celebrities.results.map((celebrity, i) => (
            <tr key={i}>
              <td>
              <img src= {`https://image.tmdb.org/t/p/w185/${celebrity.profile_path}`} alt="celebrity_img" width="80px" height="120px"  />
              </td>
              <td>
                {celebrity.name}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
    
  );
          
}


export default Celebrities;
