import React, { Component } from 'react';
import jwt from 'jsonwebtoken';
import { Redirect } from 'react-router-dom';


import TextField from '../shared/TextField';
import validation from '../shared/validation';

class LoginForm extends Component {
    state = {
        id: "",
        password: "",
        isLoading: false,
        isAuthenticated: false,
        redirect: false
    }

    validation = () => {
        const { errors, isValid } = validation(this.state);

        if (!isValid) this.setState({ errors });

        return isValid;
    }

    onChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    onSubmit = e => {
        e.preventDefault();
        if (this.validation()) {
            const token = jwt.sign(
                {
                    id: this.state.id,
                    password: this.state.password
                },
                "secretWord"
            );
            localStorage.setItem("user", token);
            this.setState({ redirect: true });
        }
    }

    render() {
        const { id, password, isLoading } = this.state;

        if (this.state.redirect) return <Redirect to="/" />

        return (
            <form onSubmit={this.onSubmit}>
                <h1>Login</h1>

                <TextField
                    label="Username"
                    name="id"
                    value={id}
                    onChange={this.onChange}
                />

                <TextField
                    label="Password"
                    name="password"
                    value={password}
                    onChange={this.onChange}
                    type="password"
                />

                <div className="form-group">
                    <button className="btn btn-primary btn-lg" disabled={isLoading}>
                        Login
                    </button>
                </div>
            </form>
        )
    }
}

export default LoginForm;