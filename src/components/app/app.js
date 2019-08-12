import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { HomePage, CardPage } from '../pages';
import './app.sass';

export default class App extends Component {
    render() {
        return (
            <Switch>
                <Route exact path='/' component={HomePage} />
                <Route exact path='/card' component={CardPage} />
            </Switch>
        );
    };
};