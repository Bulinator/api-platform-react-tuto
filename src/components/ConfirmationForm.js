import React, {Component} from 'react';
import { Field, reduxForm } from "redux-form";
import { connect } from 'react-redux';
import {renderField} from "../form";
import {userConfirm} from "../actions";

const mapDispatchToProps = {
    userConfirm
};

class ConfirmationForm extends Component {
    onSubmit(values) {
        // console.log(...Object.values(values));
        return this.props.userConfirm(values.confirmationToken)
            .then(() => {
                this.props.reset();
            });
    }

    render() {
        // submitting is props from redux-form
        const { handleSubmit, submitting } = this.props;

        return (
            <div className="card mt-3 mb-6 shadow-sm">
                <div className="card-body">
                    <p className="card-text">
                        Please confirm your account with the token you received
                        in your email
                    </p>
                    <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                        <Field name="confirmationToken" label="Confirmation token:" type="text" component={renderField} />

                        <button type="submit" className="btn btn-primary btn-big btn-block" disabled={submitting}>
                            Confirm your account
                        </button>
                    </form>
                </div>
            </div>
        );
    }
}

export default reduxForm({
    form: 'ConfirmationForm'
})(connect(null, mapDispatchToProps)(ConfirmationForm));