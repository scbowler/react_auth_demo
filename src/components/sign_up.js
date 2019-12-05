import React from 'react';
import { Field, reduxForm } from 'redux-form';
import Input from './input';

class SignUp extends React.Component {
    userSignUp(formValues){
        console.log('Form Values:', formValues);
    }

    render(){
        const { handleSubmit } = this.props;

        return (
            <div>
                <h1 className="center">Sign Up</h1>

                <form onSubmit={handleSubmit(this.userSignUp)}>
                    <div className="row">
                        <Field size="m6 s12" name="name" component={Input} label="Enter your name" />

                        <Field size="m6 s12"  name="email" component={Input} label="Enter your email" />
                    </div>
                    <div className="row">
                        <Field size="m6 s12" name="password" component={Input} label="Choose a password" type="password" />

                        <Field size="m6 s12" name="confirmPassword" component={Input} label="Confirm password" type="password" />
                    </div>

                    <div className="row right">
                        <button className="btn blue">Create Account</button>
                    </div>
                </form>
            </div>
        );
    }
}

function validate({ name, email, password, confirmPassword }) {
    const errors = {};

    if(!name) {
        errors.name = 'Please enter your name';
    }

    if(!email) {
        errors.email = 'Please enter your email address';
    }

    if(!password) {
        errors.password = 'Please choose a password';
    }

    if(password !== confirmPassword) {
        errors.confirmPassword = 'Passwords do not match';
    }

    return errors;
}

export default reduxForm({
    form: 'sign-up',
    validate: validate
})(SignUp);
