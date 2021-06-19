import * as actionTypes from '../actions/actionTypes/workspaceTypes';
import {IWorkspace} from '../entities/workspace';

const defaultState = (): IWorkspace => ({
    mainImg: './media/photos/contract.jpg',
    icon: './media/photos/iconContract.png',
    title: 'Client contract',
    descFirstIcon: './media/photos/iconContract.png',
    descType: 'Contract  |',
    descSecondIcon: './media/icons/people.png',
    descUsers: '55 Users',
    updated: 'Last Update 2 days ago'
});

// export interface ISelectedWorkspace {
//     selectedWorkspace: IWorkspace;
// }

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = defaultState(), action: any) => {
  switch (action.type) {
    case actionTypes.GET_WORKSPACE:
      return {
              mainImg: state.mainImg,
              icon: state.icon,
              title: state.title,
              descFirstIcon: state.descFirstIcon,
              descType: state.descType,
              descSecondIcon: state.descSecondIcon,
              descUsers: state.descUsers,
              updated: state.updated
            }
    case actionTypes.SET_WORKSPACE:
      const paylod: actionTypes.IWorkspaces["SET_WORKSPACE"] = action;
      return {...state,
              title: paylod.workspace.title,
              mainImg: paylod.workspace.mainImg,
              icon: paylod.workspace.icon,
              descType: paylod.workspace.descType,
              titldescFirstIcone: paylod.workspace.descFirstIcon,
              descSecondIcon: paylod.workspace.descSecondIcon,
              descUsers: paylod.workspace.descUsers,
              updated: paylod.workspace.updated, 
            }
    default:
      return state;
  }
};
