import React from 'react';
import offerLogo from '../images/offerlogo.png';
import grocery from '../images/grocery logo.png';
import fashionLogo from '../images/fashion logo.png';
import mobileLogo from '../images/mobile logo.png';
import electronicsrLogo from '../images/electronics logo.png';
import '../styles/HomeScreen.css';
import Homescreentemplate from '../images/Homescreentemplate.jpg';

function HomeScreen() {
    return (
        <>

            <div className='container'>
                <div className='containers'>
                    <a href="google.com" ><img src={offerLogo} alt="offerLogo" /></a>
                    <p className='heading-primary'>Top offers</p>
                </div>
                <div className='containers'>
                    <a href="google.com" ><img src={grocery} alt="grocery" /></a>
                    <p className='heading-primary'>Grocery</p>
                </div>
                <div className='containers'>
                    <a href="google.com" ><img src={fashionLogo} alt="fashionLogo" /></a>
                    <p className='heading-primary'>Fashions</p>
                </div>
                <div className='containers'>
                    <a href="google.com" ><img src={mobileLogo} alt="mobileLogo" /></a>
                    <p className='heading-primary'>Mobiles</p>
                </div>
                <div className='containers'>
                    <a href="google.com" ><img src={electronicsrLogo} alt="electronicsrLogo" /></a>
                    <p className='heading-primary'>Electronics</p>
                </div>
            </div>
            <div className='container2'>
                <img src={Homescreentemplate} alt="Homescreentemplate" />

            </div>

        </>
    );
}

export default HomeScreen;