import React, {Component} from 'react';

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
            <div>
                title: {post.title}
            </div>
        );
    }
}

export default BlogPost;