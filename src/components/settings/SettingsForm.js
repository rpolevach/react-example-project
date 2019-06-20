import React, { Component } from 'react';
import { Redirect, withRouter } from 'react-router-dom';

import TextField from '../shared/TextField';
import newUserValidation from '../shared/newUserValidations';

class SettingsForm extends Component {
    state = {
        username: "",
        usersurname: "",
        description: "",
        errors: {}
    }

    onChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    }

    isValid = () => {
        const { errors, isValid } = newUserValidation(this.state);

        if (!isValid) this.setState({ errors })

        return isValid;
    }

    onSubmit = e => {
        e.preventDefault();

        if (this.isValid()) {
            this.setState({ errors: {} });  
            this.props.addUser(this.state);
            this.props.history.push('/');
        }
    }

    render () {
        const { username, usersurname } = this.state;

        return (
            <form onSubmit={this.onSubmit}>
                <h1>Create user</h1>

                <TextField
                    label="Please enter the name"
                    name="username"
                    value={username}
                    onChange={this.onChange}
                />

                <TextField
                    label="Please enter the surname"
                    name="usersurname"
                    value={usersurname}
                    onChange={this.onChange}
                />
                
                <div>
                    <span>Enter the info about you</span>
                </div>
                
                <textarea 
                    name="description" 
                    cols="40" 
                    rows="5" 
                    onChange={this.onChange} 
                />

                <div className="form-group">
                    <button className="btn btn-primary btn-lg">
                        Create
                    </button>
                </div>
            </form>
        )
    }
}

export default withRouter(SettingsForm);