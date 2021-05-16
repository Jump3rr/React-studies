import {combineReducers} from 'redux';

import users, { IUsersReducer } from './usersReducer';
import albums, { IAlbumReducer } from './albumsReducer';
import photos, { IPhotosReducer } from './photosReducer';

export default combineReducers({
    users,
    albums,
    photos,
})

export interface IState {
    users: IUsersReducer;
    albums: IAlbumReducer;
    photos: IPhotosReducer;
}
