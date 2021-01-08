import React from 'react';
import '../Components/Sales.css';

function Sales() {
    return (
        <div className='sales'>
            <div className='sales__title'>
                <h3>TO SHIP</h3>
                <p className='sales__number'>10</p>
            </div>
            <div className='sales__header'>
                <p className='headers'>Date</p>
                <p className='headers'>Order ID</p>
                <p className='headers'>Name</p>
                <p className='headers'>Delivery Address</p>
                <p className='headers'>Payment Status</p>
                <p>080929</p>
                <p>ABC123</p>
                <p>Nam, Do-San</p>
                <p>123 Tech St., Pasig City</p>
                <p>PAIDCREDITCARD</p>
                <p>081120</p>
                <p>ABD124</p>
                <p>Nam, Chul-San</p>
                <p>24 Simp St., Quezon City</p>
                <p>PAIDGCASH</p>
                <p>081120</p>
                <p>AQD134</p>
                <p>Kim, Yong-San</p>
                <p>1 Shank Blvd., Makati City</p>
                <p>PAIDCOD</p>
                <p>091129</p>
                <p>ZBD124</p>
                <p>Han, Ji-Pyeong</p>
                <p>2B Avenue., Lipa City</p>
                <p>PENDING</p>
            </div>
        </div>
    )
}

export default Sales 
