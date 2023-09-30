import React, { useEffect, useReducer } from 'react';
import Row from 'react-bootstrap/Row';
import '../styles/GroceryScreen.css';
import { Helmet } from 'react-helmet-async';
import axios from 'axios';
import Product from '../components/Product';
import LoadingBox from '../components/LoadingBox';

const reducer = (state, action) => {
    switch (action.type) {
        case "FETCH_REQUEST":
            return { ...state, loading: true };
        case "FETCH_SUCCESS":
            return { ...state, products: action.payload, loading: false };
        default:
            return state;
    }
};


function GroceryScreen() {

    const [{ loading, products }, dispatch] = useReducer(reducer, {
        products: [],
        loading: true,
    });

    useEffect(() => {
        const fetchData = async () => {
            dispatch({ type: 'FETCH_REQUEST' });
            try {
                const result = await axios.get('/api/groceryData');
                dispatch({ type: 'FETCH_SUCCESS', payload: result.data });
            } catch (error) {
                console.log(error);
            }
        };
        fetchData();
    }, [])


    return (
        <>
            <Helmet>
                <title>GroceryScreen</title>
            </Helmet>

            {loading ? (
                <LoadingBox />
            ) : (
                <div className='container'>
                    <h1>Groceries you want...</h1>
                    <br />

                    <div>
                        <h6>Packages</h6>
                        <Row>
                            {products.filter((product) => product.category === 'packages').map((product) => (
                                <div key={product.slug} className="grocery-card">
                                    <Product product={product}></Product>
                                </div>
                            ))}
                        </Row>
                    </div>
                    <br />
                    <br />
                    <div>
                        <h6>Fruits</h6>
                        <Row>
                            {products.filter((product) => product.category === 'fruits').map((product) => (
                                <div key={product.slug} className="grocery-card">
                                    <Product product={product}></Product>
                                </div>
                            ))}
                        </Row>
                    </div><br />
                    <br />
                    <div>
                        <h6>Fruits</h6>
                        <Row>
                            {products.filter((product) => product.category === 'vegetables').map((product) => (
                                <div key={product.slug} className="grocery-card" >
                                    <Product product={product}></Product>
                                </div>
                            ))}
                        </Row>
                    </div>
                </div>

            )}
        </>
    )
}

export default GroceryScreen;