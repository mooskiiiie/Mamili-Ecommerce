import React from 'react';
import './Products.css';
import { Spring } from 'react-spring/renderprops';

function Products() {
    

    return (
        <Spring
        from={{ opacity: 0}}
        to={{ opacity: 1 }}
        config={{ delay: 1000, duration: 1000}}
    >
        { props => (
             <div style={props}> 
        <div className="products">
            <img className='tuklas__Products' src='/images/Products.png' alt='' />
            <div className="products__Container">
                <div className='products__Categories'>
                    <h1 className="categories__Header">CATEGORIES</h1>
                    <p className="categories__Option">Clothing</p>
                    <p className="categories__Option">Houseware</p>
                    <p className="categories__Option">Handicrafts</p>
                    <p className="categories__Option">Food</p>
                    <p className="categories__Option">Stationery</p>
                </div>
                <div className="products__Images">
                    <img className="tuklas__images" src="/images/image1.jpg" alt=""/>
                    <img className="tuklas__images" src="/images/image2.jpg" alt=""/>
                    <img className="tuklas__images" src="/images/image3.jpg" alt=""/>
                    <img className="tuklas__images" src="/images/image4.jpg" alt=""/>
                    <img className="tuklas__images" src="/images/image5.jpg" alt=""/>
                    <img className="tuklas__images" src="/images/image6.jpg" alt=""/>
                    <img className="tuklas__images" src="/images/image7.jpg" alt=""/>
                    <img className="tuklas__images" src="/images/image8.jpg" alt=""/>
                    <img className="tuklas__images" src="/images/image9.jpg" alt=""/>
                    <img className="tuklas__images" src="/images/image10.jpg" alt=""/>
                    <img className="tuklas__images" src="/images/image11.jpg" alt=""/>
                    <img className="tuklas__images" src="https://www.destination360.com/contents/pictures/uk/british-food.jpg" alt=""/>
                    <img className="tuklas__images" src="https://allears.net/dining/images/menu_item_image_98.jpg" alt=""/>
                    <img height='153px' className="tuklas__images" src="https://th.bing.com/th/id/OIP.8QDDSH6BP3rrziWPKZ3m8gHaIe?pid=Api&rs=1" alt=""/>
                    <img className="tuklas__images" src="https://www.sbs.com.au/food/sites/sbs.com.au.food/files/deconstructed-moussaka-with-bechamel.jpg" alt=""/>
                    <img className="tuklas__images" src="https://blogbaladi.com/wp-content/uploads/2020/04/mashewe-750x420.jpg" alt=""/>
                </div>
            </div>
        </div>
        </div>
            )}
        </Spring>  
           
    )
}

export default Products
