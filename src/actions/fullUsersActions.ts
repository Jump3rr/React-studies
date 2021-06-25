import { Dispatch } from 'redux';
import * as actionTypes from '../actions/actionTypes/fullUserTypes';
import { IFullUser } from '../entities/fullUser';

//const APP_ID = '60c32f06eb0a2f47ab5b8d00';
const APP_ID = '60c32fd3eb0a2f0af65b8d01';

export const getFullUsers = (): Promise<any> => ((dispath: Dispatch) => {

    return (
        fetch('https://dummyapi.io/data/api/user/60d0fe4f5311236168a109ca', {headers: {'app-id': APP_ID}}) 
        .then(response => response.json())
        .then((fullUsersList: IFullUser) => {
            dispath({
                type: actionTypes.GET_FULL_USERS,
                fullUsersList
            })
        })
    )
}) as any;