import { stringify } from 'node:querystring';
import { Dispatch } from 'redux';
import * as actionTypes from '../actions/actionTypes/fullUserTypes';
import { IFullUser } from '../entities/fullUser';
import { useSelector } from 'react-redux';
import { IState } from '../reducers';
import { IUsersReducer } from '../reducers/usersReducer';

//const APP_ID = '60c32f06eb0a2f47ab5b8d00';
const APP_ID = '60c32fd3eb0a2f0af65b8d01';

export const getFullUsers = (): Promise<any> => ((dispath: Dispatch) => {

    return (
        fetch('https://dummyapi.io/data/api/user/0F8JIqi4zwvb77FGz6Wt', {headers: {'app-id': APP_ID}}) 
        .then(response => response.json())
        .then((fullUsersList: IFullUser) => {
            dispath({
                type: actionTypes.GET_FULL_USERS,
                fullUsersList
            })
            console.log(fullUsersList);
        })
    )
}) as any;