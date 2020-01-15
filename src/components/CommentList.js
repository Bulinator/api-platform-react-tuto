import React, { Component } from 'react';
import {CSSTransition, TransitionGroup} from 'react-transition-group';
import timeago from 'timeago.js';
import { Message } from "./common/Message";

import "./CommentList.css";

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
                <TransitionGroup>
                    {commentList.map(comment => {
                        return (
                            <CSSTransition key={comment.id} timeout={500} classNames="fade">
                                <div className="card-body border-bottom">
                                    <p className="card-text mb-0">
                                        <small>{comment.content}</small>
                                    </p>
                                    <p className="card-text">
                                        <small className="text-muted">
                                            {timeago().format(comment.published)} by {comment.author.name}
                                        </small>
                                    </p>
                                </div>
                            </CSSTransition>
                        );
                    })}
                </TransitionGroup>
            </div>
        );
    }
}

export default CommentList;