import Rating from './Rating.js';
import { NavLink } from 'react-router-dom';
import '../styles/GroceryScreen.css';
import { useContext } from 'react';
import { Store } from '../Store.js';
import axios from 'axios';


function Product(props) {

    const { product } = props;

    const { state, dispatch: ctxDispatch } = useContext(Store);

    const { cart } = state;
    const addToCart = async () => {
        const existItem = cart.cartItems.find((x) => x.slug === product.slug);
        const quantity = existItem ? existItem.quantity + 1 : 1;
        const { data } = await axios.get(`/api/groceryData/${product.slug}`);
        if (data.countInStock < quantity) {
            window.alert("Sorry Product is out of Stock")
            return;
        }
        ctxDispatch({ type: 'CART_ADD_ITEM', payload: { ...product, quantity } });
        console.log("ADDED ITEM TO CART");
    };


    return (
        <>


            <div className="grocery-image">
                <NavLink to={`/product/${product.slug}`}>
                    <img src={product.image} alt="packageItemImage" />
                </NavLink>
            </div>
            <div className="info">
                <NavLink to={`/product/${product.slug}`}>
                    <h3 className="grocery-title">{product.name}</h3>
                </NavLink>
            </div>
            <div className="info2">
                <strong>
                    <p className="grocery-price">{product.price}</p>
                </strong>
                <Rating rating={product.rating} />
                <p className="grocery-rating">{product.rating}</p>
                {product.countInStock === 0 ? (
                    <button disabled onClick={addToCart} className="btn" >
                        Add to cart
                    </button>) : (
                    <button onClick={addToCart} className="btn" >
                        Add to cart
                    </button>

                )}

            </div>
        </>
    )
}

export default Product;