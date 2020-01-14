import { combineReducers } from "redux";
import {reducer as formReducer} from 'redux-form';
import blogPostList from "./reducers/BlogPostList";
import blogPost from "./reducers/blogPost";
import commentList from "./reducers/commentList";
import auth from "./reducers/auth";

export default  combineReducers({
    blogPostList,
    blogPost,
    commentList,
    auth,
    form: formReducer
});