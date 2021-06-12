import {combineReducers} from 'redux';

import users, { IUsersReducer } from './usersReducer';
import posts, { IPostReducer } from './postsReducer';
import fullUsers, {IFullUsersReducer} from './fullUsersReducer';
import photos, {IPhotosReducer} from './photosReducer';

export default combineReducers({
    users,
    posts,
    fullUsers,
    photos,
})

export interface IState {
    users: IUsersReducer;
    posts: IPostReducer;
    fullUsers: IFullUsersReducer;
    photos: IPhotosReducer;
}
