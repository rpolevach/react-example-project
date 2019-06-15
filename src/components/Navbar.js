import React, { Component } from 'react';
import { connect } from 'react-redux';

class Navbar extends Component {
    Logout = () => {
        localStorage.removeItem('user');
    }

    render() {
        return (
            <nav className="navbar navbar-light bg-light">
                <a className="navbar-brand" href="/">Navbar</a>
                {this.props.users.map(({ name, id }) => (
                    <span key={id}>{name}</span>
                ))}
                <form className="form-inline">
                    <a onClick={this.Logout} href="/">Logout</a>
                </form>
            </nav>
        )
    }
}

export default connect(
    state => ({ users: state.users })
)(Navbar);