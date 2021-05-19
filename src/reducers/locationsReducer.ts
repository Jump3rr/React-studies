import {ISingleLocation} from '../entities/locations';
import * as actionTypes from '../actions/actionTypes/locationTypes';

export interface ILocationReducer {
    locationsList: ISingleLocation[];
}

const defaultState = (): ILocationReducer => ({
    locationsList: []
});

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = defaultState(), action: any) => {
    switch (action.type) {
        case actionTypes.GET_LOCATIONS: {
            const paylod: actionTypes.ILocationTypes['GET_LOCATIONS'] = action;
            return {
                ...state,
                locationsList: paylod.locationsList
            }
        }
        default: {
            return state;
        }
    }
}