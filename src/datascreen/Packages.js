import React from 'react';
import '../styles/GroceryScreen.css';
import groceryData from '../datasets/grocerydata.js';
import Rating from '../components/Rating.js';
import { NavLink } from 'react-bootstrap';

function Packages() {

    const handleClick = () => {
        console.log("click")
    }


    return (
        <>
            <h6>Pakages</h6><br />
            <div className='grocery-list'>
                {groceryData.packages.map((packageItem) => (
                    <div key={packageItem.slug} className='grocery-card' >
                        <div className="grocery-image">
                            <NavLink to={`/productrenderscreen/${packageItem.slug}`}><img src={packageItem.image} alt='packageItemImage' /></NavLink>
                        </div>
                        <div className='info'>
                            <NavLink to={`/productrenderscreen/${packageItem.slug}`}><h3 className="grocery-title">{packageItem.name}</h3></NavLink>
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