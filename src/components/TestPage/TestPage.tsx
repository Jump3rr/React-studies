import { FC } from 'react';
import styled from 'styled-components';

import {PageElements} from '../../styledHelpers/Components';
import {Colors} from '../../styledHelpers/Colors';

const Wrapper2 = styled(PageElements)`
    height: auto;
    background-color: ${Colors.background};
`;

export const TestPage: FC = () => {
    return (
      <Wrapper2>
        <h2>STRONA TESTOWA</h2>
      </Wrapper2>
    );
};