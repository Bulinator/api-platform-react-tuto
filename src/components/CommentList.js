import React, { Component } from 'react';
import timeago from 'timeago.js';
import { Message } from "./common/Message";


class CommentList extends Component {
    render() {
        const { commentList } = this.props;
        console.log(commentList);
        if (null === commentList) {
            return (
                <Message message="No comment yet...be the first!" />
            );
        }

        return (
            <div className="card shadow-sm">
                {commentList.map(comment => {
                    return (
                        <div className="card-body border-bottom" key={comment.id} >
                            <p className="card-text mb-0">
                                <small>{comment.content}</small>
                            </p>
                            <p className="card-text">
                                <small className="text-muted">
                                    {timeago().format(comment.published)} by {comment.author.name}
                                </small>
                            </p>
                        </div>
                    );
                })}
            </div>
        );
    }
}

export default CommentList;