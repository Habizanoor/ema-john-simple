import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleRight,  faTrash } from '@fortawesome/free-solid-svg-icons';
import './Cart.css'
import React from 'react';

const Cart = (props) => {
    const {cart} = props;
    // console.log(cart);
    let total = 0;
    let shipping = 0;
    let quantity = 0;

    for (const  product of cart ){
        quantity = quantity + product.quantity;
        total = total + product.price * product.quantity;
        shipping = shipping + product.shipping ;
    }
    const tax = parseFloat((total * 0.1).toFixed(2));
    const grandTotal = total +shipping + tax;
    return (
        <div>
            <div className='cart-detail'>
                    <h4>Order Summary</h4>
                    <div className='cart-calc'>
                    <p>Selected Items:{quantity}</p>
                        <p>Total Price:${total}</p>
                        <p>Total Shipping Charge: ${shipping}</p>
                        <p>Tax:${tax}</p>
                    </div>
                    <h4>Grand Total:{grandTotal} </h4>
                    <div className="order-btns">
                        <button id='cart-delete-btn'><span>Clear Cart</span><FontAwesomeIcon icon={faTrash}></FontAwesomeIcon> </button> <br /> 
                        <button id='review-btn'><span>Review order</span><FontAwesomeIcon icon={faArrowAltCircleRight}></FontAwesomeIcon></button>    
                    </div>
                </div>
            
        </div>
    );
};

export default Cart;