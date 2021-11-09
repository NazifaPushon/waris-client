import React from 'react';
import Header from '../Shared/Header/Header';
import Products from '../Shared/Products/Products';

const Explore = () => {
    return (
        <div>
            <Header/>
            <Products isLimited={false}/>
        </div>
    );
};

export default Explore;