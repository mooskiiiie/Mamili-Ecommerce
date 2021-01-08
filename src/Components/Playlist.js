import React from 'react';
import '../Components/Playlist.css';
import { Spring } from 'react-spring/renderprops';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

function Playlist({title, image1, image2, image3, image4, image5, image6}) {
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
        <Spring
        from={{ opacity: 0, marginTop: -100}}
        to={{ opacity: 1, marginTop: 0 }}
        config={{ delay: 500, duration: 1000}}
    >
        { props => (
             <div style={props}> 
             <HoverText>
        <Link className='link' to='/myplaylist'>
        <div className='playlist'>
            <h2>{title}</h2>
            <div className='playlist__images'>
                <img src={image1} alt=''/>
                <img src={image2} alt=''/>
                <img src={image3} alt=''/>
                <img src={image4} alt=''/>
                <img src={image5} alt=''/>
                <img src={image6} alt=''/>
            </div>
        </div>
        </Link>
        </HoverText>
        </div>
            )}
        </Spring>
    )
}

export default Playlist
