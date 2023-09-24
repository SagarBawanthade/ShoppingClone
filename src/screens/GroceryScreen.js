import React from 'react';
import '../styles/GroceryScreen.css';
import groceryData from '../datasets/grocerydata.js';

function GroceryScreen() {
    return (
        <>
            <div className='container'>
                <h1>Groceries you want...</h1>
                <br />
                <h6>Pakages</h6><br />
                <div className='grocery-list'>
                    {groceryData.packages.map((packageItem) => (
                        <div key={packageItem.slug} className='grocery-card' >
                            <div className="grocery-image">
                                <img src={packageItem.image} alt='packageItemImage' />
                            </div>
                            <div className='info'>
                                <h3 className="grocery-title">{packageItem.name}</h3>
                                <p className="grocery-countInStock">{packageItem.countInStock}</p>
                                <p className="grocery-description">{packageItem.description}</p>
                            </div>
                            <div>
                                <strong><p className="grocery-price">{packageItem.price}</p></strong>
                                <p className="grocery-rating">{packageItem.rating}</p>
                            </div>
                        </div>
                    ))}
                </div>


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
                            <div>
                                <strong><p className="grocery-price">{fruitItem.price}</p></strong>
                                <p className="grocery-rating">{fruitItem.rating}</p>
                            </div>
                        </div>
                    ))}

                </div>


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
                            <div>
                                <strong><p className="grocery-price">{vegetableItem.price}</p></strong>
                                <p className="grocery-rating">{vegetableItem.rating}</p>
                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </>
    )
}

export default GroceryScreen;