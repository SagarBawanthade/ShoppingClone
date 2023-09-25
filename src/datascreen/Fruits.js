import React from 'react';
import '../styles/GroceryScreen.css';
import groceryData from '../datasets/grocerydata.js';
import Rating from '../components/Rating.js';

function Fruits() {

    const handleClick = () => {
        console.log("click")
    }

    return (
        <>
            <h6>Fruits</h6><br />
            <div className='grocery-list'>
                {groceryData.fruits.map((fruitItem) => (
                    <div key={fruitItem.slug} className='grocery-card'>
                        <div className="grocery-image">
                            <img src={fruitItem.image} alt='packageItemImage' />
                        </div>
                        <div className='info'>
                            <h3 className="grocery-title">{fruitItem.name}</h3>
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