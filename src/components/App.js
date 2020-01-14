import React, {Component} from 'react';
import {Route, Switch} from "react-router";
import {connect} from "react-redux";
import LoginForm from "./LoginForm";
import BlogPostListContainer from "../container/BlogPostListContainer";
import BlogPostContainer from '../container/BlogPostContainer';
import Header from "./Header";
import {requests} from "../agent";


const mapStateToProps = state => ({
    ...state.auth
});

class App extends Component {
    constructor(props) {
        super(props);
        const token = window.localStorage.getItem('jwtToken');

        if (token) {
            requests.setToken(token);
        }
    }

    render() {
        const { isAuthenticated } = this.props;
        return (
            <div>
                <Header isAuthenticated={isAuthenticated} />
                <Switch>
                    <Route path="/login" exact component={LoginForm} />
                    <Route path="/blog-post/:id" exact component={BlogPostContainer}/>
                    <Route path="/" exact component={BlogPostListContainer} />
                </Switch>
            </div>
        )
    }
}

export default connect(mapStateToProps, null)(App);