import React from 'react';
import offerLogo from '../images/offerlogo.png';
import grocery from '../images/grocery logo.png';
import fashionLogo from '../images/fashion logo.png';
import mobileLogo from '../images/mobile logo.png';
import { NavLink } from 'react-router-dom';
import electronicsrLogo from '../images/electronics logo.png';
import '../styles/HomeScreen.css';
import Homescreentemplate from '../images/Homescreentemplate.jpg';
import products from '../datasets/products.js';
import { Helmet } from 'react-helmet-async';

function HomeScreen() {
    return (
        <>
            <Helmet>
                <title>HomeScreen</title>
            </Helmet>
            <div className='container'>
                <div className='containers'>
                    <NavLink to='/' ><img src={offerLogo} alt="offerLogo" /></NavLink>
                    <p className='heading-primary'>Top offers</p>
                </div>
                <div className='containers'>
                    <NavLink to="/groceryscreen" ><img src={grocery} alt="grocery" /></NavLink>
                    <p className='heading-primary'>Grocery</p>
                </div>
                <div className='containers'>
                    <NavLink to="/fashionsscreen" ><img src={fashionLogo} alt="fashionLogo" /></NavLink>
                    <p className='heading-primary'>Fashions</p>
                </div>
                <div className='containers'>
                    <NavLink to="/mobilesscreen" ><img src={mobileLogo} alt="mobileLogo" /></NavLink>
                    <p className='heading-primary'>Mobiles</p>
                </div>
                <div className='containers'>
                    <NavLink to="/electronicsscreen" ><img src={electronicsrLogo} alt="electronicsrLogo" /></NavLink>
                    <p className='heading-primary'>Electronics</p>
                </div>
            </div>
            <div className='container2'>
                <img src={Homescreentemplate} alt="Homescreentemplate" />

            </div>

            <div className='product-list'>
                {products.map((product) => (
                    <div key={product} className='product'>
                        <a href="google.com" ><img src={product.image} alt='productImage' /></a>
                        <h2>{product.name}</h2>
                        <p>Starting from {product.price} </p>
                    </div>
                ))}

            </div>

        </>
    );
}

export default HomeScreen;