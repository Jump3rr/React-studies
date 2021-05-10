import { FC } from 'react';
import styled from 'styled-components';

import {Wrapper} from '../../styledHelpers/Components';
import {ProfileElements} from '../../styledHelpers/Components';
import {Icon} from '../../styledHelpers/Components';
import {Colors} from '../../styledHelpers/Colors';
import { useSelector } from 'react-redux';
import { IState } from '../../reducers';
import { IUsersReducer } from '../../reducers/usersReducer';


const Wrapper2 = styled(Wrapper)`
    width: 18%;
    height: 100vh;
    text-align: center;
    display: block;
    order: 0;
    z-index: 1;
`;

const About = styled(ProfileElements)`
    height: 20%;

    text-align: center;
`;

const ProfileDesc = styled(ProfileElements)`
    text-align: left;
    color: ${Colors.dark};
`;

const CustomImg = styled(Icon)`
`;

const CustomImgMenu = styled(Icon)`
    margin-right: 25px;
    //-webkit-font-smoothing: subpixel-antialiased;
    //backface-visibility: hidden;
    width: 25px;
    height: auto;
    position: static;
`;

const AddIcons = styled.img`
    margin-right: 5px;
    border-style: groove;
    border-radius: 5px;
    padding-top: 2px;
    padding-bottom: 2px;
    padding-right: 5px;
    padding-left: 5px;
    margin-bottom: -5px;
    float: right;
`;
const Menu = styled.div`
    margin-left: 7%;
    width: 90%;
    display: inherit;
    text-align: left;
    float: center;
`;
const OneLine = styled.div`
    width: 90%;
    display: inline-block;
    margin-bottom: 10px;
    margin-top: 10px;
    margin-left: 10px;
`;



export const LeftMenu: FC = () => {
    const { usersList } = useSelector<IState, IUsersReducer>(globalState => globalState.users);


    return (
        <Wrapper2>
            <About>
            </About>
            {usersList.length > 0 &&
            <ProfileDesc>
                <OneLine>
                {usersList[0].name}
                {usersList[0].address.city}
                </OneLine>
                <OneLine>
                    <CustomImg src="./media/icons/network.png" />
                    Your Network
                    <AddIcons src="./media/icons/user-plus.png" />
                </OneLine>
                <OneLine>
                    <CustomImg src="./media/icons/publications.png" />
                    Your Publications 
                    <AddIcons src="./media/icons/plus.png" />
                </OneLine>
            </ProfileDesc>
            }
            <Menu>
            <OneLine>
            <CustomImgMenu src="./media/icons/publications.png" />
            Publications
            </OneLine>
            <OneLine>
            <CustomImgMenu src="./media/icons/ecosystem.png" />
            Ecosystem
            </OneLine>
            <OneLine>
            <CustomImgMenu src="./media/icons/entities2.png" />
            Entities
            </OneLine>
            </Menu>
            
        </Wrapper2>
    )
}