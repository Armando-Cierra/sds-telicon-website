import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
    <>
      <Router>
        <Toolbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/icon-list" element={<IconList />} />
          <Route element={<Error />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
