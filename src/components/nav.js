import React from 'react';
import { Link } from 'react-router-dom';
import './nav.css'

const Nav = () => {
    return (
        <div>
            <nav>
                <Link to='/login'>Login</Link>
                <Link to='/register'>Register</Link>
                <Link to='/home'>Home</Link>
                <Link to='/browse'>Browse</Link>
            </nav>
        </div>
    );
};

export default Nav;