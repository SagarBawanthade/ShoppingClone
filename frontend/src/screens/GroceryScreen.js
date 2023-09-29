import React from 'react';
import '../styles/GroceryScreen.css';
import { NavLink } from 'react-bootstrap';
import { useState } from 'react';
import Fruits from '../datascreen/Fruits';
import Vegetables from '../datascreen/Vegetables.js';
import Packages from '../datascreen/Packages';
import { Helmet } from 'react-helmet-async';

function GroceryScreen() {

    const [activeComponent, setActiveComponent] = useState('packages');

    const handleClick = (component) => {
        setActiveComponent(component);
    }

    let componentToRender = <Packages />;
    if (activeComponent === 'fruits') {
        componentToRender = <Fruits />
    } else if (activeComponent === 'vegetables') {
        componentToRender = <Vegetables />
    }

    return (
        <>
            <Helmet>
                <title>GroceryScreen</title>
            </Helmet>
            <div className='container'>
                <h1>Groceries you want...</h1>
                <br />
                <div>
                    <button className="btn" onClick={() => handleClick('packages')}>
                        <NavLink to='/packages' >Packages</NavLink>
                    </button>
                    <button className="btn" onClick={() => handleClick('fruits')}>
                        <NavLink to='/fruits' >Fruits</NavLink>
                    </button>

                    <button className="btn" onClick={() => handleClick('vegetables')}>
                        <NavLink to='/vegetables' >Vegetables</NavLink>
                    </button>
                </div>
                <br />
                {componentToRender}



            </div>
        </>
    )
}

export default GroceryScreen;