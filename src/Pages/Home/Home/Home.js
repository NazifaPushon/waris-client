import React from 'react';
import Header from '../../Shared/Header/Header';
import Products from '../../Shared/Products/Products';
import Banner from '../Banner/Banner';
import Reviews from '../Reviews/Reviews';

const Home = () => {
    return (
        <div>
            <Header/>
            <Banner/>
            <Products isLimited={true}/>
            <Reviews/>
            <h1>This is home page</h1>
        </div>
    );
};

export default Home;