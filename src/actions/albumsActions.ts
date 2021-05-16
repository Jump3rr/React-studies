import { Dispatch } from 'redux';
import * as actionTypes from '../actions/actionTypes/albumTypes';
import { ISingleAlbum } from '../entities/albums';

export const getAlbums = (): Promise<any> => ((dispath: Dispatch) => {

    return fetch('https://jsonplaceholder.typicode.com/albums')
        .then(response => response.json())
        .then((albumsList: ISingleAlbum[]) => {
            dispath({
                type: actionTypes.GET_ALBUMS,
                albumsList
            })
        })

}) as any;