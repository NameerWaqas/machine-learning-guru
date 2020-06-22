import React from 'react'
// import { Link } from 'react-router-dom';
import Header from '../../navigation/header'
import HomeComponent from './homeComponet'
import {
    Switch,
    Route,
    useRouteMatch
} from "react-router-dom";

export default function HomePage(props) {
    return (
        <div style={{ width: '100%', overflow: 'hidden' }}>
            <div style={{ marginTop: '10vh' }}></div>
            <Header/>
            <Switch>
                <Route></Route>
                <Route></Route>
                <Route></Route>
            </Switch>
            <HomeComponent />
        </div>
    )
}

