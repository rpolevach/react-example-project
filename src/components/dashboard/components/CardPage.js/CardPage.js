import React, { Component } from 'react';

import selectCard from '../../../../utils/selectCard';
import { CardTitleWrapper } from '../../styled/Dashboard';

class CardPage extends Component {
    render() {
        const { cardData, data } = this.props.location.state;

        const selector = selectCard(cardData, data);

        return(
            <div>
                <CardTitleWrapper className="row">
                    <div className="col-md-2 offset-md-5">
                        <h1>{cardData.name}</h1>
                    </div>
                </CardTitleWrapper>
                
                <div>
                    <div>{selector}</div>
                </div>
            </div>
        )
    }
}

export default CardPage;
