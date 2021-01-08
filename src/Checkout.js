import React from 'react';
import './Checkout.css';
import CheckoutProduct from './Components/CheckoutProduct';
import { useStateValue } from './StateProvider';
import Subtotal from './Subtotal';
import { Spring } from 'react-spring/renderprops';

function Checkout() {
    const [{ basket, user }, dispatch] = useStateValue();

    return (
        <Spring
        from={{ opacity: 0, marginTop: -100}}
        to={{ opacity: 1, marginTop: 0 }}
        config={{ delay: 500, duration: 1000}}
    >
        { props => (
             <div style={props}>    
        <div className='checkout'>
            <img className='Kariton' src='/images/Kariton.png' alt=""/>
            <div className='checkout__container'>
                <div className='checkout__left'>
                    <div className='checkout__SelectAll'>
                        <h3>Hello, {user?.email}</h3>
                        <h2 className='checkout__title'>YOUR KARITON</h2>
                    </div>
                    <div className='checkout__totalItems'>

                        {basket.map(item => (
                            <CheckoutProduct
                                id={item.id}
                                title={item.title}
                                image={item.image}
                                price={item.price}
                                info={item.info}
                            />
                        ))}

                         {/*CheckoutProduct*/}

                    </div>
                    
                           

                </div>
                <div className='checkout__right'>
                    <Subtotal />
                </div>

            </div>
        </div>
        </div>
            )}
        </Spring>
    )
}

export default Checkout
