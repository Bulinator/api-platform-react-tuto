import React, {Component} from 'react';
import timeago from 'timeago.js';

class BlogPost extends Component {
    render() {
        const {post, isFetching} = this.props;

        if (isFetching) {
            return(
                <div><i className="fas fa-spinner fa-spin" /></div>
            );
        }

        if (null === post) {
            return(
                <div>No article match your request!</div>
            );
        }

        return (
            <div className="card mb-3 mt-3 shadow-sm">
                <div className="card-body">
                    <h4>{post.title}</h4>
                    <p className="card-text">{post.content}</p>
                    <p className="card-text border-top">
                        <small className="text-muted">
                            {timeago().format(post.published)} by {post.author.username}
                        </small>
                    </p>
                </div>

            </div>
        );
    }
}

export default BlogPost;