import { FC } from 'React';
import styled from 'styled-components';

import {Wrapper} from '../../styledHelpers/Components';
import {Colors} from '../../styledHelpers/Colors';


const Wrapper2 = styled(Wrapper)`
    width: 100%;
    padding: 0;
    height: 800px;
    text-align: center;
    display: inline-block;
    margin-top: 10.4vh;
    overflow: hidden;
    border-radius: 5px;
`;

export const MainPage: FC = () => {
    return (
        <Wrapper2></Wrapper2>
    );
};