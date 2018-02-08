import React from 'react';
import { connect } from 'react-redux';
import RegisterForm from './register-form';
import { registerUser, test } from '../actions';


function mapStateToProps(state) {
    return {

    };
}

export class Register extends React.Component {
    constructor(props) {
        super(props);
        this.submit = this.submit.bind(this);
    }
    
    componentDidMount() {
        this.props.dispatch(test());
    }

    submit(values) {
        if(values.password !== values.password2) {
            console.log('passwords do not match')
        } else {
            console.log('submit', values)
            this.props.dispatch(registerUser(values));
        }
    }
    render() {
        return (
            <div>
                <RegisterForm onSubmit={this.submit}/>
            </div>
        );
    }
};

export default connect(mapStateToProps)(Register);