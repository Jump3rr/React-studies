import {ISingleAlbum} from '../entities/albums';
import * as actionTypes from '../actions/actionTypes/albumTypes';

export interface IAlbumReducer {
    albumsList: ISingleAlbum[];
}

const defaultState = (): IAlbumReducer => ({
    albumsList: []
});

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = defaultState(), action: any) => {
    switch (action.type) {
        case actionTypes.GET_ALBUMS: {
            const paylod: actionTypes.IAlbumTypes['GET_ALBUMS'] = action;
            return {
                ...state,
                albumsList: paylod.albumsList
            }
        }
        default: {
            return state;
        }
    }
}