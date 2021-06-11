import { Dispatch } from 'redux';
import * as actionTypes from '../actions/actionTypes/postsTypes';
import { ISinglePost } from '../entities/posts';

const APP_ID = '60c32fd3eb0a2f0af65b8d01';

export const getPosts = (): Promise<any> => ((dispath: Dispatch) => {

    return fetch('https://dummyapi.io/data/api/post', {headers: {'app-id': APP_ID}})
        .then(response => response.json())
        .then(userData => userData.data)
        .then((postsList: ISinglePost[]) => {
            dispath({
                type: actionTypes.GET_POSTS,
                postsList
            })
        })

}) as any;