import React, { Component } from 'react';

class Navbar extends Component {
    Logout = () => {
        localStorage.removeItem('user');
    }

    render() {

        return (
            <nav className="navbar navbar-light bg-light">
                <a className="navbar-brand" href="/">Navbar</a>
                <form className="form-inline">
                    <a onClick={this.Logout} href="/">Logout</a>
                </form>
            </nav>
        )
    }
}

export default Navbar;