import React, { Component } from "react";

import SettingsForm from './SettingsForm';
import { addUser } from '../../actions/userActions';

class SettingsPage extends Component {
    render() {
        const { addUser } = this.props;
        
        return (
            <div>
                <SettingsForm
                    addUser={addUser} 
                />
            </div>
        )
    }
}

export default SettingsPage;