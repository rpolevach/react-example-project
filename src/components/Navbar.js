import React, { Component } from 'react';
import { connect } from 'react-redux';

import { persistor } from '../store';
import { chooseUser } from '../actions/userActions';

class Navbar extends Component {
    Logout = () => {
        localStorage.removeItem('user');
        localStorage.removeItem('userData');
    }

    onDelete = e => {
        e.preventDefault();
        persistor.purge();
        localStorage.removeItem("userData");
        window.location.reload();
    }

    onChoose = (id) => {
        this.setState({ d: "s" })
        let userData = {};
        this.props.chooseUser(id, userData);
        const data = JSON.stringify(userData);
        localStorage.setItem('userData', data);
    }

    render() {
        const test = JSON.parse(localStorage.getItem('userData'));

        const userRender = localStorage.getItem('userData') !== null ?
            <a className="navbar-brand" href="/">You are logged as {test.name}</a> :
            <a className="navbar-brand" href="/">You aren't logged</a>;

        return (
            <nav className="navbar navbar-light bg-light">
                {userRender}
                {this.props.users.map(({ name, id }) => (
                    <button onClick={() => this.onChoose(id)} key={id}>{name}</button>
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
    state => ({ users: state.users }),
    { chooseUser }
)(Navbar);