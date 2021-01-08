import React from 'react';
import './ShopPage.css';
import SoloProduct2 from './Components/SoloProduct2';
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
                <SoloProduct2 id={1234} title='Caramelized Onion Burgers' image='/images/image1.jpg' alt='' info='An excellent grilled burger from the Southern Livings cookbook, 30 Years of Our Best Recipes' price={190.0} />
            </div>
            <div className='shoppage__shop'>
                <div className='grace'>
                    <img src='/images/shop1.jpg' alt='' className='grace__logo'/>
                    <div className='grace__name'>
                        <p>Ashtan's Food</p>
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
