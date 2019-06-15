import React, { Component } from 'react';
import { connect } from 'react-redux';

import { persistor } from '../store';

class Navbar extends Component {
    Logout = () => {
        localStorage.removeItem('user');
    }

    onDelete = e => {
        e.preventDefault();
        persistor.purge();
        window.location.reload();
    }

    render() {
        return (
            <nav className="navbar navbar-light bg-light">
                <a className="navbar-brand" href="/">Navbar</a>
                {this.props.users.map(({ name, id }) => (
                    <span key={id}>{name}</span>
                ))}
                <form className="form-inline">
                    <button onClick={this.onDelete}>Delete users</button>
                    <a onClick={this.Logout} href="/">Logout</a>
                </form>
            </nav>
        )
    }
}

export default connect(
    state => ({ users: state.users })
)(Navbar);