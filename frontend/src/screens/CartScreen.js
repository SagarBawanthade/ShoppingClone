import React, { useContext } from 'react';
import { Store } from '../Store.js';
import { NavLink } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import '../styles/CartScreen.css';

function CartScreen() {
    const { state, dispatch: ctxDispatch } = useContext(Store);
    const { cart: { cartItems }, } = state;


    return (
        <>
            <Helmet>
                <title>Shopping Cart</title>
            </Helmet>
            <div className='container'>
                <h1>Shopping Cart</h1>
                {cartItems.length === 0 ? (
                    <p>Cart is empty. <NavLink to={'/'}>Go Shopping</NavLink></p>
                ) : (
                    <div>
                        {cartItems.map((item) => (
                            <div key={item.slug} className='cart-item'>
                                <img src={item.image} alt={item.name} />
                                <NavLink to={`/product/${item.slug}`}>{item.name}</NavLink>



                            </div>


                        ))}



                    </div>

                )}
            </div>
        </>
    )
}

export default CartScreen;