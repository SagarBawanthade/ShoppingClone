import React, { useEffect, useState } from 'react';
import '../styles/GroceryScreen.css';
import Rating from '../components/Rating.js';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import LoadingBox from '../components/LoadingBox';

function Packages() {

    const [packages, setPackages] = useState([]);
    const [loading, setLoading] = useState(true);


    const fetchData = async () => {
        try {
            const res = await axios.get("/api/groceryData");
            //filtering data
            const filterData = res.data.filter((packageItem) => packageItem.category === 'packages');
            setPackages(filterData);
        } catch (error) {
            console.log(error);

        }
    };

    useEffect(() => {
        fetchData();
        setLoading(false);
    }, []);

    const handleClick = () => {
        console.log("click")
    };



    return (
        <>
            <h6>Pakages</h6><br />
            {loading ? (
                <LoadingBox />
            ) : (
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
            )}
        </>

    )
}

export default Packages;