import React, {Component} from 'react';

class BlogPostList extends Component {
    constructor(props) {
        super(props);
        console.log(props);
    }

    render() {
        const {posts} = this.props;
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