import React, {Component} from 'react';
import { Field, reduxForm } from "redux-form";
import { connect } from 'react-redux';
import { Redirect } from "react-router";
import {canWriteBlogPost} from "../utils/apiUtils";
import {renderField} from "../form";
import {blogPostAdd, blogPostFormUnload, imageDelete} from "../actions";
import ImageUpload from "./common/ImageUpload";
import {ImageBrowser} from "./common/ImageBrowser";


const mapStateToProps = state => ({
    userData: state.auth.userData,
    ...state.blogPostForm
});

const mapDispatchToProps = {
    blogPostAdd,
    blogPostFormUnload,
    imageDelete
};


class BlogPostForm extends Component {
    onSubmit(values) {
        const { blogPostAdd, reset, history, images } = this.props;
        return blogPostAdd(values.title, values.content, images)
            .then(() => {
               reset();
               history.push('/');
            });
    }

    componentWillUnmount() {
        this.props.blogPostFormUnload();
    }

    render() {
        if (!canWriteBlogPost(this.props.userData)) {
            return <Redirect to="/login" />
        }

        const {submitting, handleSubmit, error, images, imageReqInProgress, imageDelete} = this.props;

        return (
            <div className="card mt-3 mb-6 shadow-sm">
                <div className="card-body">
                    {error &&
                        <div className="alert alert-danger">{error}</div>
                    }
                    <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                        <Field name="title" label="Title:" type="text" component={renderField}/>
                        <Field name="content" label="Content:" type="textarea" component={renderField}/>

                        <ImageUpload />
                        <ImageBrowser
                            images={images}
                            deleteHandler={imageDelete}
                            isLocked={{imageReqInProgress}}
                        />

                        <button
                            type="submit"
                            className="btn btn-primary btn-big btn-block"
                            disabled={submitting || imageReqInProgress}
                        >
                            Publish it now!
                        </button>
                    </form>
                </div>
            </div>
        );
    }
}

export default reduxForm({
    form: 'BlogPostForm'
})(connect(mapStateToProps, mapDispatchToProps)(BlogPostForm))