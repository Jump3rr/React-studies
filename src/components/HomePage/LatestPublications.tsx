import React, { FC } from 'react';
import styled from 'styled-components';

import {PageElements, Wrapper} from '../../styledHelpers/Components';
import {Colors} from '../../styledHelpers/Colors';

const Wrapper2 = styled(PageElements)`
    height: 40vh;
`;
const LastPost = styled.div`
    width: 30%;
    height: 40vh;
    background: black;


`;


export const LatestPublications: FC = () => {
    return (
            <Wrapper2>
                <LastPost>abc</LastPost>
                {/* //{GetPost[0].id} */}
            </Wrapper2>
    );
};