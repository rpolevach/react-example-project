import React, { Component } from 'react';

import CardHeader from './CardHeader';
import CardBody from './CardBody';
import LeftPart from './LeftPart';
import RightPart from './RightPart';
import CardWrapper from '../styled/Card';
import { Columns } from '../styled/Card';

class Card extends Component {
    render() {
        return (
            <CardWrapper>
                <CardHeader />
                <CardBody />
                <Columns>
                    <LeftPart />
                    <RightPart />
                </Columns>
            </CardWrapper>
        )
    }
}

export default Card;