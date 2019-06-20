import React, { Component } from 'react';

import LoginForm from './LoginForm';
import { LoginFormWrapper } from './styled/login';

class LoginPage extends Component {
    render() {
        return (
            <LoginFormWrapper className="row">
                <div className="col-md-2 offset-md-5">
                    <LoginForm />
                </div>
            </LoginFormWrapper>
        );
    }
}

export default LoginPage;