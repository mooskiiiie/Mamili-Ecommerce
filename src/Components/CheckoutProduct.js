import React from 'react';
import './CheckoutProduct.css';
import { useStateValue } from '../StateProvider';
import styled from 'styled-components';

function CheckoutProduct({ id, image, title, price, info }) {
    const [{ basket }, dispatch] = useStateValue();

    const HoverText = styled.p`
    color: #000;
    transition: 0.3s;
	:hover {
		color: #AD6438;
        cursor: pointer;
        transform: scale(1.1);
	}
`


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

    const removeFromBasket = () => {
        //remove the item from the basket
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id: id,
        })
    };

    return (
        <HoverText>
        <div className='checkoutProduct'>
            <img className='checkoutProduct__image' src={image} />

            <div className='checkoutProduct__info'>
                <p className='checkoutProduct__title'>{title}</p>
                <p>{info}</p>
            </div>
            <div className='checkout__buttons'>
                <p className='checkoutProduct__price'>
                    <small>₱</small>
                    <strong>{price}</strong>
                </p>
                <div className='eto'>
                    <button onClick={removeFromBasket}>-</button>
                    <button onClick={addToBasket}>+</button>
                </div>
            </div>
    
        </div>
        </HoverText>
    )
}

export default CheckoutProduct
