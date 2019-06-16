import React from 'react';

import { CardBodyWrapper } from '../styled/Card'; 

const CardBody = ({ data }) => {
    const check = () => {
        console.log(Array.isArray(data));
    }

    return (
        <CardBodyWrapper>
            <span>{data}</span>
        </CardBodyWrapper>
    )
}

export default CardBody;