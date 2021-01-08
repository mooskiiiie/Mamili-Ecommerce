import React from 'react';
import './Footer.css';

function Footer() {
    return (
        <div className="footer">
                <img src="/images/Mamili.png" alt="" className="body__logoTwo"/> 
            <div className='footer__info'>
                <div className='footer__first'>
                    <h3>CUSTOMER SERVICE</h3>
                    <p>Help Centre</p>
                    <p>Payment Methods</p>
                    <p>Order Tracking</p>
                    <p>Return & Refund</p>
                    <p>Contact Us</p>
                </div>
                <div className='footer__second'>
                    <h3>ABOUT MAMILI</h3>
                    <p>About us</p>
                    <p>Mamili Blog</p>
                    <p>Mamili Careers</p>
                    <p>Mamili Policies</p>
                    <p>Privacy Policy</p>
                </div>
                <div className='footer__third'>
                    <h3>PAYMENT</h3>
                    <p>Credit/Debit</p>
                    <p>Gcash</p>
                    <p>Mamili Pay</p>
                </div>
            </div>   
        </div>
    )
}

export default Footer
