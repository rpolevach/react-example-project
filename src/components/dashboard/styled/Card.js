import styled from 'styled-components';

const CardWrapper = styled.div`
    border: 1px solid #7bc7ed;
    border-radius: 3px;
    display: inline-block;
    margin-top: 50px;
    margin-left: 30px;
    width: 300px;
    height: 250px;
    background-color: white;
    position: relative;
    color: #024db0;
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
`;

export const Columns = styled.div`
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

export const ColumnButton = styled.button`
    font-size: 13px;
    background-color: #2DD687;
`;

export default CardWrapper;