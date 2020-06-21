import React from 'react';
import HomeView from './containers/home/view'
import ResponsiveDrawerClassification from './components/drawer/Classification/classificationDrawer';
import ResponsiveDrawerRegression from './components/drawer/Regression/regressionDrawer';
import ResponsiveDrawerClustering from './components/drawer/Clustering/clusteringDrawer';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch
} from "react-router-dom";
import 'aos/dist/aos.css'


function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Switch>
            <Route exact path="/">
              <HomeView view='home' />
            </Route>
            <Route path="/about">
              <HomeView view='about' />
            </Route>
            <Route path="/contact">
              <HomeView view='contact' />
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
