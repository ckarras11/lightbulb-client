import React from 'react';
import Logo from './logo';
import { Link } from 'react-router-dom';
import './landing.css';

const Landing = () => {
    return (
        <div className='landing'>
            <Logo />
            <h3>Idea Hub</h3>
        </div>
    );
};

export default Landing;