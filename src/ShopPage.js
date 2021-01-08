import React from 'react';
import './ShopPage.css';
import SoloProduct from './Components/SoloProduct';
import { Spring } from 'react-spring/renderprops';

function ShopPage() {
    return (
        <Spring
        from={{ opacity: 0, marginTop: -100}}
        to={{ opacity: 1, marginTop: 0 }}
        config={{ delay: 500, duration: 1000}}
    >
        { props => (
             <div style={props}>    
        <div className="shoppage">
            <img src='/images/Grace.png' alt="" className='page__logo'/>
            <div className="shoppage__product">
                <SoloProduct id={123} title='Bacon Cheese Burger' image='/images/product_image.jpg' alt='' price={250} info='Bacon & Cheese Burger, quite simply, is a piece of original Fillet, topped with cheese and bacon, with a bit of mayo and lettuce as a bed.' />
            </div>
            <div className='shoppage__shop'>
                <div className='grace'>
                    <img src='/images/shop1.jpg' alt='' className='grace__logo'/>
                    <div className='grace__name'>
                        <p>Grace's Goods</p>
                    </div>
                </div>
                <div className='grace__products'>
                        <img src='/images/image4.jpg' alt='' className='grace__productsImage'/>
                        <img src='/images/image1.jpg' alt='' className='grace__productsImage'/>
                        <img src='/images/image2.jpg' alt='' className='grace__productsImage'/>
                        <img src='/images/image5.jpg' alt='' className='grace__productsImage'/>
                        <img src='/images/image3.jpg' alt='' className='grace__productsImage'/>
                    </div>
            </div>
        </div>
        </div>
            )}
        </Spring>
    )
}

export default ShopPage
