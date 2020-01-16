import React, {Component} from "react";
import { Field, reduxForm} from "redux-form";
import { connect } from "react-redux";
import {renderField} from "../form";
import {userRegister} from "../actions";

const mapDispatchToProps = {
    userRegister
}

class RegisterForm extends Component {
    constructor(props) {
        super(props);
        this.state = { termsAccepted: false };
    }

    onSubmit(values) {
        // console.log(...Object.values(values));
        return this.props.userRegister(...Object.values(values))
            .then(() => {
                this.props.reset();
                this.props.history.push('/');
            });
    }

    // handle checkbox state
    onTermsAcceptedClick(e) {
        this.setState(prevState => ({termsAccepted: !prevState.termsAccepted}))
    }

    render() {
        // submitting is props from redux-form
        const { handleSubmit, submitting } = this.props;

        return (
            <div className="card mt-3 mb-6 shadow-sm">
                <div className="card-body">
                    <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                        <Field name="username" label="Username:" type="text" component={renderField} />
                        <Field name="password" label="Password:" type="password" component={renderField} />
                        <Field name="retypedPassword" label="Confirm password:" type="password" component={renderField} />
                        <Field name="email" label="E-mail:" type="text" component={renderField} />
                        <Field name="name" label="Full name:" type="text" component={renderField} />

                        <div className="form-check form-group">
                            <input className="form-check-input" type="checkbox" value={false} onClick={() => this.onTermsAcceptedClick(this)} />
                            <label className="form-check-label">I agree to the terms and conditions</label>
                        </div>

                        <button type="submit" className="btn btn-primary btn-big btn-block" disabled={submitting}>
                            Register
                        </button>
                    </form>
                </div>
            </div>
        );
    }
}

export default reduxForm({
    form: 'RegisterForm'
})(connect(null, mapDispatchToProps)(RegisterForm));