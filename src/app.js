import React, { Fragment } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import Home from "./views/Home";
import { MainContextProvider } from "./contexts/mainContext.js";

export const App = () => (
      <>
        <MainContextProvider>
            <Router history={createBrowserHistory()}>
                <Switch>
                    <Route exact path="/" component={Home}/>
                </Switch>
            </Router> 
        </MainContextProvider>   
      </>
)