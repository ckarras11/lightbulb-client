import React from 'react';
import { Field, reduxForm } from 'redux-form';
import './login-form.css';

let LoginForm = (props) => {
    const { handleSubmit} = props
    return (
        <form className={'form-horizontal'} onSubmit={handleSubmit}>
            <legend>Log In</legend>
            <div className={'form-group'}>
                <label className={'control-label'} htmlFor='email'>Email:</label>
                <Field className={'form-control'} name='email' component='input' type='email' />
            </div>
            <div className={'form-group'}>
                <label className={'control-label'} htmlFor='password'>Password:</label>
                <Field className={'form-control'} name='password' component='input' type='password' />
            </div>
            <button className={'btn btn-success'} type='submit'>Submit</button>

        </form>
    );
};

LoginForm = reduxForm({
    form: 'login'
})(LoginForm)

export default LoginForm;
