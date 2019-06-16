import React, { Component } from 'react';

import CardHeader from './CardHeader';
import CardBody from './CardBody';
import LeftPart from './LeftPart';
import RightPart from './RightPart';
import CardWrapper from '../styled/Card';
import { Columns } from '../styled/Card';

class Card extends Component {
    render() {
        const { title, data } = this.props;

        return (
            <CardWrapper>
                <CardHeader
                    title={title}
                />
                <CardBody
                    data={data}
                />
                <Columns>
                    <button>Click</button>
                </Columns>
            </CardWrapper>
        )
    }
}

export default Card;