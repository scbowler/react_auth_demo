import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { userSignIn } from '../actions';
import Input from './input';

class SignIn extends React.Component {
    userSignIn = (formValues) => {
        console.log('Form Values:', formValues);

        this.props.userSignIn(formValues);
    }

    render() {
        const { handleSubmit } = this.props;

        return (
            <div>
                <h1 className="center">Sign In</h1>

                <form onSubmit={handleSubmit(this.userSignIn)}>
                    <div className="row">
                        <Field size="m6 s12" name="email" component={Input} label="Enter your email" />
                        <Field size="m6 s12" name="password" component={Input} label="Choose a password" type="password" />
                    </div>

                    <div className="row right">
                        <button className="btn blue">Sign In!</button>
                    </div>
                </form>
            </div>
        );
    }
}

function validate({ email, password }) {
    const errors = {};

    if (!email) {
        errors.email = 'Please enter your email address';
    }

    if (!password) {
        errors.password = 'Please enter your password';
    }

    return errors;
}

SignIn = reduxForm({
    form: 'sign-in',
    validate: validate
})(SignIn);

export default connect(null, {
    userSignIn: userSignIn
})(SignIn);
