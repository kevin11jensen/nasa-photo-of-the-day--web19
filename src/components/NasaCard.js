import React from 'react';
import styled from 'styled-components';



export default function NasaCard(props) {
    console.log(props)
    return (
        <CardContainer>
            <img src = {props.hdurl} alt = 'astronomy picture of the day' />
            <div className = 'overlay'>
                <h1>{props.title}</h1>
                <p>{props.date}</p>
                <p className = 'explanation'>{props.explanation}</p>
            </div>
            
        </CardContainer>
    )
}

const CardContainer = styled.div `

    img {
        z-index: -1;
        object-fit: cover;
        width: 100%;
        height: 100vh;
    }
    .overlay {
        z-index: 1;
        
        h1{
            
            position: absolute;
            color: white;
            top: 0;
            left: 1%;
        }
        p {
            position: absolute;
            color: white;
            top: 9%;
            left: 1%;
        }
        .explanation {
            position: absolute;
            color: white;
            top: 16%;
            left: 1%;
            width: 50%;
            font-size: 1.2rem;
        }
    }
    
`