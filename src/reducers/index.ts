import {combineReducers} from 'redux';

import users, { IUsersReducer } from './usersReducer';
import posts, { IPostReducer } from './postsReducer';
import fullUsers, {IFullUsersReducer} from './fullUsersReducer';

export default combineReducers({
    users,
    posts,
    fullUsers,
})

export interface IState {
    users: IUsersReducer;
    posts: IPostReducer;
    fullUsers: IFullUsersReducer;
}
