import {IWorkspace} from '../../entities/workspace';

export const SET_WORKSPACE = 'SET_WORKSPACE';
export const GET_WORKSPACE = 'GET_WORKSPACE';

export interface IWorkspaces {
    SET_WORKSPACE: {
        workspace: IWorkspace;
    }
    GET_WORKSPACE: {
        workspace: IWorkspace;
    }
}

