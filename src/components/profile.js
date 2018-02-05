import React from 'react';
import { connect } from 'react-redux';

function mapStateToProps(state) {
    return {
        userName: state.reducer.userName,
    };
}

export class Profile extends React.Component{
    render() {
        return (
            <div>
                <h2>Profile</h2>
                <h3>{this.props.userName}</h3>
            </div>
        );
    } 
};

export default connect(mapStateToProps)(Profile);