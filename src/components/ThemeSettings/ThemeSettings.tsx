import React from 'react';
import classNames from 'classnames';
import useTheme, { Themes } from '../../utils/useTheme';
import './theme-settings.scss';

const ThemeSettings = () => {
  const { theme, setTheme } = useTheme();
  const themes = ['Auto', 'Default', 'Dark'];

  const changeTheme = (selectedTheme: Themes) => {
    setTheme(selectedTheme);
    document.body.setAttribute('data-theme', selectedTheme);
    window.localStorage.setItem('theme', selectedTheme);
  };

  return (
    <div className="themes">
      <span>
        <svg
          aria-hidden="true"
          focusable="false"
          data-prefix="fas"
          data-icon="palette"
          className="svg-inline--fa fa-palette fa-w-16"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <path
            fill="currentColor"
            d="M204.3 5C104.9 24.4 24.8 104.3 5.2 203.4c-37 187 131.7 326.4 258.8 306.7 41.2-6.4 61.4-54.6 42.5-91.7-23.1-45.4 9.9-98.4 60.9-98.4h79.7c35.8 0 64.8-29.6 64.9-65.3C511.5 97.1 368.1-26.9 204.3 5zM96 320c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm32-128c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm128-64c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm128 64c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32z"
          ></path>
        </svg>
        Theme
      </span>
      {themes.map((themeName, index) => (
        <div
          className={classNames(`${themeName.toLowerCase()}`, {
            active: themeName === theme
          })}
          key={`theme-${index}`}
          onClick={() => {
            //@ts-ignore
            changeTheme(themeName);
          }}
        ></div>
      ))}
    </div>
  );
};

export default ThemeSettings;
