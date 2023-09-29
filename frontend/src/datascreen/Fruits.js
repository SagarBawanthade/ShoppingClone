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
    fruits: [],
};

const reducer = (state, action) => {
    switch (action.type) {
        case 'FETCH_REQUEST':
            return { ...state, loading: true };
        case 'FETCH_SUCCESS':
            return { ...state, fruits: action.payload.fruits, loading: false };
        default:
            return state;
    }
};

function Fruits() {

    const [state, dispatch] = useReducer(logger(reducer), initialState);


    const fetchData = async () => {
        dispatch({ type: 'FETCH_REQUEST' });
        try {
            const res = await axios.get('/api/groceryData');
            const filterData = res.data.filter((fruitItem) => fruitItem.category === 'fruits');
            dispatch({
                type: 'FETCH_SUCCESS',
                payload: {
                    fruits: filterData,
                },
            });
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const handleClick = () => {
        console.log("click")
    }

    return (
        <><Helmet>
            <title>Fruits</title>
        </Helmet>
            <h6>Fruits</h6><br />
            {state.loading ? (
                <LoadingBox />
            ) : (
                <div className='grocery-list'>
                    {state.fruits.map((fruitItem) => (
                        <div key={fruitItem.slug} className='grocery-card'>
                            <div className="grocery-image">
                                <NavLink to={`fruitItem/${fruitItem.slug}`}><img src={fruitItem.image} alt='packageItemImage' /></NavLink>
                            </div>
                            <div className='info'>
                                <NavLink to={`fruitItem/${fruitItem.slug}`}><h3 className="grocery-title">{fruitItem.name}</h3></NavLink>
                                <p className="grocery-countInStock">{fruitItem.countInStock}</p>
                                <p className="grocery-description">{fruitItem.description}</p>
                            </div>
                            <div className='info2'>
                                <strong><p className="grocery-price">{fruitItem.price}</p></strong>
                                <Rating rating={fruitItem.rating} /><p className="grocery-rating">{fruitItem.rating}</p>
                                <button className='btn' onClick={handleClick}>Add to cart</button>
                            </div>
                        </div>
                    ))}

                </div>
            )}
        </>
    )
}

export default Fruits