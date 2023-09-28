import React, { useEffect, useState } from 'react';
import '../styles/GroceryScreen.css';
import Rating from '../components/Rating.js';
import axios from 'axios';
import { NavLink } from 'react-router-dom';

function Fruits() {

    const [fruits, setFruits] = useState([]);

    useEffect(() => {
        const fetchData = () => {
            axios.get('/api/groceryData')
                .then((res) => {
                    setFruits(res.data)
                }).catch((error) => {
                    console.log(error)
                })
        };
        fetchData();
    }, []);

    const handleClick = () => {
        console.log("click")
    }

    return (
        <>
            <h6>Fruits</h6><br />
            <div className='grocery-list'>
                {fruits.map((fruitItem) => (
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
        </>
    )
}

export default Fruits