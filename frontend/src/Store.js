import React, { createContext, useReducer } from "react";

export const Store = createContext();

const initialState = {
    cart: {
        cartItems: localStorage.getItem('cartItems')
            ? JSON.parse(localStorage.getItem('cartItems'))
            : [],
    },
};

function reducer(state, action) {
    switch (action.type) {
        case "CART_ADD_ITEM":
            // add to cart
            const newItem = action.payload;
            const existItem = state.cart.cartItems.find((item) => item.id === newItem.id);

            if (existItem) {
                //update quantity if the item is already exists
                const updatedcartItems = state.cart.cartItems.map((item) => item.id === existItem.id ?
                    newItem : item
                );
                localStorage.setItem('cartItems', JSON.stringify(updatedcartItems));
                return { ...state, cart: { ...state.cart, cartItems: updatedcartItems } }

            } else {
                // Add a new item if it doesn't exist
                const updatedCartItems = [...state.cart.cartItems, newItem];
                localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
                return { ...state, cart: { ...state.cart, cartItems: updatedCartItems } };

            }



        case "CART_REMOVE_ITEM": {
            const itemIdToRemove = action.payload.id;
            const updatedcartItems = state.cart.cartItems.filter((item) => item.id !== itemIdToRemove);
            localStorage.setItem('cartItems', JSON.stringify(updatedcartItems));
            return { ...state, cart: { ...state.cart, cartItems: updatedcartItems } };
        }

        default:
            return state;
    }

}


export function StoreProvider(props) {
    const [state, dispatch] = useReducer(reducer, initialState);
    const value = { state, dispatch };
    return <Store.Provider value={value}>{props.children}</Store.Provider>;
}
