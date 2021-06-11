import { FC, useEffect, useState } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { IState } from '../../reducers';
import { IUsersReducer } from '../../reducers/usersReducer';
import {ISingleUser} from '../../entities/user';
import {IFullUser} from '../../entities/fullUser';
import {Colors} from '../../styledHelpers/Colors';

const About = styled.div`
    margin-top: 20px;
    width: 100%;
    height: auto;
`;
const OneRow = styled.div`
    width:100%;
    text-align: left;
    margin-left: 50px;
`;
const SelectedOption = styled.span`
    width: 50%;
    text-align: left;
    margin-right: 20px;
    background-color: ${Colors.lightblue};
    color: ${Colors.blue};
    padding: 3px;
`;
const Title = styled.div`
    width: 50%;
    text-align: left;
    color: ${Colors.grey};
    margin: 10px 0 5px 0;
`;

interface IProps {
    isInEditMode?: Boolean;
}

export const Specialities: FC<IProps> = (props) => {
    const [info, setInfo] = useState({
        expertise: 'Mergers and acquisition',
        specialities1: 'Cross border operation',
        specialities2: 'Transaction over 500M€/$',
        admission1: 'Paris bar association',
        admission2: 'Tunisian bar association',
        counties: 'Tunisia',
    })

    return (
        <div>
            <About> 
                <OneRow>
                    <Title>Expertise</Title>
                    {
                    !props.isInEditMode ?
                    <div><SelectedOption>{info.expertise}</SelectedOption></div> :
                    <select onChange={e => setInfo({...info, expertise: e.target.value})}>
                        <option value="Example option 1">Example option 1</option>
                        <option value="Example option 2">Example option 2</option>
                        <option value="Example option 3">Example option 3</option>
                        <option value="Mergers and acquisition">Mergers and acquisition</option>
                    </select>
                    }
                </OneRow>
                <OneRow>
                    <Title>Specialities</Title>
                    {
                    !props.isInEditMode ?
                    <div>
                        <SelectedOption>{info.specialities1}</SelectedOption>
                        <SelectedOption>{info.specialities2}</SelectedOption>
                    </div> :
                    <div>
                    <select onChange={e => setInfo({...info, specialities1: e.target.value})}>
                        <option value="Example option 1">Example option 1</option>
                        <option value="Example option 2">Example option 2</option>
                        <option value="Example option 3">Example option 3</option>
                        <option value="Cross border operation">Cross border operation</option>
                    </select>
                    <select onChange={e => setInfo({...info, specialities2: e.target.value})}>
                        <option value="Example option 1">Example option 1</option>
                        <option value="Example option 2">Example option 2</option>
                        <option value="Example option 3">Example option 3</option>
                        <option value="Transaction over 500M€/$">Transaction over 500M€/$</option>
                    </select>
                    </div>
                    }
                </OneRow>
                <OneRow>
                    <Title>Admission to practice law</Title>
                    {
                    !props.isInEditMode ?
                    <div>
                        <SelectedOption>{info.admission1}</SelectedOption>
                        <SelectedOption>{info.admission2}</SelectedOption>
                    </div> :
                    <div>
                    <select onChange={e => setInfo({...info, admission1: e.target.value})}>
                        <option value="Example option 1">Example option 1</option>
                        <option value="Example option 2">Example option 2</option>
                        <option value="Example option 3">Example option 3</option>
                        <option value="Paris bar association">Paris bar association</option>
                    </select>
                    <select onChange={e => setInfo({...info, admission2: e.target.value})}>
                        <option value="Example option 1">Example option 1</option>
                        <option value="Example option 2">Example option 2</option>
                        <option value="Example option 3">Example option 3</option>
                        <option value="Tunisian bar association">Tunisian bar association</option>
                    </select>
                    </div>
                    }
                </OneRow>
                <OneRow>
                    <Title>Counties</Title>
                    {
                    !props.isInEditMode ?
                    <div><SelectedOption>{info.counties}</SelectedOption></div> :
                    <select onChange={e => setInfo({...info, counties: e.target.value})}>
                        <option value="Example option 1">Example option 1</option>
                        <option value="Example option 2">Example option 2</option>
                        <option value="Example option 3">Example option 3</option>
                        <option value="Tunisia">Tunisia</option>
                    </select>
                    }
                </OneRow>

            </About>
        </div>
    );
};