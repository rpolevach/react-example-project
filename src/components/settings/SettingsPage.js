import React, { Component } from "react";
import { connect } from 'react-redux';

import SettingsForm from './SettingsForm';
import { addUser } from '../../actions/userActions';

class SettingsPage extends Component {
    render() {
        const { addUser } = this.props;
        
        return (
            <div className="col-md-4 offset-md-4">
                <SettingsForm
                    addUser={addUser} 
                />
            </div>
        )
    }
}

export default connect(
    null,
    { addUser }
)(SettingsPage);