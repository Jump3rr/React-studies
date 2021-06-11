import {IFullUser} from '../entities/fullUser';
import * as actionTypes from '../actions/actionTypes/fullUserTypes';

export interface IFullUsersReducer {
    fullUsersList: IFullUser;
}

const defaultState = (): IFullUsersReducer => ({
    fullUsersList: {
        id: '',
        title: '',
        firstName: '',
        lastName: '',
        gender: '',
        email: '',
        dateOfBirth: '',
        registerDate: '',
        phone: '',
        picture: '',
        location: {
            state: '',
            street: '',
            country: '',
            timezone: '',
            city: '',
        },
    },
});

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = defaultState(), action: any) => {
    switch (action.type) {
        case actionTypes.GET_FULL_USERS: {
            const paylod: actionTypes.IFullUserTypes['GET_FULL_USERS'] = action;
            return {
                ...state,
                fullUsersList: paylod.fullUsersList
            }
        }
        default: {
            return state;
        }
    }
}

