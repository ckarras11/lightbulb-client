import React from 'react';
import { Field, reduxForm } from 'redux-form';


let RegisterForm = (props) => {
    const { handleSubmit} = props
    return (
        <form className={'form-horizontal'} onSubmit={handleSubmit}>
            <div className={'form-group'}>
                <label className={'control-label'} htmlFor='firstName'>First Name:</label>
                <Field className={'form-control'} name='firstName' component='input' type='text' />
            </div>
            <div className={'form-group'}>
                <label className={'control-label'} htmlFor='lastName'>Last Name:</label>
                <Field className={'form-control'} name='lastName' component='input' type='text' />
            </div>
            <div className={'form-group'}>
                <label className={'control-label'} htmlFor='email'>Email:</label>
                <Field className={'form-control'} name='email' component='input' type='email' />
            </div>
            <div className={'form-group'}>
                <label className={'control-label'} htmlFor='password'>Password:</label>
                <Field className={'form-control'} name='password' component='input' type='password' />
            </div>
            <div className={'form-group'}>
                <label className={'control-label'} htmlFor='password2'>Confirm Password:</label>
                <Field className={'form-control'} name='password2' component='input' type='password' />
            </div>
            <button className={'btn btn-success'} type='submit'>Submit</button>

        </form>
    );
};

RegisterForm = reduxForm({
    form: 'register'
})(RegisterForm)

export default RegisterForm;