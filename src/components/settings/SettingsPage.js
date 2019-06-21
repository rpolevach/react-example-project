import React, { Component } from "react";
import { connect } from 'react-redux';

import SettingsForm from './SettingsForm';
import { addUser } from '../../actions/userActions';
import { SettingsPageWrapper } from "./styled/SettingsPageWrapper";

class SettingsPage extends Component {
    render() {
        const { addUser } = this.props;
        
        return (
            <SettingsPageWrapper className="col-md-4 offset-md-4">
                <SettingsForm
                    addUser={addUser} 
                />
            </SettingsPageWrapper>
        )
    }
}

export default connect(
    null,
    { addUser }
)(SettingsPage);