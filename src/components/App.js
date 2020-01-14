import React, {Component} from 'react';
import {Route, Switch} from "react-router";
import LoginForm from "./LoginForm";
import BlogPostListContainer from "../container/BlogPostListContainer";
import BlogPostContainer from '../container/BlogPostContainer';
import Header from "./Header";
import {requests} from "../agent";

class App extends Component {
    constructor(props) {
        super(props);
        const token = window.localStorage.getItem('jwtToken');

        if (token) {
            requests.setToken(token);
        }
    }

    render() {
        return (
            <div>
                <Header />
                <Switch>
                    <Route path="/login" exact component={LoginForm} />
                    <Route path="/blog-post/:id" exact component={BlogPostContainer}/>
                    <Route path="/" exact component={BlogPostListContainer} />
                </Switch>
            </div>
        )
    }
}

export default App;