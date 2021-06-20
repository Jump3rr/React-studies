import {IPhoto} from '../entities/photos';
import * as actionTypes from '../actions/actionTypes/photosTypes';

export interface IPhotosReducer {
  photosList: IPhoto[];
}

const defaultState = (): IPhotosReducer => ({
  photosList: [],
});

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = defaultState(), action: any) => {
    switch (action.type) {
      case actionTypes.GET_PHOTOS: {
        const paylod: actionTypes.IPhotoTypes["GET_PHOTOS"] = action;
        return {
          ...state,
          photosList: paylod.photosList,
        };
      }
      default: {
        return state;
      }
    }
}

