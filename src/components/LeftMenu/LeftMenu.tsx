import { FC } from "react";
import styled from 'styled-components';
import {Wrapper} from '../../styledHelpers/Components';
import {ProfileElements} from '../../styledHelpers/Components';
import {Icon} from '../../styledHelpers/Components';
import {Colors} from '../../styledHelpers/Colors';
import { useSelector } from 'react-redux';
import { IState } from '../../reducers';
import { IUsersReducer } from '../../reducers/usersReducer';
import {Link} from 'react-router-dom';

const Wrapper2 = styled(Wrapper)`
    width: 18%;
    height: 100vh;
    text-align: center;
    display: block;
    order: 0;
    z-index: 1;
`;

const About = styled(ProfileElements)`
    padding-top: 1rem;
    height: auto;
    text-align: center;
    & img {
        border-radius: 50%;
    }
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

const Urls = styled.div`
    text-decoration: none;
    display: inline-block;
    color: ${Colors.dark};
    &:hover {
        color: ${Colors.lightgrey};
        text-decoration: underline;
    }
`;


export const LeftMenu: FC = () => {
    const { usersList } = useSelector<IState, IUsersReducer>(globalState => ({
        ...globalState.users,
    }));
    

    return (
      <Wrapper2>
        {usersList?.length > 0 && (
          <About>
            <Link to="/Profile">
              <img src={usersList[0].picture} alt=""></img>
              <div>
                {usersList[0].firstName} {usersList[0].lastName}
              </div>
            </Link>
          </About>
        )}
        <ProfileDesc>
          <Link to="/test">
            <OneLine>
              <CustomImg src="./media/icons/network.png" />
              Your Network
              <AddIcons src="./media/icons/user-plus.png" />
            </OneLine>
          </Link>
          <Link to="/test">
            <OneLine>
              <CustomImg src="./media/icons/publications.png" />
              Your Publications
              <AddIcons src="./media/icons/plus.png" />
            </OneLine>
          </Link>
        </ProfileDesc>
        <Menu>
          <OneLine>
            <CustomImgMenu src="./media/icons/publications.png" />
            <Link to="/test">
              <Urls>Publications</Urls>
            </Link>
          </OneLine>
          <OneLine>
            <CustomImgMenu src="./media/icons/ecosystem.png" />
            <Link to="/test">
              <Urls>Ecosystem</Urls>
            </Link>
          </OneLine>
          <OneLine>
            <CustomImgMenu src="./media/icons/entities2.png" />
            <Link to="/Entities">
              <Urls>Entities</Urls>
            </Link>
          </OneLine>
        </Menu>
      </Wrapper2>
    );
}