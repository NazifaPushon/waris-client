import React from 'react';
import Header from '../../Shared/Header/Header';
import Products from '../../Shared/Products/Products';
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
        </div>
    );
};

export default Home;