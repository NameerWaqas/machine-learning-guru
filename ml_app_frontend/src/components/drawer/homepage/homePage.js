import React from 'react'
// import { Link } from 'react-router-dom';
import Header from '../../navigation/header'
import HomeComponent from './homeComponet'
import RegressionComponent from '../Regression/regressionComponent'
import ClassificationComponent from '../Classification/classificationComponent'
import ClusteringComponent from '../Clustering/clusteringComponent'
import About from './aboutComponent'

import {
    Switch,
    Route,
    useRouteMatch
} from "react-router-dom";

export default function HomePage(props) {
    return (
        <div style={{ width: '100%', overflow: 'hidden' }}>
            <div style={{ marginTop: '10vh' }}></div>
            <Header />
            <Switch>
                <Route exact path='/'>
                    <HomeComponent />
                </Route>
                <Route path='/about'>
                    <About />
                </Route>
                <Route path='/contact'>
                    <h1>Contact</h1>
                </Route>
                <Route path='/regression/blogs'><RegressionComponent/></Route>
                <Route path='/classification/blogs'><ClassificationComponent/></Route>
                <Route path='/clustering/blogs'><ClusteringComponent/></Route>
                <Route></Route>
            </Switch>
        </div>
    )
}

