import { FC, useState } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { IState } from '../../reducers';
import { IUsersReducer } from '../../reducers/usersReducer';
import { IFullUsersReducer } from '../../reducers/fullUsersReducer';
import {UserInfo} from './UserInfo';
import {PageElements} from '../../styledHelpers/Components';
import {Colors} from '../../styledHelpers/Colors';
import {Specialities} from './Specialities';
import {PanelInformations} from './PanelInformations';
import {Services} from './Services';
import {Propsals} from './Propsals';
import {Reviews} from './Reviews';
import { FeesAmount } from "./FeesAmount";
import {HorizontalLine} from '../common/horizontalLine';

const Wrapper2 = styled(PageElements)`
    height: auto;
    background-color: ${Colors.background};
    background-color: white;
    width: 80%;
`;
const EditButton = styled.div`
    text-align: right;
    cursor: pointer;
`;

export const Profile: FC = () => {
    const { usersList, fullUsersList } = useSelector<IState, IUsersReducer & IFullUsersReducer>(globalState => ({
        ...globalState.users,
        ...globalState.fullUsers,
    }));
    const [isInEditMode, editPage] = useState(false);

    return (
      <Wrapper2>
        <UserInfo
          id={fullUsersList?.id}
          title={fullUsersList?.title}
          firstName={fullUsersList?.firstName}
          lastName={fullUsersList?.lastName}
          gender={fullUsersList?.gender}
          email={fullUsersList?.email}
          dateOfBirth={fullUsersList?.dateOfBirth}
          registerDate={fullUsersList?.registerDate}
          phone={fullUsersList?.phone}
          picture={fullUsersList?.picture}
          location={fullUsersList?.location}
        />
        <HorizontalLine />
        <EditButton
          onClick={() => {
            return editPage(!isInEditMode);
          }}
        >
          <img src="../media/icons/edit.png" alt="" />
        </EditButton>
        <Specialities isInEditMode={isInEditMode} />
        <HorizontalLine />
        <PanelInformations isInEditMode={isInEditMode} />
        <Services isInEditMode={isInEditMode} user={usersList} />
        <HorizontalLine />
        <Propsals isInEditMode={isInEditMode} />
        <HorizontalLine />
        <Reviews isInEditMode={isInEditMode} />
        <HorizontalLine />
        <FeesAmount isInEditMode={isInEditMode} />
      </Wrapper2>
    );
};