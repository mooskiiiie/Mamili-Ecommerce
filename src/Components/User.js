import React from 'react';
import '../Components/User.css';


function User({image, name, user, bio, followers, button, button2}) {
    return (
       
        <div class='user'>
            <div className='user__photo'>
                <img src={image} />
            </div>
            <div className='user__info'>
                <h2>{name}</h2>
                <p>{user} </p>
                <p>{bio} </p>
                <p>{followers} | ⭐️⭐️⭐️⭐️⭐️</p>
                <div className='user__buttons'>
                    <button>{button}</button>
                    <button>{button2}</button>
                </div>
            </div>
            
        </div>
        
    )
}

export default User
