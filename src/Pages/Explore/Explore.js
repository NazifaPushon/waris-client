import React from 'react';
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';
import Products from '../Shared/Products/Products';

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