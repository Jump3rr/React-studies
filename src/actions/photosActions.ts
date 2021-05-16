import { Dispatch } from 'redux';
import * as actionTypes from '../actions/actionTypes/photoTypes';
import { ISinglePhoto } from '../entities/photos';

export const getPhotos = (): Promise<any> => ((dispath: Dispatch) => {

    return fetch('https://jsonplaceholder.typicode.com/photos')
        .then(response => response.json())
        .then((photosList: ISinglePhoto[]) => {
            dispath({
                type: actionTypes.GET_PHOTOS,
                photosList
            })
        })

}) as any;