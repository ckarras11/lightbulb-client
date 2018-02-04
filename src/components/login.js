import React from 'react';
import LoginForm from './login-form';

export class Login extends React.Component {
    submit(values) {
        console.log(values)
    }
    render() {
        return (
            <div>
                <LoginForm onSubmit={this.submit}/>
            </div>
        );
    }
};

export default Login;