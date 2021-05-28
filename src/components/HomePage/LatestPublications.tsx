import { FC, useState, useEffect, ChangeEvent } from "react";
import styled from 'styled-components';

import {PageElements, Wrapper} from '../../styledHelpers/Components';
import {Colors} from '../../styledHelpers/Colors';
import { useSelector } from 'react-redux';
import { IState } from '../../reducers';

import { IUsersReducer } from '../../reducers/usersReducer';
import { ILocationReducer } from '../../reducers/locationsReducer';
import { IPostReducer } from '../../reducers/postsReducer';

const Wrapper2 = styled(PageElements)`
    height: 40vh;
    display: flex;
`;
const LastPost = styled.div`
    width: 30%;
    height: 40vh;
    background: white;
    text-align: left;
    position: relative;
    
`;
const Last3Post = styled.div`
    margin-left: 2%;
    width: 62%;
    height: 40vh;

    text-align: left;
`;
const Last3Img = styled.img`
    width: auto;
    height: 10vh;
    justify-content: left;
    
`;
const OnePost = styled.div`
    height: 10vh;
    width: 100%;
    align-items: center;
    position: relative;
    display: flex;
    margin: 3px;
`;
const PostDescription = styled.div`
    display: block;
    
`;
const PostInfo = styled.div`
    display: flex;
`;
const MainPhoto = styled.img`
    width: 100%;
    height: 40vh;
    justify-content: left;
    z-index: -1;
`;
const MainText = styled.div`
    position: absolute;
    z-index: 1;
    top: 70%;
    margin-left: 10%;
    margin-right: 10%;
    color: ${Colors.white};
    font-weight: bold;
`;
const MainAuthor = styled.div`
    position: absolute;
    top: 80%;
    margin-left: 10%;
    margin-right: 10%;
    color: ${Colors.white};
`;
const PostPhotoAuthor = styled.img`
    width: 2vmax;
    height: auto;
    border-radius: 50%;
    margin: 0 5px 0 5px;
`;



export const LatestPublications: FC = () => {

    const { usersList, postsList } = useSelector<IState, IUsersReducer & ILocationReducer & IPostReducer>(globalState => ({
        ...globalState.users,
        ...globalState.albums,
        ...globalState.posts,
    }));

    return (
            <Wrapper2>
                <LastPost>
                    <MainPhoto src={postsList[0]?.image} alt="" /><MainText>{postsList[0]?.text}</MainText>
                    <MainAuthor>
                        <PostInfo>
                            {new Date(postsList[0]?.publishDate).toLocaleDateString('locales', {day: 'numeric', month: 'short' , year: 'numeric'})}
                            <PostPhotoAuthor src={postsList[0]?.owner.picture} alt=''></PostPhotoAuthor>
                            {postsList[0]?.owner.firstName} {postsList[0]?.owner.lastName}
                        </PostInfo>
                    </MainAuthor>
                </LastPost>
                <Last3Post>
                <div style={{fontSize: '26px', margin: '5px', fontWeight: 'bold'}}>Latest publications:</div>
                <OnePost>
                    <Last3Img src={postsList[1]?.image} alt=""></Last3Img>
                    <PostDescription>
                        {postsList[1]?.text}
                        <PostInfo>
                            {new Date(postsList[1]?.publishDate).toLocaleDateString('locales', {day: 'numeric', month: 'short' , year: 'numeric'})}
                            <PostPhotoAuthor src={postsList[1]?.owner.picture} alt=''></PostPhotoAuthor>
                            {postsList[1]?.owner.firstName} {postsList[1]?.owner.lastName}
                        </PostInfo>
                        <div></div>
                        <div></div>
                    </PostDescription>
                </OnePost>
                <OnePost>
                    <Last3Img src={postsList[2]?.image} alt=""></Last3Img>
                    <PostDescription>
                        {postsList[2]?.text}
                        <PostInfo>
                            {new Date(postsList[2]?.publishDate).toLocaleDateString('locales', {day: 'numeric', month: 'short' , year: 'numeric'})}
                            <PostPhotoAuthor src={postsList[2]?.owner.picture} alt=''></PostPhotoAuthor>
                            {postsList[2]?.owner.firstName} {postsList[2]?.owner.lastName}
                        </PostInfo>
                        <div></div>
                        <div></div>
                    </PostDescription>
                </OnePost>
                <OnePost>
                    <Last3Img src={postsList[3]?.image} alt=""></Last3Img>
                    <PostDescription>
                        {postsList[3]?.text}
                        <PostInfo>
                            {new Date(postsList[3]?.publishDate).toLocaleDateString('locales', {day: 'numeric', month: 'short' , year: 'numeric'})}
                            <PostPhotoAuthor src={postsList[3]?.owner.picture} alt=''></PostPhotoAuthor>
                            {postsList[3]?.owner.firstName} {postsList[3]?.owner.lastName}
                        </PostInfo>
                        <div></div>
                        <div></div>
                    </PostDescription>
                </OnePost>
                <div><a href="/">See more publications...</a></div>
                </Last3Post>
            </Wrapper2>
    );
};