import React, { FC, useEffect } from 'react';
import styled from 'styled-components';

import { useDispatch } from 'react-redux';
import { getUsers } from '../../actions/usersActions';
import { getPosts } from '../../actions/postsActions';
import { getFullUsers } from '../../actions/fullUsersActions';

import {Wrapper} from '../../styledHelpers/Components';
import {Colors} from '../../styledHelpers/Colors';
import {LeftMenu} from '../LeftMenu/LeftMenu';
import {TopBar} from '../TopNav/TopBar';
import {Entities} from '../Entities/Entities';
import {Profile} from '../Profile/Profile';
import {HomePage} from '../HomePage/HomePage';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";



const Wrapper2 = styled(Wrapper)`
    width: 100%;
    padding: 0;
    height: auto;
    text-align: center;
    display: inline-flex;
    margin-top: 10.4vh;
    overflow: hidden;
    border-radius: 5px;
`;
const StyledSwitch = styled.div`
    display: block;
    width: 80%;
`;
type GetUsers = ReturnType<typeof getUsers>;
type GetPosts = ReturnType<typeof getPosts>;
type GetFullUsers = ReturnType<typeof getFullUsers>;


export const MainPage: FC = () => {
        const dispatch = useDispatch();
        useEffect(() => {
            dispatch<GetUsers>(getUsers());
            dispatch<GetPosts>(getPosts());
            dispatch<GetFullUsers>(getFullUsers());
        }, []);

    return (
        <Router>
             <TopBar />
            <Wrapper2>
                <LeftMenu />
                <StyledSwitch>
                    <Switch>
                    <Route path="/entities" exact>
                        <Entities /> 
                    </Route>
                    <Route path="/" exact>
                        <HomePage />
                    </Route>
                    <Route path="/profile" exact>
                        <Profile />
                    </Route>
                    </Switch>
                </StyledSwitch>
            </Wrapper2>
        </Router>
    );
};