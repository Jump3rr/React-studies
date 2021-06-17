import { FC } from 'react';
import styled from 'styled-components';
import {Colors} from '../../styledHelpers/Colors';

const Line = styled.div`
    width: 2px;
    height: auto;
    background: ${Colors.lightgrey};
`;

export const VerticalLine: FC = () => {

    return (
        <Line />
    );
};