import React, {Component} from 'react';
import {connect} from "react-redux";
import BlogPost from "../components/BlogPost";
import {blogPostFetch, blogPostUnload} from "../actions";
import {Spinner} from "../components/common/Spinner";

const mapStateToProps = state => ({
    ...state.blogPost
});

const mapDispatchToProps = {
    blogPostFetch,
    blogPostUnload
};

class BlogPostContainer extends Component {
    componentDidMount() {
        this.props.blogPostFetch(this.props.match.params.id);
    }

    componentWillUnmount() {
        this.props.blogPostUnload();
    }

    render() {
        const {isFetching, post} = this.props;

        if (isFetching) {
            return <Spinner />
        }

        return (
            <BlogPost post={post} />
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BlogPostContainer);