import React, {Component} from 'react';
import {Link} from "react-router-dom";
import {Spinner} from "./common/Spinner";

class Header extends Component {
    renderUser() {
        const {userData} = this.props;

        if (null === userData) {
            return <i className="fas fa-spinner fa-spin" />;
        }

        return (<span>Hello {userData.name}</span>)
    }

    render(){
        const { isAuthenticated } = this.props;
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Link to="/" className="navbar-brand">
                    React Blog
                </Link>

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