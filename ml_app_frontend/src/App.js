import React from 'react';
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
            <Route path="/">
              <HomePage/>
            </Route>
          </Switch>
        </header>
      </div>
    </Router>

  );
}

export default App;
