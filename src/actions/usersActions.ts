import { stringify } from 'node:querystring';
import { Dispatch } from 'redux';
import * as actionTypes from '../actions/actionTypes/userTypes';
import { ISingleUser} from '../entities/users';

const APP_ID = '60a3f479d30bcf7a27a0769a';

export const getUsers = (): Promise<any> => ((dispath: Dispatch) => {

    //return fetch('https://jsonplaceholder.typicode.com/users')
    return fetch('https://dummyapi.io/data/api/user', {headers: {'app-id': APP_ID}})
        .then(response => response.json())
        .then(userData => userData.data)
        .then((usersList: ISingleUser[]) => {
            dispath({
                type: actionTypes.GET_USERS,
                usersList
            })
            console.log(usersList);
        })
}) as any;