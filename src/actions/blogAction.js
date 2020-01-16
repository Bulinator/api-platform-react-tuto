import {
    BLOG_POST_LIST_ERROR,
    BLOG_POST_LIST_RECEIVED,
    BLOG_POST_LIST_REQUEST,
    BLOG_POST_LIST_ADD,
    BLOG_POST_RECEIVED,
    BLOG_POST_REQUEST,
    BLOG_POST_ERROR,
    BLOG_POST_UNLOAD,
    BLOG_POST_LIST_SET_PAGE,
    BLOG_POST_FORM_UNLOAD
} from "./types";
import {requests} from "../agent";
import {userLogout} from "./userAction";
import {SubmissionError} from "redux-form";
import {parseApiErrors} from "../utils/apiUtils";
import {commentAdded} from "./commentAction";

export const blogPostListRequest = () => ({
    type: BLOG_POST_LIST_REQUEST
});

export const blogPostListError = (error) => ({
    type: BLOG_POST_LIST_ERROR,
    error
});

export const blogPostListReceived = (data) => ({
    type: BLOG_POST_LIST_RECEIVED,
    data
});

export const blogPostListSetPage = (page) => ({
    type: BLOG_POST_LIST_SET_PAGE,
    page
});

// export const blogPostAdd = () => ({
//     type: BLOG_POST_LIST_ADD,
//     data: {
//         id: Math.floor(Math.random() * 100 + 3),
//         title: 'A newly added blog post'
//     }
// });

export const blogPostListFetch = (page = 1) => {
    return (dispatch) => {
        dispatch(blogPostListRequest());
        requests.get(`/blog_posts?_page=${page}`)
            .then(response => dispatch(blogPostListReceived(response)))
            .catch(error => dispatch(blogPostListError(error)));
    }
};

export const blogPostFetch = (id) => {
    return (dispatch) => {
       dispatch(blogPostRequest());
        return requests.get(`/blog_posts/${id}`)
            .then(response => dispatch(blogPostReceived(response)))
            .catch(error => dispatch(blogPostError(error)));
    }
};

export const blogPostRequest = () => ({
    type: BLOG_POST_REQUEST
});

export const blogPostError = (error) => ({
    type: BLOG_POST_ERROR,
    error
});

export const blogPostReceived = (data) => ({
    type: BLOG_POST_RECEIVED,
    data
});

export const blogPostUnload = () => ({
   type: BLOG_POST_UNLOAD
});

export const blogPostFormUnload = () => ({
    type: BLOG_POST_FORM_UNLOAD
});

export const blogPostAdd = (title, content) => {
    return (dispatch) => {
        return requests.post(
            '/blog_posts',
            {
                title,
                content,
                slug: title && title.replace(/ /g, "-").toLowerCase()
            }
        ).catch((error) => {
            if (401 === error.response.status) {
                return dispatch(userLogout());
            } else if (403 === error.response.status) {
                throw new SubmissionError({
                    _error: 'You do not have rights to publish blog posts!'
                });
            }
            throw new SubmissionError(parseApiErrors(error));
        })
    }
};
