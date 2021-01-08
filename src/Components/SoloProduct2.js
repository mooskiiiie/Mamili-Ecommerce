import React from 'react';
import './SoloProduct.css';
import { useStateValue } from '../StateProvider';

function SoloProduct({id, title, image, price, info, ingredients}) {
    const [{ basket }, dispatch] = useStateValue();

        console.log('this is the basket >>> ', basket);

        const addToBasket = () => {
            //dispatch the item into the data layer
            dispatch({
                type: 'ADD_TO_BASKET',
                item: {
                    id: id,
                    title: title,
                    image: image,
                    price: price,
                    info: info,
                },
            });
        };

    return (
        <div className="soloproduct">
            <div className='product__container'>
                    <img src={image} alt='' className='ano'/>
                <div className="product__info">
                    <h2><strong>{title}</strong></h2>
                    <div className="product__desc">
                        <p className='description'>{info} </p>
                        <p className='ingredients'><u>Ingredients</u></p>
                        <p className='ingredients'>Beef Patty</p>
                        <p className='ingredients'>Onions</p>
                        <p className='ingredients'>Cheese</p>
                        <p className='ingredients'>Tomato paste</p>
                        <p className="product__price">₱{price}</p>
                    </div>
                </div>
            </div>    
            <div className="buttons">
                <button className="save">SAVE</button>
                <button className="addtocart" onClick={addToBasket}>ADD TO CART</button>
            </div> 
        </div>
    )
}

export default SoloProduct
