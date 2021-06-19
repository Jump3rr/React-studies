import { FC, useEffect } from 'react';
import styled from 'styled-components';
import {StartWorking} from './StartWorking';
import { useSelector } from 'react-redux';

import {PageElements} from '../../styledHelpers/Components';
import {Colors} from '../../styledHelpers/Colors';
import { LatestUpdates } from './LatestUpdates';
import { IState } from '../../reducers';
// import { ISelectedWorkspace } from '../../reducers/workspaceReducer';
import { useDispatch } from 'react-redux';
import { getWorkspace } from '../../actions/workspaceActions';
import {IWorkspace} from '../../entities/workspace';


const Wrapper = styled.div`
    height: 40vh;
    width: 100%;
    background-color: white;
    text-align: left;
    margin-bottom: 20px;
`;
const BackgroundImg = styled.img`
    width: 100%;
    height: 20vh;
`;
const Icon = styled.img`
    padding: 2vh;
    height: 15vh;
`;
const WorkspaceContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
`;
const MinIcons = styled.img`
    width: 20px;
    height: auto;
`;
type GetWorkspace = ReturnType<typeof getWorkspace>;

export const CurrentWorkspace: FC = () => {

    // const { title, mainImg, icon, descFirstIcon, descType, descSecondIcon, descUsers, updated  } = useSelector<IState, ISelectedWorkspace>(globalState => ({
    //     ...globalState.workspace
    // }));
    const { title, mainImg, icon, descFirstIcon, descSecondIcon, descUsers, descType, updated } = useSelector<IState, IWorkspace>(globalState => ({
        ...globalState.workspace
    }));
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch<GetWorkspace>(getWorkspace());
    }, []);

    return (
            <Wrapper>
                <BackgroundImg src={mainImg} alt="" />
                <WorkspaceContainer>
                <div><Icon src={icon} alt="" /></div>
                <div>
                    <h2>{title}</h2>
                    <p><MinIcons src={descFirstIcon} alt="" /> {descType} <MinIcons src={descSecondIcon} alt="" /> {descUsers}</p>
                    <p>{updated}</p>
                </div>
                
                </WorkspaceContainer>
            </Wrapper>
    );
};