import React, { useState, useEffect } from "react";
import axios from 'axios';
import "./App.css";

function App() {

  const [state, setState] = useState([])

  useEffect(() =>{
    axios.get('https://api.nasa.gov/planetary/apod?date=2020-07-28&api_key=A1P17AHxULNnREkbWMXMRvDVt7CozildTqHKF2mT')
    .then(res => {
      console.log('response:', res.data)
      setState(res.data)
    })
    .catch(err => {
      console.log('error:', err)
    })
  }, [])

  return (
    <div className="App">
      <p>
        hello From App
      </p>
    </div>
  );
}

export default App;
