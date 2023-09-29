import React, { useEffect, useReducer } from 'react';
import '../styles/GroceryScreen.css';
import Rating from '../components/Rating.js';
import axios from 'axios';
import { NavLink } from 'react-router-dom';
import LoadingBox from '../components/LoadingBox';
import { Helmet } from 'react-helmet-async';
import logger from 'use-reducer-logger';

const initialState = {
    loading: true,
    vegetables: [],
}
const reducer = (state, action) => {
    switch (action.type) {
        case 'FETCH_REQUEST':
            return { ...state, loading: true };
        case 'FETCH_SUCCESS':
            return { ...state, vegetables: action.payload.vegetables, loading: false };
        default:
            return state
    };
}




function Vegetables() {

    const [state, dispatch] = useReducer(logger(reducer), initialState);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        dispatch({ type: 'FETCH_REQUEST' });
        try {
            const res = await axios.get('/api/groceryData');
            const filterData = res.data.filter((vegetableItem) => vegetableItem.category === 'vegetables');
            dispatch({
                type: 'FETCH_SUCCESS',
                payload: {
                    vegetables: filterData
                },
            });
        } catch (error) {
            console.log(error);
        }
    };



    const handleClick = () => {
        console.log("click")
    }


    return (
        <>
            <Helmet>
                <title>Vegetables</title>
            </Helmet>
            <h6>Vegetables</h6><br />
            {state.loading ? (
                <LoadingBox />
            ) : (
                <div className='grocery-list'>
                    {state.vegetables.map((vegetableItem) => (
                        <div key={vegetableItem.slug} className='grocery-card'>
                            <div className="grocery-image">
                                <NavLink to={`vegetableItem/${vegetableItem}`}><img src={vegetableItem.image} alt='packageItemImage' /></NavLink>
                            </div>
                            <div className='info'>
                                <NavLink to={`vegetableItem/${vegetableItem}`}><h3 className="grocery-title">{vegetableItem.name}</h3></NavLink>
                                <p className="grocery-countInStock">{vegetableItem.countInStock}</p>
                                <p className="grocery-description">{vegetableItem.description}</p>
                            </div>
                            <div className='info2'>
                                <strong><p className="grocery-price">{vegetableItem.price}</p></strong>
                                <Rating rating={vegetableItem.rating} /><p className="grocery-rating">{vegetableItem.rating}</p>
                                <button className='btn' onClick={handleClick}>Add to cart</button>
                            </div>
                        </div>
                    ))}

                </div>
            )}
        </>
    )
}

export default Vegetables;