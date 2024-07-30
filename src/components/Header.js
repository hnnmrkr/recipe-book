import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../img/LOGO-2.svg';
import feather from 'feather-icons';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        feather.replace();
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(prev => !prev);
    };

    return (
        <header className="site-header">
            <a href="/"><img src={logo} alt="logo" /></a>
            <nav className="nav-desktop">
                <Link to="/">Home</Link>
                <Link className="add-recipe-btn" to="/add-recipe">Add Recipe</Link>
            </nav>

            <nav className="nav-mobile">
                <span className="hamburger" onClick={toggleMenu}>
                  <i data-feather="menu"></i>
                </span>
                <div className={`mobile-menu ${isMenuOpen ? 'active' : ''}`}>
                    <Link to="/">Home</Link>
                    <Link className="add-recipe-btn" to="/add-recipe">Add Recipe</Link>
                </div>
            </nav>
        </header>
    );
};

export default Header;
