import React from 'react';
import RegisterForm from './register-form';

export class Register extends React.Component {
    submit(values) {
        console.log(values)
    }
    render() {
        return (
            <div>
                <RegisterForm onSubmit={this.submit}/>
            </div>
        );
    }
};

export default Register;