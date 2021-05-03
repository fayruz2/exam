import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm border">
            <div className="container">
                <a className="navbar-brand" to="#">Nauka.kg</a>
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <NavLink exact className="nav-link" to="/">Home</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink exact className="nav-link" to="/About">About</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink exact className="nav-link" to="/Biology">Biology</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink exact className="nav-link" to="/Fithika">Fithika</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink exact className="nav-link" to="/Himia">Himia</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink exact className="nav-link" to="/Mathematic">Mathematic</NavLink>
                    </li>

                </ul>
            </div>
            
        </nav>
    );
};

export default Navbar;