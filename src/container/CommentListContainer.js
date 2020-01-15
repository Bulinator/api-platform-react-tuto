import React, {Component} from 'react';
import {connect} from "react-redux";
import CommentList from "../components/CommentList";
import {commentListFetch, commentListUnload} from "../actions";
import {Spinner} from "../components/common/Spinner";
import CommentForm from "../components/CommentForm";
import {LoadMore} from "../components/common/LoadMore";

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

    onLoadMoreClick() {
        const { blogPostId, currentPage, commentListFetch } = this.props;
        commentListFetch(blogPostId, currentPage);
    }

    render() {
        const {isFetching, commentList, isAuthenticated, blogPostId, currentPage, pageCount} = this.props;
        const showLoadMore = pageCount > 1 && currentPage <= pageCount;
        if (isFetching) {
            return <Spinner />
        }

        return (
            <div>
                <CommentList commentList={commentList} />
                {showLoadMore &&
                    <LoadMore label="Load more comments..." onClick={this.onLoadMoreClick.bind(this)} disabled={isFetching} />
                }
                {isAuthenticated && <CommentForm blogPostId={blogPostId}/>}
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CommentListContainer);