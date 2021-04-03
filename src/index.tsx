import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { TopBar } from './components/TopNav/TopBar';
import { LeftMenu } from './components/LeftMenu/LeftMenu';
import { MainPage } from './components/MainWrapper/MainPage';

ReactDOM.render(
  <React.StrictMode>
    <TopBar>
    </TopBar>
    <LeftMenu>
    </LeftMenu>
    <MainPage></MainPage>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
