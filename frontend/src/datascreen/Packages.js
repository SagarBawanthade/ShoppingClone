import React, { useEffect, useReducer } from 'react';
import '../styles/GroceryScreen.css';
import Rating from '../components/Rating.js';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import LoadingBox from '../components/LoadingBox';
import { Helmet } from 'react-helmet-async';

const initialState = {
    loading: true,
    packages: [],
};

const reducer = (state, action) => {
    switch (action.type) {
        case 'FETCH_REQUEST':
            return { ...state, loading: true };
        case 'FETCH_SUCCESS':
            return { ...state, packages: action.payload.packages, loading: false };
        default:
            return state;
    }
};

function Packages() {
    const [state, dispatch] = useReducer(reducer, initialState);


    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        dispatch({ type: 'FETCH_REQUEST' });
        try {
            const res = await axios.get('/api/groceryData');
            const filterData = res.data.filter((packageItem) => packageItem.category === 'packages');
            dispatch({
                type: 'FETCH_SUCCESS',
                payload: {
                    packages: filterData,
                },
            });
        } catch (error) {
            console.log(error);
        }
    };

    const addToCartHandler = () => {

    }

    return (
        <>
            <Helmet>
                <title>Packages</title>
            </Helmet>
            <h6>Packages</h6>
            <br />
            {state.loading ? (
                <LoadingBox />
            ) : (
                <div className="grocery-list">
                    {state.packages.map((packageItem) => (
                        <div key={packageItem.slug} className="grocery-card">
                            <div className="grocery-image">
                                <NavLink to={`/productdetailsscreen/${packageItem.slug}`}>
                                    <img src={packageItem.image} alt="packageItemImage" />
                                </NavLink>
                            </div>
                            <div className="info">
                                <NavLink to={`/packages/${packageItem.slug}`}>
                                    <h3 className="grocery-title">{packageItem.name}</h3>
                                </NavLink>
                                <p className="grocery-countInStock">{packageItem.countInStock}</p>
                                <p className="grocery-description">{packageItem.description}</p>
                            </div>
                            <div className="info2">
                                <strong>
                                    <p className="grocery-price">{packageItem.price}</p>
                                </strong>
                                <Rating rating={packageItem.rating} />
                                <p className="grocery-rating">{packageItem.rating}</p>
                                <NavLink to='/cartscreen' onClick={() => addToCartHandler}>
                                    <button className="btn" >
                                        Add to cart
                                    </button>
                                </NavLink>

                            </div>
                        </div>
                    ))}
                </div>
            )}
        </>
    );
}

export default Packages;
