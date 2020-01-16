import React, {Component} from 'react';
import {Link} from "react-router-dom";

class Header extends Component {
    renderUser() {
        const {userData, logout} = this.props;

        if (null === userData) {
            return <i className="fas fa-spinner fa-spin" />;
        }

        return (
            <span>
                Hello {userData.name}
                <button className="btn btn-link btn-sm" onClick={logout}>Logout</button>
            </span>
        );
    }

    render(){
        const { isAuthenticated } = this.props;
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Link to="/" className="navbar-brand">
                    React Blog
                </Link>
                <ul className="navbar-nav mr-auto">
                    {!isAuthenticated &&
                        <li className="nav-item">
                            <Link to="/register" className="nav-link">Register</Link>
                        </li>
                    }

                    {isAuthenticated &&
                        <li className="nav-item">
                            <Link to="/blog-post-form" className="nav-link">
                                Create new post
                            </Link>
                        </li>
                    }
                </ul>
                <span className="navbar-text">
                    {isAuthenticated ?
                        this.renderUser() :
                        <Link to="/login" className="navbar-brand">Sign-in</Link>
                    }
                </span>
            </nav>
        );
    };
}

export default Header;