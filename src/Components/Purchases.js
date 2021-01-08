import React from 'react';
import '../Components/Purchases.css';


function Purchases({title, image}) {
    
    return (
       
                <div className='purchases'>
                    
                        <h2>{title}</h2>
                        <div className='purchases__images'>
                            <img src={image} alt=''/>
                            <img src={image} alt=''/>
                            <img src={image} alt=''/>
                            <img src={image} alt=''/>
                        </div>
                    
                </div>
           
           
    )
}

export default Purchases
