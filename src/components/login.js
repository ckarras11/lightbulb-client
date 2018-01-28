import React from 'react';
import LoginForm from './login-form';

export class Login extends React.Component {
    submit(values) {
        console.log(values)
    }
    render() {
        return (
            <div>
                <h2>Login</h2>
                <LoginForm onSubmit={this.submit}/>
            </div>
        );
    }
};

export default Login;