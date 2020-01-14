import React, {Component} from 'react';
import {connect} from "react-redux";
import CommentList from "../components/CommentList";
import {commentListFetch, commentListUnload} from "../actions";
import {Spinner} from "../components/common/Spinner";

const mapStateToProps = state => ({
    ...state.commentList
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
        const {isFetching, commentList} = this.props;

        if (isFetching) {
            return <Spinner />
        }

        return (
            <CommentList commentList={commentList} />
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CommentListContainer);