import {combineReducers} from 'redux';

import users, { IUsersReducer } from './usersReducer';
import locations, { ILocationReducer } from './locationsReducer';
import posts, { IPostReducer } from './postsReducer';

export default combineReducers({
    users,
    locations,
    posts,
})

export interface IState {
    users: IUsersReducer;
    albums: ILocationReducer;
    posts: IPostReducer;
}
