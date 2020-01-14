import React, {Component} from 'react';
import {connect} from "react-redux";
import CommentList from "../components/CommentList";
import {commentListFetch, commentListUnload} from "../actions";
import {Spinner} from "../components/common/Spinner";
import CommentForm from "../components/CommentForm";

const mapStateToProps = state => ({
    ...state.commentList,
    isAuthenticated: state.auth.isAuthenticated
});

const mapDispatchToProps = {
    commentListFetch,
    commentListUnload
};

class CommentListContainer extends Component {
    componentDidMount() {
        this.props.commentListFetch(this.props.blogPostId);
    }

    componentWillUnmount() {
        this.props.commentListUnload();
    }

    render() {
        const {isFetching, commentList, isAuthenticated} = this.props;

        if (isFetching) {
            return <Spinner />
        }

        return (
            <div>
                <CommentList commentList={commentList} />
                {isAuthenticated && <CommentForm />}
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CommentListContainer);