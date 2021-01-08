import React from 'react';
import './Poll.css';
import styled from 'styled-components';

function Poll({title, image, option1, option2, percent1, percent2, name}) {
    const HoverText = styled.p`
    color: #000;
    transition: 0.3s;
	:hover {
		color: #AD6438;
        cursor: pointer;
        transform: scale(1.1);
	}
`


    return (
        <HoverText>
        <div className='poll'>
            <div className='poll__header'>
                <h3>{title}</h3>
            </div>
            <div className='poll__body'>
                <img src={image}/>
            </div>
            <p className='names'>{name}</p>
            <div className='poll__options'>
                <ul>
                    <li>{option1}</li>
                    <li>{option2}</li>
                </ul>
                <div className='percent'>
                    <span>{percent1}</span>
                    <span>{percent2}</span>
                </div>
            </div>
        </div>
    </HoverText>
    )
}

export default Poll 
