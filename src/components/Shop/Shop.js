import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleRight,  faTrash } from '@fortawesome/free-solid-svg-icons';
import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css'
import Cart from '../Cart/Cart';
import { addToDb, getStoredCart } from '../../utilities/fakedb';


const Shop = () => {
    const [products,setProducts] = useState([]);
    const[cart, setCart] = useState([]);
    
    useEffect( () => {
        
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[]);

    useEffect(()=>{
        // local storage get 
        const storedCart = getStoredCart();
        const savedCart = [];
        for(const id in storedCart){
            const addedProduct = products.find(product => product.id === id);
            if(addedProduct){
                const quantity = storedCart[id];
                addedProduct.quantity = quantity;
                savedCart.push(addedProduct)
            }    
        }
        setCart(savedCart);
    },[products])
    const handleClicked = product =>{
        // console.log(product);
        
        // console.log(product.price);
        // do not do this: cart.push(product);
        let newCart = [];
        const exists = cart.find(item => item.id === product.id);
        if(!exists){
            product.quantity = 1;
            newCart = [...cart,product]
        }
        else{
            const rest = cart.filter(item => item.id !== product.id);
            exists.quantity =exists.quantity + 1;
            newCart = [...rest,exists];
        }
        
        setCart(newCart); 
        addToDb(product.id);
    }
    
    return (
        <div className='shop-container'>
            <div className="products-container">
            
                {
                products.map(product => <Product key={product.id} product={product} handleClicked= {handleClicked}></Product>)
                }
            
            
            </div>
            <div className="cart-container">
               <div className="cart-detail">
                  <Cart cart={cart}></Cart> 
                </div> 
                
    
            </div>
            
        </div>
    );
};

export default Shop;