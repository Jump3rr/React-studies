import { FC, useEffect, useState } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { IState } from '../../reducers';
import { IUsersReducer } from '../../reducers/usersReducer';
import {UserInfo} from './UserInfo';

import {PageElements, Wrapper} from '../../styledHelpers/Components';
import {Colors} from '../../styledHelpers/Colors';

const Wrapper2 = styled(PageElements)`
    height: auto;
    background-color: ${Colors.background};
    background-color: white;
    width: 80%;
`;

export const Profile: FC = () => {
    const { usersList } = useSelector<IState, IUsersReducer>(globalState => ({
        ...globalState.users,
    }));
    //////TODO: pobieranie dodatkowych danych z api (userlocation) i danych szczegółowych dla danego uzytkownika
    const [isInEditMode, editPage] = useState(false);

    return (
        <Wrapper2>
        {usersList?.length > 0 &&
        <div>{console.log(usersList[0])}
        <UserInfo 
            id={usersList[0].id}
            title={usersList[0].title}
            firstName={usersList[0].firstName}
            lastName={usersList[0].lastName}
            gender={usersList[0].gender}
            email={usersList[0].email}
            dateOfBirth={usersList[0].dateOfBirth}
            registerDate={usersList[0].registerDate}
            phone={usersList[0].phone}
            picture={usersList[0].picture}
            location={usersList[0].location}
        />
        </div>
        }
        </Wrapper2>
    );
};