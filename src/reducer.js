import { combineReducers } from "redux";
import {reducer as formReducer} from 'redux-form';
import {routerReducer} from "react-router-redux";
import blogPostList from "./reducers/BlogPostList";
import blogPost from "./reducers/blogPost";
import commentList from "./reducers/commentList";
import auth from "./reducers/auth";
import registration from "./reducers/registration";

export default  combineReducers({
    blogPostList,
    blogPost,
    commentList,
    auth,
    registration,
    router: routerReducer(),
    form: formReducer
});