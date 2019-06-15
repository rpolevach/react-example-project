import React, { Component } from 'react';

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
        const { username, usersurname, description } = this.state;

        if (this.isValid()) {
            this.setState({ errors: {} });  
            this.props.addUser(this.state)
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

                <span>Enter the info about you</span>
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

export default SettingsForm;