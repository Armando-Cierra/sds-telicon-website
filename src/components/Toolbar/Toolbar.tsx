import React from 'react';
import classNames from 'classnames';
import { TeliconLogo, ThemeSettings } from '..';
import { Link } from 'react-router-dom';

import useActivePage from '../../utils/useActivePage';
import './toolbar.scss';

const Navbar = () => {
  const { activePage } = useActivePage();

  return (
    <section
      className={classNames('toolbar', { showToolbar: activePage !== 'Home' })}
    >
      <Link to="/" className="logo logoText">
        <TeliconLogo />
        SDS Telicon
      </Link>
      <ThemeSettings />
    </section>
  );
};

export default Navbar;
