import React from 'react';
import Header from '../../Shared/Header/Header';
import Products from '../../Shared/Products/Products';
import Banner from '../Banner/Banner';

const Home = () => {
    return (
        <div>
            <Header/>
            <Banner/>
            <Products isLimited={true}/>
            <h1>This is home page</h1>
        </div>
    );
};

export default Home;