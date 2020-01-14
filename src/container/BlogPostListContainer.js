import React, {Component} from 'react';
import BlogPostList from "../components/BlogPostList";
import {blogPostListFetch} from "../actions";
import {connect} from "react-redux";
import {Spinner} from "../components/common/Spinner";

const mapStateToProps = state => ({
   ...state.blogPostList
});

const mapDispatchToProps = {
    blogPostListFetch
};

class BlogPostListContainer extends Component {
    componentDidMount() {
        this.props.blogPostListFetch();
    }

    render() {
        const {posts, isFetching} = this.props;

        if (isFetching) {
            return <Spinner />
        }

        return (
           <BlogPostList posts={posts} />
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BlogPostListContainer);