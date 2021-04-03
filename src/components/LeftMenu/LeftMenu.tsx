import { FC } from 'React';
import styled from 'styled-components';

import {Wrapper} from '../../styledHelpers/Components';
import {Colors} from '../../styledHelpers/Colors';

const Wrapper2 = styled(Wrapper)`
    width: 18%;
    height: 100vh;
    text-align: center;
    display: inline-block;
    background-color: #f2f2f2;
`;

const About = styled.div`
    height: 20%;
    width: 90%;
    background: ${Colors.white};
    display: inherit;
    text-align: center;
    float: center;
    border-radius: 3px;
    box-shadow: 2px 2px 1px grey;
`;

const ProfileDesc = styled.div`
    width: 90%;
    background: ${Colors.white};
    display: inherit;
    text-align: left;
    float: center;
    border-radius: 3px;
    box-shadow: 2px 2px 1px grey;
    color: #2b2b2b;
`;

const CustomImg = styled.img`
    margin-right: 15px;
    margin-bottom: -3px;
`;
const CustomImgMenu = styled.img`
    margin-right: 25px;
    margin-bottom: -3px;
    transform: scale(1.2);
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
    return (
        <Wrapper2>
            <About>
            </About>
            <ProfileDesc>
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