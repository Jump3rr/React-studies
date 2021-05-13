import { FC } from 'react';
import styled from 'styled-components';

import {PageElements, Wrapper} from '../../styledHelpers/Components';
import {Colors} from '../../styledHelpers/Colors';

const Wrapper2 = styled(PageElements)`
    height: auto;
    background-color: ${Colors.background};
`;

export const Entities: FC = () => {
    return (
        <Wrapper2>
            <h2>ENTITIES</h2>
        </Wrapper2>
    );
};