import {SubmissionError} from "redux-form";
import {requests} from "../agent";
import {
    COMMENT_ADDED,
    COMMENT_LIST_ERROR,
    COMMENT_LIST_RECEIVED,
    COMMENT_LIST_REQUEST,
    COMMENT_LIST_UNLOAD
} from "./types";
import {parseApiErrors} from "../utils/apiUtils";
import {userLogout} from "./userAction";


export const commentListFetch = (id) => {
    return (dispatch) => {
        dispatch(commentListRequest());
        return requests.get(`/blog_posts/${id}/comments`)
            .then(response => dispatch(commentListReceived(response)))
            .catch(error => dispatch(commentListError(error)));
    }
};

export const commentListRequest = () => ({
    type: COMMENT_LIST_REQUEST
});

export const commentListError = (error) => ({
    type: COMMENT_LIST_ERROR,
    error
});

export const commentListReceived = (data) => ({
    type: COMMENT_LIST_RECEIVED,
    data
});

export const commentListUnload = () => ({
    type: COMMENT_LIST_UNLOAD
});

export const commentAdded = (comment) => ({
    type: COMMENT_ADDED,
    comment
});

export const commentAdd = (comment, blogPostId) => {
    return (dispatch) => {
        return requests.post('/comments', {
            content: comment,
            blogPost: `/api/blog_posts/${blogPostId}`
        }).then(response => dispatch(commentAdded(response)))
            .catch(error => {
                if (401 === error.response.status) {
                    return dispatch(userLogout());
                }
                throw new SubmissionError(parseApiErrors(error));
            });
    }
};