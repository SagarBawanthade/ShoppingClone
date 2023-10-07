import Rating from './Rating.js';
import { NavLink } from 'react-router-dom';
import '../styles/GroceryScreen.css';
import { useContext } from 'react';
import { Store } from '../Store.js';
import axios from 'axios';


function Product(props) {

    const { product } = props;

    const { state, dispatch: ctxDispatch } = useContext(Store);
    const {
        cart: { cartItems },
    } = state;

    const addToCartHandler = async () => {
        try {
            const existItem = cartItems.find((x) => x.id === product.id);
            const quantity = existItem ? existItem.quantity + 1 : 1;
            const { data } = await axios.get(`/api/groceryData/${product.id}`);
            if (data.countInStock < quantity) {
                window.alert('Sorry. Product is out of stock');
                return;

            }
            ctxDispatch({
                type: 'CART_ADD_ITEM',
                payload: { ...product, quantity },
            });
        } catch (err) {
            console.log(err);

        }

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
                    <button disabled onClick={addToCartHandler} className="btn" >
                        Add to cart
                    </button>) : (
                    <button onClick={addToCartHandler} className="btn" >
                        Add to cart
                    </button>

                )}

            </div>
        </>
    )
}

export default Product;