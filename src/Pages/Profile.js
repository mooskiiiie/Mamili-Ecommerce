import React from 'react';
import Playlist from '../Components/Playlist';
import Purchases from '../Components/Purchases';
import User from '../Components/User';
import './Profile.css';
import { Spring } from 'react-spring/renderprops';
import { Link } from 'react-router-dom';


function Profile() {
    

    return (
        <Spring
        from={{ opacity: 0}}
        to={{ opacity: 1 }}
        config={{ delay: 300, duration: 700}}
    >
        { props => (
             <div style={props}> 
        <div className='profile'>
            <div className='profile__top'>
                <div className='profile__user'>
                    <User image='/images/user.jpg' name='Nikki Cortez' user='@NikkiCortez' bio='Just do it!' followers='150 Followers' />
                </div>
                <div className='profile__buttons'>
                    <div className='buttons__one'>
                        <button>EDIT</button>
                        <button>SETTING</button>
                    </div>
                    <Link to='./myshop'>
                    <div className='buttons__two'>
                        <button>MY SHOP</button>
                    </div>
                    </Link>
                </div>
            </div>
            
                    <div className='profile__bottom'>
                
                        <div className='profile__bottomLeft'>
                            <Purchases title='PURCHASES' image='/images/image1.jpg'/>
                            <Purchases title='RECENT VIEWS' image='/images/image1.jpg'/>
                        </div>
              
                        <div className='profile__bottomRight'>
                            <Playlist 
                            title='PLAYLIST >'
                            image1='/images/image3.jpg'
                            image2='/images/image3.jpg'
                            image3='/images/image3.jpg'
                            image4='/images/image3.jpg'
                            image5='/images/image3.jpg'
                            image6='/images/image3.jpg'
                            />
                        </div>
                    </div>
          
        </div>
        </div>
            )}
        </Spring>
    )
}

export default Profile
