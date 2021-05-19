import {combineReducers} from 'redux';

import users, { IUsersReducer } from './usersReducer';
import locations, { ILocationReducer } from './locationsReducer';
import photos, { IPhotosReducer } from './photosReducer';

export default combineReducers({
    users,
    locations,
    photos,
})

export interface IState {
    users: IUsersReducer;
    albums: ILocationReducer;
    photos: IPhotosReducer;
}
