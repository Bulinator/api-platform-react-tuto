import React, {Component} from 'react';
import {connect} from "react-redux";
import BlogPostList from "../components/BlogPostList";
import {blogPostListFetch, blogPostListSetPage} from "../actions";
import {Spinner} from "../components/common/Spinner";
import {Paginator} from "../components/common/Paginator";

const mapStateToProps = state => ({
   ...state.blogPostList
});

const mapDispatchToProps = {
    blogPostListFetch,
    blogPostListSetPage
};

class BlogPostListContainer extends Component {
    componentDidMount() {
        this.props.blogPostListFetch();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        const { currentPage, blogPostListFetch } = this.props;
        if (prevProps.currentPage !== currentPage) {
            blogPostListFetch(currentPage);
        }
    }

    render() {
        const {posts, isFetching, blogPostListSetPage, currentPage} = this.props;

        if (isFetching) {
            return <Spinner />
        }
console.log('blogpost list cpage', currentPage);
        return (
            <div>
                <BlogPostList posts={posts} />
                <Paginator currentPage={currentPage} pageCount={10} setPage={blogPostListSetPage} />
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BlogPostListContainer);