import React from 'react';
import offerLogo from '../images/offerlogo.png';
import grocery from '../images/grocery logo.png';
import fashionLogo from '../images/fashion logo.png';
import mobileLogo from '../images/mobile logo.png';
import electronicsrLogo from '../images/electronics logo.png';
import '../styles/HomeScreen.css';

function HomeScreen() {
    return (

        <div className='container'>
            <div className='containers'>
                <img src={offerLogo} alt="offerLogo" />
                <p className='heading-primary'>Top offers</p>
            </div>
            <div className='containers'>
                <img src={grocery} alt="grocery" />
                <p className='heading-primary'>Grocery</p>
            </div>
            <div className='containers'>
                <img src={fashionLogo} alt="fashionLogo" />
                <p className='heading-primary'>Fashions</p>
            </div>
            <div className='containers'>
                <img src={mobileLogo} alt="mobileLogo" />
                <p className='heading-primary'>Mobiles</p>
            </div>
            <div className='containers'>
                <img src={electronicsrLogo} alt="electronicsrLogo" />
                <p className='heading-primary'>Electronics</p>
            </div>
        </div>

    );
}

export default HomeScreen;