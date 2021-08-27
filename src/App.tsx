import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Home, IconList, Error } from './pages';
import { Navbar } from './components';
import syncTheme from './utils/syncTheme';
import './styles.scss';

function App() {
  syncTheme();

  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/icon-list" component={IconList} />
        <Route exact component={Error} />
      </Switch>
    </Router>
  );
}

export default App;
