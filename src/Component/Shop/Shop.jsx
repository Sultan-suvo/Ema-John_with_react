import React, { useEffect, useState } from 'react';
import './Shop.css'

const Shop = () => {
    const [products , useProducts] = useState([]);
    useEffect(()=> {
        fetch('products.json')
        .then(res=> res.json())
        .then(data => useProducts(data))
    },[])
    return (
        <div className='shop-container'>
            <div className='products-container'>
                cdv
            </div>
            <div className="cart-container">
                sdc
            </div>
        </div>
    );
};

export default Shop;