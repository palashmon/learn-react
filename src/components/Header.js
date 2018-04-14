import React from 'react';
import { Link } from 'react-router-dom';

// The Header creates links that can be used to navigate
// between routes.
const Header = () => (
    <header id="banner" className="body">
        <nav>
            <ul>
                <li className="active">
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/roster">Roster</Link>
                </li>
                <li>
                    <Link to="/schedule">Schedule</Link>
                </li>
            </ul>
        </nav>
    </header>
);

export default Header;
