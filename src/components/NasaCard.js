import React, { useState } from 'react';
import styled from 'styled-components';



export default function NasaCard(props) {
    console.log(props)
    const [showMenu, setShowMenu] = useState(false)
    return (
        <CardContainer>
            
            <img src = {props.hdurl} alt = 'astronomy picture of the day' />

            <div className = 'overlay'>
                <h1>{props.title}</h1>
                    <div className = 'date-line'>
                        <p className = 'date'>{props.date}
                        </p>
                        <button className = 'info-btn' onClick = {() => setShowMenu(!showMenu)}>Show Info</button>
                    </div>
                <p className = {`infoShowing-${showMenu}`}>{props.explanation}</p>   
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
            width: 100%;
            position: absolute;
            color: white;
            top: 0;
            left: 1%;
            font-size: 2rem;
            @media (max-width: 500px) {
                font-size: 1.6rem;
            }
        }
        .date-line {
            
            
            .date {
                position: absolute;
                color: white;
                top: 9%;
                left: 1%;
                font-size: 1.6rem;
            }
            .info-btn {
                display: flex;
                align-items: center;
                position: absolute;
                top: 9%;
                left: 12%;
                @media (max-width: 1200px) {
                    left: 33%;
                }
                background: transparent;
                font-size: 1rem;
                color: white;
                height: .1rem;
                padding: 1rem;
                border: 2px solid white;
                border-radius: .5rem;
                cursor: pointer;
                &:hover {
                    background: rgb(254, 254, 254, .3);
                    transition: .5s;
                }
            }
        }
        
        
        .infoShowing-true {
            position: absolute;
            color: white;
            top: 16%;
            left: 1%;
            width: 63%;
            font-size: 1.6rem;
            @media (max-width: 1200px) {
                width: 66%;
                font-size: 1.2rem;
            }
            @media (max-width: 768px) {
                width: 99%;
                font-size: 1rem;
            }
        }
        .infoShowing-false {
            display: none;
        }
    }
    
`