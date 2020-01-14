import React, {Component} from 'react';
import timeago from 'timeago.js';
import { Link } from "react-router-dom";
import { Message } from './common/Message';


class BlogPostList extends Component {
    render() {
        const {posts} = this.props;

        if (null === posts || 0 === posts.length) {
            return(
                <Message message="No article has been posted" />
            );
        }

        return (
            <div>
                <ul>
                    {posts && posts.map(post => (
                        <div key={post.id} className="card mb-3 mt-3 shadow-sm">
                            <div className="card-body">
                                <h4>
                                    <Link to={`/blog-post/${post.id}`}>
                                        {post.title}
                                    </Link>
                                </h4>
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