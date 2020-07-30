import React, { useState, useEffect } from "react";
import axios from 'axios';
import "./App.css";
import NasaCard from './components/NasaCard';
import styled from 'styled-components';


function App() {

  const [state, setState] = useState([])
  const [date, setDate] = useState('2020-07-28')

  useEffect(() =>{
    axios
      .get(`https://api.nasa.gov/planetary/apod?date=${date}&api_key=A1P17AHxULNnREkbWMXMRvDVt7CozildTqHKF2mT`)
      .then(res => {
      console.log('response:', res.data)
      setState(res.data)
    })
    .catch(err => {
      console.log('error:', err)
    })
  }, [])

  return (
    <MainContainer>
      <div className="App">
        <NasaCard 
        title = {state.title}
        hdurl = {state.hdurl}
        date = {state.date}
        explanation = {state.explanation}
        />
        <button onClick = {() => setDate()}>Next Day</button>
      </div>
    </MainContainer>
  );
}

export default App;

const MainContainer = styled.div `
  margin: 0;
  .App {
    button {
      position: absolute;
      left: 1%;
      bottom: 3%;
    }
  }
`
