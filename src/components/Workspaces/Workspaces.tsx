import { FC } from 'react';
import styled from 'styled-components';
import {StartWorking} from './StartWorking';
import { useSelector } from 'react-redux';

import {PageElements, Wrapper} from '../../styledHelpers/Components';
import {Colors} from '../../styledHelpers/Colors';
import { LatestUpdates } from './LatestUpdates';
import { IState } from '../../reducers';
import {CurrentWorkspace} from './CurrentWorkspace';

const Wrapper2 = styled(PageElements)`
    height: auto;
    background-color: ${Colors.background};
`;

export const Workspaces: FC = () => {

    return (
        <Wrapper2>
            <CurrentWorkspace />
            <StartWorking />
            <LatestUpdates />
        </Wrapper2>
    );
};