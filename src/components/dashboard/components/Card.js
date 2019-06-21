import React, { Component } from 'react';

import CardHeader from './CardHeader';
import CardBody from './CardBody';
import CardWrapper, { ColumnButton } from '../styled/Card';
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
                    <ColumnButton className="btn btn-success" onClick={() => onGetCardData(id)}>VIEW</ColumnButton>
                </Columns>
            </CardWrapper>
        )
    }
}

export default Card;