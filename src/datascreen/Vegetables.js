import React from 'react';
import '../styles/GroceryScreen.css';
import groceryData from '../datasets/grocerydata.js';
import Rating from '../components/Rating.js';

function Vegetables() {

    const handleClick = () => {
        console.log("click")
    }


    return (
        <>
            <h6>Vegetables</h6><br />
            <div className='grocery-list'>
                {groceryData.vegetables.map((vegetableItem) => (
                    <div key={vegetableItem.slug} className='grocery-card'>
                        <div className="grocery-image">
                            <img src={vegetableItem.image} alt='packageItemImage' />
                        </div>
                        <div className='info'>
                            <h3 className="grocery-title">{vegetableItem.name}</h3>
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