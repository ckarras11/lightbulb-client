import React from 'react';
import { NavLink } from 'react-router-dom';
import './nav.css'

const Nav = () => {
    return (
        <div>
            <nav>
                <NavLink activeClassName="active" to='/login'>Login</NavLink>
                <NavLink activeClassName="active" to='/register'>Register</NavLink>
                <NavLink activeClassName="active" to='/home'>Home</NavLink>
                <NavLink activeClassName="active" to='/browse'>Browse</NavLink>
            </nav>
        </div>
    );
};

export default Nav;