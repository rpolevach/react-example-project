import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';

import { persistor } from '../store';
import { chooseUser } from '../actions/userActions';
import { shakeCards } from '../actions/cardsActions';

class Navbar extends Component {
    state = {
        userData: {},
        userData1: {}
    }

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
        let userData = {};
        this.props.chooseUser(id, userData);
        this.setState({ userData: userData });
        const data = JSON.stringify(userData);
        localStorage.setItem('userData', data);
        this.props.shakeCards();
        this.props.history.push('/');
    }

    render() {
        const test = JSON.parse(localStorage.getItem('userData'));

        const userRender = localStorage.getItem('userData') !== null ?
            <a className="navbar-brand" href="/">You are logged as {test.name}</a> :
            <a className="navbar-brand" href="/">You aren't logged in</a>;

        const users = localStorage.getItem('user') !== null && (
            <div className="btn-group">
                {this.props.users.map(({ name, id }) => (
                    <button className="btn btn-info" onClick={() => this.onChoose(id)} key={id}>{name}</button>
                ))}
            </div>
        )

        const deleteButton = localStorage.getItem('userData') !== null && (
            <button className="btn btn-danger" onClick={this.onDelete}>Delete users</button>
        )

        return (
            <nav className="navbar navbar-dark bg-dark">
                {userRender}
                {users}
                <form className="form-inline">
                    <div className="btn-group" role="group">
                        {deleteButton}
                        <Link className="btn btn-secondary" to="/settings">Settings</Link>
                        <a className="btn btn-primary" onClick={this.Logout} href="/">Logout</a>
                    </div>
                </form>
            </nav>
        )
    }
}

export default withRouter(connect(
    state => ({ users: state.users }),
    { chooseUser, shakeCards }
)(Navbar));