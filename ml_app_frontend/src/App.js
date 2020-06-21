import React from 'react';
import ResponsiveDrawerClassification from './components/drawer/Classification/classificationDrawer';
import ResponsiveDrawerRegression from './components/drawer/Regression/regressionDrawer';
import ResponsiveDrawerClustering from './components/drawer/Clustering/clusteringDrawer';
import ResponsiveDrawer from './components/drawer/homepage/homeDrawer'
import HomePage from './components/drawer/homepage/homePage'
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import 'aos/dist/aos.css' //CSS file for AOS package


function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Switch>
            <Route exact path="/">
              <HomePage view='home' />
              {/* 'view' prop is passed here to handle currently viewable component*/}
            </Route>
            <Route path="/about">
              <ResponsiveDrawer view='about' />
            </Route>
            <Route path="/contact">
              <ResponsiveDrawer view='contact' />
            </Route>
            <Route path="/regression/blogs">
              <ResponsiveDrawerRegression />
            </Route>
            <Route path="/classification/blogs">
              <ResponsiveDrawerClassification />
            </Route>
            <Route path="/clustering/blogs">
              <ResponsiveDrawerClustering />
            </Route>
          </Switch>
        </header>
      </div>
    </Router>

  );
}

export default App;
