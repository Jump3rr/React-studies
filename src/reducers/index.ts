import {combineReducers} from 'redux';

import users, { IUsersReducer } from './usersReducer';
import posts, { IPostReducer } from './postsReducer';
import fullUsers, {IFullUsersReducer} from './fullUsersReducer';
import photos, {IPhotosReducer} from './photosReducer';
import workspace from './workspaceReducer';
import {IWorkspace} from '../entities/workspace'

export default combineReducers({
    users,
    posts,
    fullUsers,
    photos,
    workspace,
})

export interface IState {
    users: IUsersReducer;
    posts: IPostReducer;
    fullUsers: IFullUsersReducer;
    photos: IPhotosReducer;
    workspace: IWorkspace;
}

