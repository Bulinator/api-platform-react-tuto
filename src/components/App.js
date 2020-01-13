import React, {Component} from 'react';
import {Route, Switch} from "react-router";
import LoginForm from "./LoginForm";
import BlogPostListContainer from "../container/BlogPostListContainer";
import BlogPostContainer from '../container/BlogPostContainer';
import Header from "./Header";

class App extends Component {
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