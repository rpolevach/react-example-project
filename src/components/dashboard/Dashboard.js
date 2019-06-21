import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import Card from './components/Card';
import { DashboardWrapper } from './styled/Dashboard';
import { getGithubFollowers, getGithubRepos, getRickandMorty, getBreakignBad, getChuckNorris } from '../../actions/APIfunctions';
import { chooseCard } from "../../actions/cardsActions";

class Dashboard extends Component {
    state = {
        cardData: {},
        github: {
            repos: [],
            followers: []
        },
        rickandmorty: {},
        breakingBad: "",
        chuckNorris: ''
    }

    onGetCardData = id => {
        this.setState({ cardData: {} });

        let cardData = {};
        this.props.chooseCard(id, cardData);
        console.log(cardData);
        this.setState({ cardData: cardData });
        
    }

    componentDidMount() {
        this.setState(
        { 
        github: {
            followers: getGithubFollowers(),
            repos: getGithubRepos()
        },
        rickandmorty: getRickandMorty(),
        breakingBad: getBreakignBad(),
        chuckNorris: getChuckNorris()
        })
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
        } else if (this.state.cardData.name === "Rick and Morty") {
            const rickandmorty = this.state.rickandmorty;

            return <Redirect to={{
                pathname: `/${this.state.cardData.id}`,
                state: { 
                    cardData: this.state.cardData,
                    data: rickandmorty
                }
            }} />
        } else if (this.state.cardData.name === "Breaking Bad") {
            const breakingBad = this.state.breakingBad;

            return <Redirect to={{
                pathname: `/${this.state.cardData.id}`,
                state: { 
                    cardData: this.state.cardData,
                    data: breakingBad
                }
            }} />
        } else if (this.state.cardData.name === "Chuck Norris") {
            const chuckNorris = this.state.chuckNorris;

            return <Redirect to={{
                pathname: `/${this.state.cardData.id}`,
                state: { 
                    cardData: this.state.cardData,
                    data: chuckNorris
                }
            }} />
        }

        return (
            <DashboardWrapper>
                {this.props.cards.slice(0, 3).map((value) =>
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
