import { FC } from 'react';
import styled from 'styled-components';
import {Colors} from '../../styledHelpers/Colors';

const Line = styled.div`
    width: 100%;
    height: 1px;
    background: ${Colors.lightgrey};
    margin: 5px 0 5px 0;
`;

export const HorizontalLine: FC = () => {

    return <Line />;
};