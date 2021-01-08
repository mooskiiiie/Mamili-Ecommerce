import React from 'react';
import './Brands.css';
import Product from './Components/Product'
import { Spring } from 'react-spring/renderprops';

function Brands() {
    return (
        <Spring
        from={{ opacity: 0}}
        to={{ opacity: 1 }}
        config={{ delay: 1000, duration: 1000}}
    >
        { props => (
             <div style={props}> 
        <div className="brands">
            <img className='tuklas__brands' src='/images/Brands.png' alt=""/>
            <div className='brands__Container'>
                <div className='brands__Categories'>
                    <h1 className="brands__Header">CATEGORIES</h1>
                            <p className="brands__Option">Clothing</p>
                            <p className="brands__Option">Houseware</p>
                            <p className="brands__Option">Handicrafts</p>
                            <p className="brands__Option">Food</p>
                            <p className="brands__Option">Stationery</p>
                </div>
                <div className='brands__ShopContainer'>
                    <div className='brands__images'>
                        <div className='brands__logo'>
                            <img className='shop__logo' src='/images/shop1.jpg' alt=""/>
                            <h2 class="shop__name"> GRACE'S GOODS <br></br>Food </h2>
                        </div>
                        <div className="featured__shop">
                                <Product image="/images/image11.jpg" />
                                <Product image="/images/image1.jpg" />
                                <Product image="/images/image5.jpg" />
                                <Product image="/images/image9.jpg" />
                                <Product image="/images/image6.jpg" />
                        </div>
                    </div>
                    <div className='brands__images'>
                        <div className='brands__logo'>
                            <img className='shop__logo' src='https://logos-download.com/wp-content/uploads/2018/04/Giant_Food_Stores_logo_red.png' alt=""/>
                            <h2 class="shop__name"> GIANT <br></br>Food </h2>
                        </div>
                        <div className="featured__shop">
                                <Product image="/images/image8.jpg" />
                                <Product image="/images/image2.jpg" />
                                <Product image="/images/image6.jpg" />
                                <Product image="/images/image7.jpg" />
                                <Product image="/images/image6.jpg" />
                        </div>
                    </div>
                    <div className='brands__images'>
                        <div className='brands__logo'>
                            <img className='shop__logo' src='https://mediaassets.thedenverchannel.com/photo/2015/10/20/safeway_logo_1445376808187_25474447_ver1.0_640_480.jpg' alt=""/>
                            <h2 class="shop__name"> SAFEWAY DINER <br></br>Food </h2>
                        </div>
                        <div className="featured__shop">
                                <Product image="/images/image5.jpg" />
                                <Product image="/images/image6.jpg" />
                                <Product image="/images/image3.jpg" />
                                <Product image="/images/image1.jpg" />
                                <Product image="/images/image10.jpg" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
            )}
        </Spring>  
    )
}

export default Brands
