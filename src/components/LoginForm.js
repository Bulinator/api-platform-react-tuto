import React, {Component} from 'react';
import {Field, reduxForm} from "redux-form";
import {connect} from "react-redux";
import {renderField} from "../form";
import {userLoginAttempt} from '../actions';

const mapStateToProps = state => ({
   ...state.auth
});

const mapDispatchToProps = {
    userLoginAttempt
};

class LoginForm extends Component {
    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.token !== this.props.token) {
            console.log(prevProps);
            console.log(this.props);
            this.props.history.push('/');
        }
    }

    onSubmit(values) {
        return this.props.userLoginAttempt(
             values.username, values.password
        );
    }

    render() {
        const { handleSubmit } = this.props;

        return (
            <div className="text-center">
                <form className="mt-4" onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                    <Field name="username"  label="Username" type="text" component={renderField} />
                    <Field name="password" label="Password" type="password" component={renderField} />
                    <button type="submit" className="btn btn-primary btn-md btn-clock">Log in</button>
                </form>
            </div>
        );
    }
}

export default reduxForm({
    form: 'LoginForm'
})(connect(mapStateToProps, mapDispatchToProps)(LoginForm));