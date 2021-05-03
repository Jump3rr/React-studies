import { FC } from 'React';
import styled from 'styled-components';

import {Wrapper} from '../../styledHelpers/Components';
import {Colors} from '../../styledHelpers/Colors';
import {LeftMenu} from '../LeftMenu/LeftMenu';
import {TopBar} from '../TopNav/TopBar';
import {Publications} from './Publications';
import {Workspaces} from './Workspaces';
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


export const MainPage: FC = () => {
    return (
        <Router>
             <TopBar />
            <Wrapper2>
                <LeftMenu />
                <StyledSwitch>
                    <Switch>
                    <Route path="/entities" exact>
                        {/* <Entities /> */}
                    </Route>
                    <Route path="/" exact>
                        <Publications />
                        <h2>Workspaces</h2>
                        <Workspaces />
                    </Route>
                    </Switch>
                </StyledSwitch>
            </Wrapper2>
        </Router>
    );
};