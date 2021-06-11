import { FC, useEffect, useState } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { IState } from '../../reducers';
import { IUsersReducer } from '../../reducers/usersReducer';
import { IFullUsersReducer } from '../../reducers/fullUsersReducer';
import { getFullUsers } from '../../actions/fullUsersActions';
import {UserInfo} from './UserInfo';
import { useDispatch } from 'react-redux';
import {PageElements, Wrapper} from '../../styledHelpers/Components';
import {Colors} from '../../styledHelpers/Colors';
import {Specialities} from './Specialities';
import {PanelInformations} from './PanelInformations';
import {Services} from './Services';
import {Propsals} from './Propsals';
import {Reviews} from './Reviews';
import {FeesAmount} from './FeesAmount';
import { isEmptyObject } from 'jquery';

const Wrapper2 = styled(PageElements)`
    height: auto;
    background-color: ${Colors.background};
    background-color: white;
    width: 80%;
`;
const EditButton = styled.div`
    text-align: right;
`;

export const Profile: FC = () => {
    const { usersList, fullUsersList } = useSelector<IState, IUsersReducer & IFullUsersReducer>(globalState => ({
        ...globalState.users,
        ...globalState.fullUsers,
    }));
    const [isInEditMode, editPage] = useState(false);

    return (
        <Wrapper2>
            {/* {console.log(typeof(fullUsersList[0]))} */}
        {/* {fullUsersList?.length > 0 && */}
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
        <EditButton onClick={() => {return editPage(!isInEditMode)}}>EDIT</EditButton>
        <Specialities isInEditMode={isInEditMode}/>
        <PanelInformations isInEditMode={isInEditMode}/>
        <Services 
            isInEditMode={isInEditMode}
            user={usersList}
        />
        <Propsals isInEditMode={isInEditMode} />
        <Reviews isInEditMode={isInEditMode} />
        <FeesAmount isInEditMode={isInEditMode} />
        </Wrapper2>
    );
};