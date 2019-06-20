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
            window.location.reload();
        }
    }

    render() {
        const { id, password, isLoading } = this.state;

        if (this.state.redirect) return <Redirect to="/" />

        return (
            <form onSubmit={this.onSubmit}>
                <div className="mx-auto"><h1>Login</h1></div>
                
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

                <div className="form-group mx-auto">
                    <button className="btn btn-primary" disabled={isLoading}>
                        Login
                    </button>
                </div>
            </form>
        )
    }
}

export default LoginForm;