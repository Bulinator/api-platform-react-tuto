import React, {Component} from 'react';
import {Route, Switch} from "react-router";
import LoginForm from "./LoginForm";
import BlogPostList from "./BlogPostList";

class App extends Component {
    render() {
        return (
            <div>
                Hello!
                <Switch>
                    <Route path="/login" component={LoginForm} />
                    <Route path="/" component={BlogPostList} />
                </Switch>
            </div>
        )
    }
}

export default App;