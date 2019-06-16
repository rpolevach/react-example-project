import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import Card from './components/Card';
import { DashboardWrapper } from './styled/Dashboard';
import { getGithubFollowers, getGithubRepos } from '../../actions/APIfunctions';
import { chooseCard } from "../../actions/cardsActions";

class Dashboard extends Component {
    state = {
        cardData: {},
        github: {
            repos: [],
            followers: []
        }
    }

    onGetCardData = id => {
        this.setState({ cardData: {} });

        let cardData = {};
        this.props.chooseCard(id, cardData);
        console.log(cardData);
        this.setState({ cardData: cardData });
    }

    // eslint-disable-next-line getter-return
    componentDidMount() {
        this.setState({ github: {
            followers: getGithubFollowers(),
            repos: getGithubRepos()
        }})
    }

    render() {
        if (this.state.cardData.name === "Github") {
            const github = this.state.github;

            return <Redirect to={{
                pathname: `/${this.state.cardData.id}`,
                state: { 
                    cardData: this.state.cardData,
                    data: github
                }
            }} />
        }

        return (
            <DashboardWrapper>
                {this.props.cards.map((value) =>
                    <Card
                        key={value.id}
                        title={value.name} 
                        data={value.data}
                        onGetCardData={this.onGetCardData} 
                        id={value.id}
                    />
                )}
            </DashboardWrapper>
        )
    }
}

export default connect(
    state => ({ cards: state.cards }),
    { chooseCard }
)(Dashboard);
