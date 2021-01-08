import React from 'react';
import './Landing.css';
import Shop from './Shop.js';
import SearchIcon from '@material-ui/icons/Search';
import Product from './Components/Product';
import { Spring } from 'react-spring/renderprops';

function Landing() {
    return (
        <Spring
            from={{ opacity: 0, marginTop: -100}}
            to={{ opacity: 1, marginTop: 0 }}
            config={{ delay: 500, duration: 1000}}
        >
            { props => (
                 <div style={props}>
                     <div className='landing'>
                        <div className='landing__left'>
                            <div className='landing__header'>
                                <h2>FOLLOWING</h2>
                                <SearchIcon className="header__searchIcon" />
                            </div>
                            <div className='landing__leftOne'>
                                <Shop title='Giant' info='Food' image='https://logos-download.com/wp-content/uploads/2018/04/Giant_Food_Stores_logo_red.png' />
                            </div>
                            <div className='landing__leftOne'>
                                <Shop title='Graces Goods' info='Food' image='/images/shop1.jpg'/>
                            </div>
                            <div className='landing__leftOne'>
                                <Shop title='Safeway Diner' info='Food' image="https://mediaassets.thedenverchannel.com/photo/2015/10/20/safeway_logo_1445376808187_25474447_ver1.0_640_480.jpg" />
                            </div>
                            <div className='landing__leftOne'>
                                <Shop title='The 1979' info='Food' image='https://th.bing.com/th/id/OIP.5UYnaaQnGZ9vW61hER2VVwHaHc?pid=Api&rs=1'/>
                            </div>
                        </div>
                        <div className='landing__right'>
                            <div className='discovery'>
                                <div className='discovery__first'>
                                    <h2>DISCOVERY</h2>
                                    <SearchIcon className="header__searchIcon" />
                                </div>
                                <div className='discovery__second'>
                                    <Product image='/images/image9.jpg' />
                                    <Product image='/images/image5.jpg' />
                                    <Product image='/images/image4.jpg' />
                                </div>
                                <div className='discovery__third'>
                                    <Product image='/images/image1.jpg' />
                                    <Product image='/images/image2.jpg' />
                                    <Product image='/images/image3.jpg' />
                                </div>
                            </div>
                            <div className='recommendations'>
                                <div className='recommendations__first'>
                                    <h2>RECOMMENDATIONS</h2>
                                    <SearchIcon className="header__searchIcon" />
                                </div>
                                <div className='recommendations__second'>
                                    <Product image='/images/image9.jpg' />
                                    <Product image='/images/image5.jpg' />
                                    <Product image='/images/image4.jpg' />
                                </div>
                                <div className='recommendations__third'>
                                    <Product image='/images/image1.jpg' />
                                    <Product image='/images/image2.jpg' />
                                    <Product image='/images/image3.jpg' />
                                </div>
                                <div className='recommendations__fourth'>
                                    <Product image='/images/image5.jpg' />
                                    <Product image='/images/image9.jpg' />
                                    <Product image='/images/image10.jpg' />
                                </div>
                                <div className='recommendations__fifth'>
                                    <Product image='/images/image7.jpg' />
                                    <Product image='/images/image8.jpg' />
                                    <Product image='/images/image4.jpg' />
                                </div>
                                <div className='recommendations__sixth'>
                                    <Product image='/images/image13.jpg' />
                                    <Product image='/images/image11.jpg' />
                                    <Product image='/images/image12.jpg' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </Spring>
              
    )
}




export default Landing
