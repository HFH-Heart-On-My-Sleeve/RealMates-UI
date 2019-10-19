import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import HelpseekerStep1 from './components/HelpseekerStep1';
import FilterOptions from './components/filterOption';

import './App.scss';

// This site has 3 pages, all of which are rendered
// dynamically in the browser (not server rendered).
//
// Although the page does not ever refresh, notice how
// React Router keeps the URL up to date as you navigate
// through the site. This preserves the browser history,
// making sure things like the back button and bookmarks
// work properly.

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
          <div>
            <p>Menu</p>
            <div>
              <Link to="/">Home</Link>
              <Link to="/about">About</Link>
              <Link to="/dashbboard">Home</Link>
            </div>
          </div>
        </div>
      </div>
      <div className="app-content__wrapper">
        <div className="app-content__constraint">
          <Switch>
            <Route exact path="/">
              <Home />
              <HelpseekerStep1 />
            </Route>
            <Route path="/about">
              <About />
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

// You can think of these components as "pages"
// in your app.

function Home() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}

function About() {
  return (
    <div>
      <h2>About</h2>
      <FilterOptions />
    </div>
  );
}

function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>
    </div>
  );
}
