import { Dispatch } from 'redux';
import * as actionTypes from '../actions/actionTypes/postsTypes';
import { ISinglePost } from '../entities/posts';

export const getPosts = (): Promise<any> => ((dispath: Dispatch) => {

    return fetch('https://dummyapi.io/data/api/post')
        .then(response => response.json())
        .then(userData => userData.data)
        .then((postsList: ISinglePost[]) => {
            dispath({
                type: actionTypes.GET_POSTS,
                postsList
            })
        })

}) as any;