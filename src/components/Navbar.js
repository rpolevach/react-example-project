import React, { Component } from 'react';

class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-light bg-light">
                <a className="navbar-brand">Navbar</a>
                <form className="form-inline">
                    <a>Log in</a>
                </form>
            </nav>
        )
    }
}

export default Navbar;