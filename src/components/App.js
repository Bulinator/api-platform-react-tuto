import React, {Component} from 'react';
import {Route, Switch} from "react-router";
import {connect} from "react-redux";
import Header from "./Header";
import {requests} from "../agent";
import {userLogout, userProfileFetch, userSetId} from "../actions";
import LoginForm from "./LoginForm";
import BlogPostListContainer from "../container/BlogPostListContainer";
import BlogPostContainer from '../container/BlogPostContainer';
import RegistrationContainer from "../container/RegistrationContainer";
import BlogPostForm from "./BlogPostForm";


const mapStateToProps = state => ({
    ...state.auth
});

const mapDispatchToProps = {
    userProfileFetch,
    userSetId,
    userLogout
};

class App extends Component {
    constructor(props) {
        super(props);
        const token = window.localStorage.getItem('jwtToken');

        if (token) {
            requests.setToken(token);
        }
    }

    componentDidMount() {
        const userId = window.localStorage.getItem('userId');
        const {userProfileFetch, userSetId} = this.props;
        if (userId) {
            userSetId(userId);
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        const { userId, userData, userProfileFetch } = this.props;
        if (prevProps.userId !== userId && userId !== null && userData === null) {
            console.log(`Old uid ${prevProps.userId}`);
            console.log(`New uid ${userId}`);
            userProfileFetch(userId);
        }
    }

    render() {
        const { isAuthenticated, userData, userLogout} = this.props;
        return (
            <div>
                <Header isAuthenticated={isAuthenticated} userData={userData} logout={userLogout} />
                <Switch>
                    <Route path="/login" exact component={LoginForm} />
                    <Route path="/blog-post-form" exact component={BlogPostForm} />
                    <Route path="/blog-post/:id" exact component={BlogPostContainer} />
                    <Route path="/register" component={RegistrationContainer} />
                    <Route path="/:page?" exact component={BlogPostListContainer} />
                </Switch>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);