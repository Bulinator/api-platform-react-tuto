import React, {Component} from 'react';
import timeago from 'timeago.js';

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
                    {posts && posts.map(post => (
                        <div key={post.id} className="card mb-3 mt-3 shadow-sm">
                            <div className="card-body">
                                <h4>{post.title}</h4>
                                <p className="card-text bordet-top">
                                    <small className="text-muted">
                                        {timeago().format(post.published)}
                                    </small>
                                </p>
                            </div>
                        </div>
                    ))}
                </ul>
            </div>
        );
    }
}

export default BlogPostList;