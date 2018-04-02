import React, { Component } from 'react';
import '../App.css';

class Header extends Component {
    render() {
        return (
            <header id="banner" className="body">
                <h1>
                    <a href="#">
                        Learn React<br />
                        <strong>Simplest case example of ReactJS</strong>
                    </a>
                </h1>

                <nav>
                    <ul>
                        <li className="active">
                            <a href="#">Home</a>
                        </li>
                        <li>
                            <a href="#">Portfolio</a>
                        </li>

                        <li>
                            <a href="#">Blog</a>
                        </li>
                        <li>
                            <a href="#">Contact</a>
                        </li>
                    </ul>
                </nav>
            </header>
        );
    }
}

export default Header;
