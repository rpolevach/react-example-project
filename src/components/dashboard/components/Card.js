import React, { Component } from 'react';

import CardHeader from './CardHeader';
import CardBody from './CardBody';
import CardWrapper from '../styled/Card';
import { Columns } from '../styled/Card';

class Card extends Component {
    render() {
        const { title, data, onGetCardData, id } = this.props;

        return (
            <CardWrapper>
                <CardHeader
                    title={title}
                />
                <CardBody
                    data={data}
                />
                <Columns>
                    <button onClick={() => onGetCardData(id)}>Click</button>
                </Columns>
            </CardWrapper>
            /* <div className="card">
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{data}</p>
                </div>
            </div> */
        )
    }
}

export default Card;