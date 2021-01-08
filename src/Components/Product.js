import React from 'react';
import "./Product.css";


function Product({image}) {
    return (
                    <div className="product">
                        <img src={image} alt="" />
                    </div>
    )
}

export default Product
