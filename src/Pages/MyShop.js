import React from 'react';
import Carousel from '../Components/Carousel';
import Playlist from '../Components/Playlist';
import Sales from '../Components/Sales';
import User from '../Components/User';
import '../Pages/MyShop.css';
import { Spring } from 'react-spring/renderprops';

function MyShop() {
    return (
        <Spring
        from={{ opacity: 0}}
        to={{ opacity: 1 }}
        config={{ delay: 500, duration: 1000}}
    >
        { props => (
             <div style={props}> 
        <div className='myshop'>
            <div className='profile__top'>
                <div className='profile__user'>
                    <User image='/images/gusot.jpg' name='Gusòt Moderno' user='@NikkiCortez | @gusotmoderno'  followers='150 Followers' button='MY SHOP' button2='ANALYTICS' />
                </div>
                <div className='profile__buttons'>
                    <div className='buttons__one'>
                        <button>EDIT</button>
                    </div>
                </div>
            </div>
            <div className='myshop__main'>
                <div className='myshop__mainLeft'>
                    <div className='myshop__sales'>
                        <Sales />
                        <Sales />
                        <Sales />
                    </div>
                    <div className='myshop__carousel'>
                        <Carousel />
                    </div>
                </div>
                <div className='myshop__mainRight'>
                    <div className='myshop__reviews'>
                        <h3>RECENT REVIEWS</h3>
                        <div className='review__one'>
                            <img src='/images/Cedric.png' width='50px'/>
                            <p>Best group ever!</p>
                        </div>
                        <div className='review__one'>
                            <img src='/images/Gabbie.png' width='50px'/>
                            <p>Team dosan!!</p>
                        </div>
                        <div className='review__one'>
                            <img src='/images/Roni.png' width='50px'/>
                            <p>Team JiPyeong!!</p>
                        </div>
                    </div>

                    <div className='myshop__playlist'>
                        <Playlist title='RECENT PLAYLISTS' image1='/images/image1.jpg' image2='/images/image2.jpg' image3='/images/image3.jpg' image4='/images/image4.jpg' image5='/images/image5.jpg' image6='/images/image6.jpg' />
                    </div>

                </div>
            </div>
            
        </div>
        </div>
            )}
        </Spring>
    )
}

export default MyShop
