import { Dispatch } from 'redux';
import * as actionTypes from './actionTypes/locationTypes';
import { ISingleLocation } from '../entities/locations';

export const getLocations = (): Promise<any> => ((dispath: Dispatch) => {

    const APP_ID = '60a3f479d30bcf7a27a0769a';

    return fetch('https://jsonplaceholder.typicode.com/albums')
        .then(response => response.json())
        .then((locationsList: ISingleLocation[]) => {
            dispath({
                type: actionTypes.GET_LOCATIONS,
                locationsList
            })
        })

}) as any;