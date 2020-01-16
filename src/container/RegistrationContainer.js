import React, {Component} from 'react';
import { connect } from "react-redux";
import RegisterForm from "../components/RegisterForm";
import ConfirmationForm from "../components/ConfirmationForm";
import {userRegisterCompleted} from "../actions";

const mapStateToProps = state => ({
   ...state.registration
});

const mapDispatchToProps = {
    userRegisterCompleted
};

class RegistrationContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {counter: 10};
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        const { confirmationSuccess, history, userRegisterCompleted } = this.props;
        if (prevProps.confirmationSuccess !== confirmationSuccess && confirmationSuccess) {
            this.timer = setInterval(
                () => {
                    console.log(this.state.counter);
                    this.setState(prevState => ({ counter: prevState.counter - 1}))
                }, 1000
            );
        }

        if (prevState.counter !== this.state.counter && this.state.counter <= 0) {
            userRegisterCompleted();
            history.push('/');
        }
    }

    componentWillUnmount() {
        this.props.userRegisterCompleted();

        if (this.timer) {
            clearInterval(this.timer);
        }
    }

    render() {
        const { registrationSuccess, confirmationSuccess } = this.props;

        if (!registrationSuccess) {
            return <RegisterForm />;
        }

        if (!confirmationSuccess) {
            return <ConfirmationForm />;
        }

        return (
            <div className="card mt-3 mb-6 shadow-sm">
                <div className="card-body">
                    <h3>Congratulations!!</h3>
                    <p className="card-text">
                        You have confirmed your account.
                        You will be redirected to home page in { this.state.counter } seconds.
                    </p>
                </div>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RegistrationContainer);