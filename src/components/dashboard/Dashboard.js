import React, { Component } from 'react';

import Card from './components/Card';
import { DashboardWrapper } from './styled/Dashboard';

class Dashboard extends Component {
    render() {
        return (
            <DashboardWrapper>
                <Card />
                <Card />
            </DashboardWrapper>
        )
    }
}

export default Dashboard;