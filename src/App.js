import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import AppF from './AppF'
import Question from './question'

const Home = () => {
  return <h2>Home</h2>
}
const About = () => {
  return <h2>About</h2>
}

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/colored">ColoredDiv</Link>
        </li>
        <li>
          <Link to="/question">Question</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
  )
}

const App = () => {
  return (
    <Router>
        <Navigation />
      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/colored">
          <AppF />
        </Route>
        <Route path="/question">
          <Question />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>

    
  )
}

export default App;
