import React, { useEffect, useState } from 'react';
import '../styles/GroceryScreen.css';
import Rating from '../components/Rating.js';
import { NavLink } from 'react-router-dom';
import axios from 'axios';

function Packages() {

    const [packages, setPackages] = useState([]);

    useEffect(() => {
        const fetchData = () => {
            axios.get("/api/groceryData")
                .then((res) => {
                    setPackages(res.data);
                }).catch((error) => {
                    console.log(error);
                })

        };
        fetchData();

    }, []);




    const handleClick = () => {
        console.log("click")
    }



    return (
        <>
            <h6>Pakages</h6><br />
            <div className='grocery-list'>
                {packages.map((packageItem) => (
                    <div key={packageItem.slug} className='grocery-card' >
                        <div className="grocery-image">
                            <NavLink to={`/packageItem/${packageItem.slug}`}><img src={packageItem.image} alt='packageItemImage' /></NavLink>
                        </div>
                        <div className='info'>
                            <NavLink to={`/packageItem/${packageItem.slug}`}><h3 className="grocery-title">{packageItem.name}</h3></NavLink>
                            <p className="grocery-countInStock">{packageItem.countInStock}</p>
                            <p className="grocery-description">{packageItem.description}</p>
                        </div>
                        <div className='info2'>
                            <strong><p className="grocery-price">{packageItem.price}</p></strong>
                            <Rating rating={packageItem.rating} /><p className="grocery-rating">{packageItem.rating}</p>
                            <button className='btn' onClick={handleClick}>Add to cart</button>
                        </div>
                    </div>
                ))}
            </div>
        </>

    )
}

export default Packages;