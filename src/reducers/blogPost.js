import {
    BLOG_POST_ERROR,
    BLOG_POST_RECEIVED,
    BLOG_POST_REQUEST,
    BLOG_POST_UNLOAD
} from "../actions/types";

export default(state = {post: null, isFetching: false}, action) => {
    switch (action.type) {
        case BLOG_POST_REQUEST:
            return {
                ...state,
                isFetching: true
            };
        case BLOG_POST_RECEIVED:
            //console.log(state);
            state = {
                ...state,
                post: action.data,
                isFetching: false
            };
            //console.log(state);
            return state;
        case BLOG_POST_ERROR:
            return {
                ...state,
                isFetching: false
            };
        case BLOG_POST_UNLOAD:
            return {
                ...state,
                isFetching: false,
                post: null
            };
        default:
            return state;
    }
}