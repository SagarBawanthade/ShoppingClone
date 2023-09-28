import React, { useEffect, useState } from 'react';
import '../styles/GroceryScreen.css';
import Rating from '../components/Rating.js';
import axios from 'axios';
import { NavLink } from 'react-router-dom';

function Vegetables() {

    const [vegetables, setVegetables] = useState([]);

    useEffect(() => {
        const fetchData = () => {
            axios.get('/api/groceryData')
                .then((res) => {
                    setVegetables(res.data);
                }).catch((error) => {
                    console.log(error);
                })
        }; fetchData();
    }, []);

    const handleClick = () => {
        console.log("click")
    }


    return (
        <>
            <h6>Vegetables</h6><br />
            <div className='grocery-list'>
                {vegetables.map((vegetableItem) => (
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

            </div></>
    )
}

export default Vegetables;