import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import SeekingHelp from './components/seeking-help';
import HelpSeekerForm from './components/help-seeker-form';

import './App.scss';

export default function App() {
  return (
    <Router>
      <div className="app-nav">
        <div className="app-nav__wrapper">
          <img
            className="app-nav__logo"
            src="https://heartonmysleeve.org/wp-content/uploads/2019/10/homs-logo-lockup-horizontal-black@3x.png"
            alt="Heart On My Sleeve Logo"
            width="250px"
          />
          <p onClick={() => alert('Yay you found me! <3')}>Login</p>
        </div>
      </div>
      <div className="app-content__wrapper">
        <div className="app-content__constraint">
          <Switch>
            <Route exact path="/">
              <SeekingHelp />
            </Route>
            <Route path="/help-seeker">
              <HelpSeekerForm />
            </Route>
            <Route path="/dashboard">
              <Dashboard />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>
    </div>
  );
}
