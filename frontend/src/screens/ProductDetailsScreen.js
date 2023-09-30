import React, { useContext, useEffect, useReducer } from 'react';
import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import '../styles/ProductRenderScreen.css';
import { Store } from '../Store';
import { NavLink } from 'react-router-dom';


const reducer = (state, action) => {
    switch (action.type) {
        case 'FETCH_REQUEST':
            return { ...state, loading: true };
        case 'FETCH_SUCCESS':
            return { ...state, loading: false, product: action.payload };
        default:
            return state;
    }
};


function ProductRenderScreen() {
    const params = useParams();
    const { slug } = params;

    const [{ loading, product }, dispatch] = useReducer(reducer, {
        product: [],
        loading: true,
    });

    useEffect(() => {
        const fetchData = async () => {
            dispatch({ type: 'FETCH_REQUEST' });
            try {
                const result = await axios.get(`/api/groceryData/slug/${slug}`);
                dispatch({ type: 'FETCH_SUCCESS', payload: result.data });
            } catch (error) {
                console.log(error);
            }
        };
        fetchData();
    }, [slug]);

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
    };



    return (
        <>
            <Helmet>
                <title>{product.name}</title>
            </Helmet>
            {loading ? (
                <div>Loading...</div>
            ) : (
                <div className='container' style={{ display: "flex" }}>
                    <div className='leftcontainer'>
                        <img src={product.image} alt={product.name} />
                    </div>

                    <div className='rightcontainer'>
                        <h3>{product.name}</h3>
                        <h4>{product.slug}</h4>
                        <strong><h4>{product.price}</h4></strong>
                        <p className="grocery-rating">{product.rating} </p>
                        <strong><span>{product.numReviews} reviews</span></strong>
                        {product.countInStock === 0 ? (
                            <p style={{ textAlign: "center", width: "100px", borderRadius: "10px", backgroundColor: "red", fontSize: "20px", color: "white", fontFamily: "monospace" }}>Out of Stock</p>
                        ) : (
                            <p style={{ textAlign: "center", width: "100px", borderRadius: "10px", backgroundColor: "green", fontSize: "20px", color: "white", fontFamily: "monospace" }} >In Stock</p>
                        )}
                        <p className='secondary-para'>{product.description}</p>
                        {product.countInStock === 0 ? (
                            <button disabled style={{ width: "200px" }} className='btn'>Add to cart</button>
                        ) : (
                            <NavLink to='/cartscreen'><button onClick={addToCart} style={{ width: "200px" }} className='btn'>Add to cart</button></NavLink>
                        )}
                    </div>

                </div>

            )}
        </>
    );
}

export default ProductRenderScreen;