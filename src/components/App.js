import React, {Component} from 'react';
import {Route, Switch} from "react-router";
import LoginForm from "./LoginForm";
import BlogPostListContainer from "../container/BlogPostListContainer";

class App extends Component {
    render() {
        return (
            <div>
                Hello!
                <Switch>
                    <Route path="/login" component={LoginForm} />
                    <Route path="/" component={BlogPostListContainer} />
                </Switch>
            </div>
        )
    }
}

export default App;