import React from "react";

import { CardHeaderWrapper } from '../styled/Card';

const CardHeader = ({ title }) => {
    return (
        <CardHeaderWrapper>
            <span>{title}</span>
        </CardHeaderWrapper>
    )
}

export default CardHeader;