import { combineReducers } from "redux";
import blogPostList from "./reducers/BlogPostList";
import blogPost from "./reducers/blogPost";

export default  combineReducers({
    blogPostList,
    blogPost
});