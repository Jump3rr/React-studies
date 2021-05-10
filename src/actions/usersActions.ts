import { Dispatch } from 'redux';
import * as actionTypes from '../actions/actionTypes/userTypes';
import { ISingleUser } from '../entities/users';

export const getUsers = (): Promise<any> => ((dispath: Dispatch) => {

    return fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then((usersList: ISingleUser[]) => {
            dispath({
                type: actionTypes.GET_USERS,
                usersList
            })
        })

}) as any;