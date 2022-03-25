import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleRight,  faTrash } from '@fortawesome/free-solid-svg-icons';
import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products,setProducts] = useState([]);
    const[cart, setCart] = useState([]);
    
    useEffect( () => {
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
        
    },[])
    const handleClicked = product =>{
        console.log(product);
        
        console.log(product.price);
        // do not do this: cart.push(product);
        const newCart = [...cart,product];
        setCart(newCart);    
    }
    
    return (
        <div className='shop-container'>
            <div className="products-container">
            
                {
                products.map(product => <Product key={product.id} product={product} handleClicked= {handleClicked}></Product>)
                }
            
            
            </div>
            <div className="cart-container">
                <div className='cart-detail'>
                    <h4>Order Summary</h4>
                    <div className='cart-calc'>
                        <p>Selected Items:{cart.length}</p>
                        <p>Total Price:</p>
                        <p>Total Shipping Charge: </p>
                        <p>Tax:</p>
                    </div>
                    <h4>Grand Total: </h4>
                    <div className="order-btns">
                        <button id='cart-delete-btn'><span>Clear Cart</span><FontAwesomeIcon icon={faTrash}></FontAwesomeIcon> </button> <br /> 
                        <button id='review-btn'><span>Review order</span><FontAwesomeIcon icon={faArrowAltCircleRight}></FontAwesomeIcon></button>    
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Shop;