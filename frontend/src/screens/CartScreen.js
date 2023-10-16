import React, { useContext } from 'react';
import { Store } from '../Store.js';
import { NavLink, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import '../styles/CartScreen.css';
import axios from 'axios';


function CartScreen() {
    const navigate = useNavigate();
    const { state, dispatch: ctxDispatch } = useContext(Store);
    const { cart: { cartItems }, } = state;


    const updateCartHandler = async (item, quantity) => {
        try {
            const { data } = await axios.get(`/api/groceryData/${item.id}`);
            if (data.countInStock < quantity) {
                window.alert("Sorry, Product is out of Stock");
                return;
            }
            ctxDispatch({
                type: 'CART_ADD_ITEM',
                payload: { ...item, quantity },
            });

        } catch (err) {
            console.log(err);
        }


    };

    const removeItemHandler = (item) => {
        ctxDispatch({
            type: 'CART_REMOVE_ITEM',
            payload: { ...item }
        });
    }

    const checkoutHandler = () => {
        navigate('/signin?redirect=/shipping');
    };


    return (
        <>

            <Helmet>
                <title>Shopping Cart</title>
            </Helmet>
            <div className='container'>
                <h1>Shopping Cart</h1>
                <div className='cart'>
                    <div className='manipulatecart'>
                        {cartItems.length === 0 ? (
                            <p>Cart is empty. <NavLink to="/">Go Shopping</NavLink></p>

                        ) : (
                            <div >
                                {cartItems.map((item) => (
                                    <div key={item._id}>
                                        <ul className='list-item'>
                                            <li><img src={item.image} alt={item.name} className="img-fluid rounded img-thumbnail" />{' '}</li>
                                            <NavLink to={`/product/${item.slug}`}>{item.name}</NavLink>

                                            <li><button style={{ marginRight: "20px", marginLeft: "5px" }} onClick={() => updateCartHandler(item, item.quantity - 1)
                                            }
                                                variant="light"
                                                disabled={item.quantity === 1}>
                                                <i className="fas fa-minus-circle"></i>
                                            </button>{' '} <span>{item.quantity}</span>{' '}</li>

                                            <li><button style={{ marginRight: "20px", marginLeft: "5px" }} onClick={() => updateCartHandler(item, item.quantity + 1)
                                            }
                                                variant="light"
                                            >
                                                <i className="fas fa-plus-circle"></i>
                                            </button></li>

                                            <li>{item.price}</li>

                                            <li><button style={{ marginRight: "20px", marginLeft: "5px" }}
                                                onClick={() => removeItemHandler(item)}
                                                variant="light"><i className="fas fa-trash"></i></button></li>
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>


                    {/* Pricing section */}
                    <div className='proceedtocheckout'>
                        <div>
                            <h3 >
                                Subtotal
                                ({cartItems.reduce((a, c) => a + c.quantity, 0)}{' '}
                                items) :
                                {cartItems.reduce((a, c) => a + c.quantity * c.price, 0)}{' '}
                            </h3>
                        </div>

                        <div className="d-grid">
                            <button onClick={checkoutHandler} className='btn' type="button" variant="primary" disabled={cartItems.length === 0}>Proceed to Checkout</button>
                        </div>
                    </div>


                </div>
            </div>

        </>
    )
}

export default CartScreen;