import React from 'react';
import { Link } from 'react-router-dom';
import "./Home.css";
import Product from './Components/Product';
import { Spring } from 'react-spring/renderprops';

function Home() {
    return (
        <Spring
        from={{ opacity: 0, marginTop: -100}}
        to={{ opacity: 1, marginTop: 0 }}
        config={{ delay: 500, duration: 1000}}
    >
        { props => (
             <div style={props}>    
        <div className="home">
            <div>
                <img src="/images/Tuklas.png" alt="" className="body__logo"/>
            </div>
            <div className="home__container">
                <div className="grid__containerOne">
                    
                    <p className="options__one">VIEW BY PRODUCTS</p>
                    
                    <div className="clickable">
                        <p className="options">CLOTHING</p> 
                        <p className="options">HOUSEWARE</p>
                        <p className="options">HANDICRAFTS</p>
                        <p className="options">FOOD</p>
                        <p className="options">STATIONERY</p>
                    </div>
                </div>   
                <Link to='./shop2'>
                <div className="grid__containerTwo">
                    <Product image="/images/image1.jpg" />
                    <Product image="/images/image2.jpg" />
                    <Product image="/images/image3.jpg" />
                    <Product image="/images/image4.jpg" />
                    <Product image="/images/image5.jpg" />
                </div>
                </Link>
                <div className="grid__containerThree">
                    <Product image="/images/image9.jpg" />
                    <Product image="/images/image7.jpg" />
                    <Product image="/images/image8.jpg" />
                    <Product image="/images/image9.jpg" />
                    <Product image="/images/image10.jpg" />
                </div>
                    <Link to='/products'>
                    <div className="view__More">   
                        <h2>View More</h2>
                    </div>
                    </Link>
                    
            </div>
            
            <div className="home__containerTwo">
                <div className="grid__containerOne">
                    <p className="options__one">VIEW BY SHOPS</p>
                    <div className="clickable">
                        <p className="options">CLOTHING</p> 
                        <p className="options">HOUSEWARE</p>
                        <p className="options">HANDICRAFTS</p>
                        <p className="options">FOOD</p>
                        <p className="options">STATIONERY</p>
                    </div>
                </div>   
                <div className="first__container"> 
                    
                        <div className="grid__containerOne__shop">
                            <div className="featured__shopOne">
                                <img className="shop__logo" src="/images/shop1.jpg" alt=""/>
                                <h2 class="shop__name"> GRACE'S GOODS <br></br>Food </h2>
                            </div>
                            <div className="featured__shop">
                                <Product image="/images/image5.jpg" />
                                <Product image="/images/image2.jpg" />
                                <Product image="/images/image4.jpg" />
                            </div>
                        </div>
                    
                    
                    <div className="grid__containerOne__shop">
                        <div className="featured__shopOne">
                            <img className="shop__logo" src="https://logos-download.com/wp-content/uploads/2018/04/Giant_Food_Stores_logo_red.png" alt=""/>
                            <h2 class="shop__name"> GIANT <br></br>Food </h2>
                        </div>
                        <div className="featured__shop">
                            <Product image="/images/image2.jpg" />
                            <Product image="/images/image9.jpg" />
                            <Product image="/images/image6.jpg" />
                        </div>
                    </div>
                    
                </div>
                
                <div className="first__container"> 
               
                    <div className="grid__containerOne__shop">
                        <div className="featured__shopOne">
                            <img className="shop__logo" src="https://mediaassets.thedenverchannel.com/photo/2015/10/20/safeway_logo_1445376808187_25474447_ver1.0_640_480.jpg" alt=""/>
                            <h2 class="shop__name"> SAFEWAY DINER <br></br>Food </h2>
                        </div>
                        <div className="featured__shop">
                            <Product image="/images/image8.jpg" />
                            <Product image="/images/image1.jpg" />
                            <Product image="/images/image9.jpg" />
                        </div>
                    </div>
                    
               
                    <div className="grid__containerOne__shop">
                        <div className="featured__shopOne">
                            <img className="shop__logo" src="https://th.bing.com/th/id/OIP.5UYnaaQnGZ9vW61hER2VVwHaHc?pid=Api&rs=1" alt=""/>
                            <h2 class="shop__name"> THE 1979 <br></br>Food </h2>
                        </div>
                        <div className="featured__shop">
                            <Product image="/images/image8.jpg" />
                            <Product image="/images/image3.jpg" />
                            <Product image="/images/image2.jpg" />
                        </div>
                    </div>
                   
                </div>
                <Link to='/brands'>
                <div className="view__More">
                    <h2>View More</h2>
                </div>
                </Link>
            </div>
               
        </div>
        </div>
            )}
        </Spring>
        
    )
}

export default Home
