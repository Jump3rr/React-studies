import {IFullUser} from '../../entities/fullUser';

export const GET_FULL_USERS = 'GET_FULL_USERS';

export interface IFullUserTypes {
    GET_FULL_USERS: {
        fullUsersList: IFullUser;
    }
}

