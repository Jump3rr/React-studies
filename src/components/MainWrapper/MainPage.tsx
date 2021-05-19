import React, { FC, useEffect } from 'react';
import styled from 'styled-components';

import { useDispatch } from 'react-redux';
import { getUsers } from '../../actions/usersActions';
import { getLocations } from '../../actions/locationsActions';
import { getPhotos } from '../../actions/photosActions';

import {Wrapper} from '../../styledHelpers/Components';
import {Colors} from '../../styledHelpers/Colors';
import {LeftMenu} from '../LeftMenu/LeftMenu';
import {TopBar} from '../TopNav/TopBar';
import {Entities} from '../Entities/Entities';
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
    height: 800px;
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
type GetLocations = ReturnType<typeof getLocations>;
type GetPhotos = ReturnType<typeof getPhotos>;


export const MainPage: FC = () => {
        const dispatch = useDispatch();
        useEffect(() => {
            dispatch<GetUsers>(getUsers());
            dispatch<GetLocations>(getLocations());
            dispatch<GetPhotos>(getPhotos());
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
                    </Switch>
                </StyledSwitch>
            </Wrapper2>
        </Router>
    );
};