import React, {Component} from 'react';
import {Field, reduxForm} from 'redux-form';
import { connect } from 'react-redux';
import {renderField} from "../form";
import {commentAdd} from "../actions";

// const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

const mapDispatchToProps = {
    commentAdd
};

class CommentForm extends Component {
    onSubmit(values) {
        const { commentAdd, blogPostId } = this.props;
        // reset() is from redux form to reset the form
        return commentAdd(values.content, blogPostId).then(() => this.props.reset());
    }

    render() {
        const {handleSubmit, submitting} = this.props
        return (
            <div className="card mb-3 mt-3 shadow-sm">
                <div className="card-body">
                    <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                        <Field name="content" label="Type your comment" type="textarea" component={renderField} />
                        <button type="submit" className="btn btn-sm btn-primary btn-clock" disabled={submitting}>ADD COMMENT</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default reduxForm({
    form: 'CommentForm'
})(connect(null, mapDispatchToProps)(CommentForm));