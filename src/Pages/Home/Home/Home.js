import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import Products from '../../Shared/Products/Products';
import AboutUs from '../AboutUs/AboutUs';
import Banner from '../Banner/Banner';
import OfferBanner from '../OfferBanner/OfferBanner';
import Reviews from '../Reviews/Reviews';

const Home = () => {
    return (
        <div>
            <Header/>
            <Banner/>
            <Products isLimited={true}/>
            <hr />
            <Reviews/>
            <OfferBanner/>
            <AboutUs/>
            <Footer/>
        </div>
    );
};

export default Home;