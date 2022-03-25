import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faCoffee, faShop } from '@fortawesome/free-solid-svg-icons';

import '../Product/Product.css'

const Product = (props) => {
   
    return (
        <div className='product'>
            <img src={props.product.img} alt="" />
            <div className='product-information'>
                <h4>{props.product.name}</h4>
                <p>Price: ${props.product.price}</p>
                <div>
                    <small>Manufacturer: {props.product.seller}</small><br></br>
                    <small>Rating: {props.product.ratings} starts</small>
                </div>
            </div>
            
            <button onClick={() => props.handleClicked(props.product)}><p>Add to Cart</p><FontAwesomeIcon icon={faCartShopping}></FontAwesomeIcon></button>
            
        </div>
    );
};

export default Product;