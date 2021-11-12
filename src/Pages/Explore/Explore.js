import React from 'react';
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';
import Products from '../Shared/Products/Products';

// this is a simple explore page
const Explore = () => {
    return (
        <div>
            <Header/>
            <Products isLimited={false}/>
            <Footer/>
        </div>
    );
};

export default Explore;