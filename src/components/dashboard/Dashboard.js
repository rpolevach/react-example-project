import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import Card from './components/Card';
import { DashboardWrapper } from './styled/Dashboard';
import { getGithubFollowers } from '../../actions/APIfunctions';
import CardPage from './components/CardPage.js/CardPage';
import { chooseCard } from "../../actions/cardsActions";

class Dashboard extends Component {
    state = {
        githubFollowers: [],
        cardData: {}
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

    onGetCardData = id => {
        this.setState({ cardData: {} });

        let cardData = {};
        this.props.chooseCard(id, cardData);
        console.log(cardData);
        this.setState({ cardData: cardData });
    }

    // eslint-disable-next-line getter-return
    componentDidMount() {
        this.getGithubFollowers();
    }

    render() {
        if (this.state.cardData.name === "Github") {
            return <Redirect to={{
                pathname: `/${this.state.cardData.id}`,
                state: { cardData: this.state.cardData }
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
