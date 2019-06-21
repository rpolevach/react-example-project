import React from 'react';

import { CardBodyWrapper } from '../styled/Card'; 

const CardBody = ({ data }) => {
    return (
        <CardBodyWrapper>
            <span>{data}</span>
        </CardBodyWrapper>
    )
}

export default CardBody;