import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Home, IconList, Error } from './pages';
import { Toolbar } from './components';
import syncTheme from './utils/syncTheme';
import useTheme from './utils/useTheme';

function App() {
  const { setTheme } = useTheme();
  syncTheme();

  useEffect(() => {
    const activeTheme = window.localStorage.getItem('theme');
    const activeColor = window.localStorage.getItem('color');

    if (activeTheme) {
      //@ts-ignore
      setTheme(activeTheme);
    }

    if (activeColor) {
      //@ts-ignore
      setTheme(activeColor);
    }
  }, [setTheme]);

  return (
    <Router>
      <Toolbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/icon-list" component={IconList} />
        <Route exact component={Error} />
      </Switch>
    </Router>
  );
}

export default App;
