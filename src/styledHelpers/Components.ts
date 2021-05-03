import styled from 'styled-components';
import {Colors} from './Colors';

export const Wrapper = styled.div`
    background: ${Colors.background};
    display: flex;
    //justify-content: center;
    padding: 5px;
    overflow: hidden;
`;
export const PageElements = styled.div`
    background: ${Colors.white};
    display: block;
    overflow: hidden;
    padding: 5px;
    width: 95%;
    margin-left: 2%;
    border-radius: 10px;
    text-align: center;
    order: 0;
    z-index: 1;
`;

export const TopBarSides = styled.div`
    padding: 10px;
    display: inline; 
`;

export const ProfileElements = styled.div`
    margin-left: 5%;
    width: 90%;
    background: ${Colors.white};
    display: inherit;
    float: center;
    border-radius: 3px;
    box-shadow: 2px 2px 1px grey;
`;
export const Icon = styled.img`
    margin-right: 15px;
    margin-bottom: -3px;
`;