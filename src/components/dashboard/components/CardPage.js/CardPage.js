import React, { Component } from 'react';

class CardPage extends Component {
    render() {
        const { cardData } = this.props.location.state;

        return(
            <div>
                {cardData.name}
            </div>
        )
    }
}

export default CardPage;
