import React, { Component } from 'react';

import Card from './components/Card';
import { DashboardWrapper } from './styled/Dashboard';
import { getGithubFollowers } from '../../actions/APIfunctions';

class Dashboard extends Component {
    state = {
        githubFollowers: []
    }

    getGithubFollowers = () => {
        let usersArray = [];

        getGithubFollowers().then((data) => {
            for (let i = 0; i < data.data.length; i++) {
                usersArray[i] = data.data[i].login;
            }
            this.setState({ githubFollowers: usersArray });
        });
    }

    // eslint-disable-next-line getter-return
    componentDidMount() {
        this.getGithubFollowers();
    }

    render() {
        return (
            <DashboardWrapper>
                <Card
                    title="Github"
                    data='
                    {
                        avatar_url,
                        followers,
                        id,
                        login,
                        name,
                        type,
                        ...
                    }
                '
                />
            </DashboardWrapper>
        )
    }
}

export default Dashboard;