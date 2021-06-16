import { FC, useState, ChangeEvent, useEffect } from 'react';
import styled from 'styled-components';
import { IState } from '../../reducers';

import { OneEntity } from './OneEntity';
import { useSelector } from 'react-redux';
import { IPhotosReducer } from '../../reducers/photosReducer';
import {PageElements, Wrapper} from '../../styledHelpers/Components';
import {Colors} from '../../styledHelpers/Colors';
import { IPhoto } from '../../entities/photos';
import { SearchInput } from '../common/SearchInput';

const FilterContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 80%;
    margin-top: 20px;
`;
const OneRow = styled.span`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    margin-top: 15px;
`;
const LastRow = styled.span`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    color: ${Colors.blue};
    margin-top: 15px;
`;
const FilterElements = styled.div`
    margin-left: 20px;
    cursor: pointer;
`;
const Informations = styled.div`
    font-weight: 100;
    text-align: left;
    margin-left: 15px;
`;

export const Filters: FC = () => {

    return (
        <FilterContainer>
            <Informations>Rows are filtered by the conditions starting from the top</Informations>
            <OneRow>
                <FilterElements><img src='../media/icons/x.png' alt="" /> Where</FilterElements>
                <FilterElements>Company <img src='../media/icons/arrow-down.png' alt="" /></FilterElements>
                <FilterElements>Contains <img src='../media/icons/arrow-down.png' alt="" /></FilterElements>
                <FilterElements><input type="text" placeholder="Type..." disabled /></FilterElements>
            </OneRow>
            <OneRow>
                <FilterElements><img src='../media/icons/x.png' alt="" /> Where</FilterElements>
                <FilterElements>Status <img src='../media/icons/arrow-down.png' alt="" /></FilterElements>
                <FilterElements>is <img src='../media/icons/arrow-down.png' alt="" /></FilterElements>
                <FilterElements><input type="text" placeholder="Type..." disabled /></FilterElements>
                <FilterElements>in <img src='../media/icons/arrow-down.png' alt="" /></FilterElements>
                <FilterElements><input type="text" placeholder="Entity..." disabled /></FilterElements>
            </OneRow>
            <OneRow>
                <FilterElements><img src='../media/icons/x.png' alt="" /> And</FilterElements>
                <FilterElements>Status <img src='../media/icons/arrow-down.png' alt="" /></FilterElements>
                <FilterElements>Ends before <img src='../media/icons/arrow-down.png' alt="" /></FilterElements>
                <FilterElements><input type="text" placeholder="Date" disabled /></FilterElements>
                <FilterElements>in <img src='../media/icons/arrow-down.png' alt="" /></FilterElements>
                <FilterElements><input type="text" placeholder="Entity..." disabled /></FilterElements>
            </OneRow>
            <LastRow>
                <FilterElements>Add filter</FilterElements>
                <FilterElements>choose property <img src='../media/icons/arrow-down.png' alt="" /></FilterElements>
            </LastRow>

        </FilterContainer>
    );
};