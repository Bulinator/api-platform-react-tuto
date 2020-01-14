import React, {Component} from 'react';
import {Link} from "react-router-dom";

class Header extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Link to="/" className="navbar-brand">
                    React Blog
                </Link>

                <span className="navbar-text">
                    <Link to="/login" className="navbar-brand">
                        Sign-in
                    </Link>
                </span>
            </nav>
        );
    }
}

export default Header;