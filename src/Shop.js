import React from 'react';
import { Link } from 'react-router-dom';
import Product from './Components/Product';
import './Shop.css';

function Shop({title, info, image}) {
    return (
        <div className='shop'>
                    <Link to='./shop' className='grace__goods'>
                        <div className="shop__container">
                            <div className="featured__shopOne">
                                <img className="shop__logo" src={image} alt=""/>
                                <h2 class="shop__name"> {title} <br></br>{info} </h2>
                            </div>
                            <div className="featured__shop">
                                <Product image='/images/image5.jpg' />
                                <Product image='/images/image6.jpg'  />
                                <Product image='/images/image3.jpg' />
                                <Product image="/images/image1.jpg" />
                            </div>
                        </div>
                    </Link>
        </div>
    )
}

export default Shop
