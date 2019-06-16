import React, { Component } from 'react';

class CardPage extends Component {
    render() {
        const { cardData, data } = this.props.location.state;

        const github = cardData.name === "Github" && (
            <div>
                {data.followers}
                {data.repos.map(value => <p key={value.id}>{value.name}</p>)}
            </div>
        )

        return(
            <div>
                {cardData.name}
                {github}
            </div>
        )
    }
}

export default CardPage;
