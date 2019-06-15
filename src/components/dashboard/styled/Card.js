import styled from 'styled-components';

const CardWrapper = styled.div`
    border: 2px solid black;
    display: inline-block;
    margin-top: 50px;
    margin-left: 30px;
    width: 300px;
    height: 250px;
    background-color: white;
    position: relative;
`;

export const CardHeaderWrapper = styled.div`
    padding-top: 70px;
    font-size: 30px;
    font-weight: 700;
    text-align: center;
`;

export const CardBodyWrapper = styled.div`
    text-align: center;
    font-size: 13px;
    padding-left: 30px;
    padding-right: 30px;
`;

export const Columns = styled.div`
    display: inline-flex;
    position: absolute;
    bottom: 5px;
    text-align: center;
    width: 100%;
    padding-left: 25px;
    padding-right: 25px;
`;

export const LeftPartWrapper = styled.div`
    padding-right: 50px;
`;

export const RightPartWrapper = styled.div`
    padding-left: 130px;
`;

export default CardWrapper;