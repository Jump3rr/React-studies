import { FC } from 'react';
import styled from 'styled-components';

import {PageElements, Wrapper} from '../../styledHelpers/Components';
import {Colors} from '../../styledHelpers/Colors';
import {LatestPublications} from './LatestPublications';
import {Workspaces} from './Workspaces';

const Wrapper2 = styled(PageElements)`
    height: auto;
    background-color: ${Colors.background};
`;

export const HomePage: FC = () => {
    return (
        <Wrapper2>
            <LatestPublications />
            <h2>Workspaces</h2>
            <Workspaces />
        </Wrapper2>
    );
};