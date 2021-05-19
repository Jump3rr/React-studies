import {ISingleLocation} from '../../entities/locations';

export const GET_LOCATIONS = 'GET_LOCATIONS';

export interface ILocationTypes {
    GET_LOCATIONS: {
        locationsList: ISingleLocation[];
    }
}
