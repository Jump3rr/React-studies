import { FC } from 'React';
import styled from 'styled-components';

import {Wrapper} from '../../styledHelpers/Components';
import {Colors} from '../../styledHelpers/Colors';

const Wrapper2 = styled(Wrapper)`
    width: 20%;
    height: 100vh;
    text-align: center;
    float: center;
    display: inline-block;
`;

const About = styled.div`
    height: 20%;
    width: 90%;
    background: ${Colors.black};
    display: inherit;
    text-align: center;
    float: center;
`;

const ProfileDesc = styled.div`
    height: 15%;
    width: 90%;
    background: ${Colors.white};
    display: inherit;
    text-align: center;
    float: center;
`;

const CustomImg = styled.img`
    margin-right: 5px;
`;

const AddIcons = styled.img`
    margin-left: 5px;
    border-style: groove;
    border-radius: 3px;
`;
const Menu = styled.div`
    height: 15%;
    width: 90%;
    background-color: red;
    display: inherit;
    text-align: center;
    float: center;
`;

export const LeftMenu: FC = () => {
    return (
        <Wrapper2>
            <About>
            </About>
            <ProfileDesc>
            <CustomImg src="./media/icons/network.png" />
            Your Network
            <AddIcons src="./media/icons/user-plus.png" />
            <p />
            <CustomImg src="./media/icons/publications.png" />
            Your Publications 
            <AddIcons src="./media/icons/plus.png" />


            </ProfileDesc>
            <Menu>

            </Menu>
            
        </Wrapper2>
    )
}