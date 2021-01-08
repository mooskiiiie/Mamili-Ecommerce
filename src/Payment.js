import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';
import CurrencyFormat from 'react-currency-format';
import { Link, useHistory } from 'react-router-dom';
import CheckoutProduct from './Components/CheckoutProduct';
import './Payment.css';
import { getBasketTotal } from './reducer';
import { useStateValue } from './StateProvider';
import axios from './axios';
import { Spring } from 'react-spring/renderprops';


function Payment() {
    const [{ basket, user }, dispatch] = useStateValue();
    const history = useHistory();

    const stripe = useStripe();
    const elements = useElements();

    const [succeeded, setSucceeded] = useState(false);
    const [processing, setProcessing] = useState("");
    const [error, setError] = useState(null);
    const [disabled, setDisabled] = useState(true);
    const [clientSecret, setClientSecret] = useState(true);

    useEffect(() => {
        const getClientSecret = async () => {
            const response = await axios({
                method: 'post',
                // remember that stripe wnts total in a currencies subunits
                url: `/payments/create?total=${getBasketTotal(basket) * 100}`
            });
            setClientSecret(response.data.clientSecret)
        }
        
        getClientSecret();
    }, [basket])

    const handleSubmit = async (event) => {
        //stripe stuff
        event.preventDefault();
        setProcessing(true);

        const payload = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardElement)
            }
        }).then(({ paymentIntent }) => {
            //paymentIntent = payment confirmation

            setSucceeded(true);
            setError(null)
            setProcessing(false)

            history.replaceState('/orders')
        })
    }

    const handleChange = event => {
        // this is gonna listen for changes in CardElement
        //and display errors 
        setDisabled(event.empty);
        setError(event.error ? event.error.message : "");
    }

    
  
    
    

    return (
        <Spring
        from={{ opacity: 0, marginTop: -100}}
        to={{ opacity: 1, marginTop: 0 }}
        config={{ delay: 500, duration: 1000}}
    >
        { props => (
             <div style={props}> 
        <div className='payment'>
            <div className='payment__top'>
                <img src='/images/Checkout.png' alt='' className='payment__logo' />
                <img src='/images/Order Summary.png' alt='' className='payment__logoTwo' />
                <p className='shipping'>Shipping arrangements will be made via seller</p>
            </div>
            <div className='payment__container'>
                <h1>
                    Checkout (
                        <Link to='/checkout'>{basket?.length} items</Link>
                        )
                </h1>

                {/* Payment section - delivery adress */}
                <div className='payment__section'>
                    <div className='payment__title'>
                        <h3>Delivery Address</h3>
                    </div>
                    <div className='payment__address'>
                        <p>{user?.email}</p>
                        <p>22 Makiling Drive, Alabang Hills,</p>
                        <p>Muntinlupa City, 1170</p>
                        <input type='text' placeholder='ADD A NEW ADDRESS' /><span><button className='address' type='submit'>Add</button></span>
                    </div>

                </div>

                {/* Payment section - review items */}
                <div className='payment__section'>
                    <div className='payment__title'>
                        <h3>Review items and delivery</h3>
                    </div>
                    <div className='payment__items'>
                        {basket.map(item => (
                            <CheckoutProduct 
                                id={item.id}
                                title={item.title}
                                image={item.image}
                                price={item.price}
                                info={item.info}
                            />
                        ))}
                    </div>
                </div>

                {/* Payment section - payment method */}
                <div className='payment__section'>
                    <div className='payment__title'>
                        <h3>Payment Method</h3>
                    </div>
                    <div className='payment__details'>
                            
                            <form onSubmit={handleSubmit}>
                                <CardElement onChange={handleChange} />


                                <div className='payment__priceContainer'>
                                    <CurrencyFormat 
                                        renderText={(value) => ( 
                                            <h3>Order Total: {value}</h3>
                                        )}
                                        decimalScale={2}
                                        value={getBasketTotal(basket)}
                                        displayType={"text"}
                                        thousandSeparator={true}
                                        prefix={"₱"}
                                    />
                                    <button disabled={processing || disabled || succeeded}>
                                        <span>{processing ? <p>Processing</p> : "Buy Now"} </span>
                                    </button>
                                </div>

                                {/* errors */}
                                {error && <div>{error}</div>}
                            </form>
                    </div>
                </div>
            </div>
        </div>
        </div>
            )}
        </Spring>
    )
}

export default Payment
