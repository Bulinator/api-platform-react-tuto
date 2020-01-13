import React, {Component} from 'react';

class BlogPostList extends Component {
    render() {
        const {posts, isFetching} = this.props;

        if (isFetching) {
            return(
                <div><i className="fas fa-spinner fa-spin" /></div>
            );
        }

        if (null === posts || !posts.length) {
            return(
                <div>No article has been posted</div>
            );
        }

        return (
            <div>
                <ul>
                    {posts && posts.map(post => (<li key={post.id}>{post.title}</li>))}
                </ul>
            </div>
        );
    }
}

export default BlogPostList;