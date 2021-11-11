import React from 'react';
import { NavLink } from 'react-router-dom';
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';
import './notFound.css';
const NotFound = () => {
    return (
        <div>
            <Header/>
            <div className="text-center not-found text-light py-5">
                <h1 className='display-1 fw-bold'>Page not found</h1>
                <br />   
                <div className="text-center"><button className="button"><NavLink to='/'>Go Back</NavLink></button></div>
            </div>
        <Footer/>
        </div>
    );
};

export default NotFound;