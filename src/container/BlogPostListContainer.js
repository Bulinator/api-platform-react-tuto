import React, {Component} from 'react';
import BlogPostList from "../components/BlogPostList";
import {blogPostListFetch} from "../actions";
import {connect} from "react-redux";

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
        return (
           <BlogPostList posts={posts} isFetching={isFetching}/>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BlogPostListContainer);