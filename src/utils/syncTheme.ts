const syncTheme = () => {
  const setThemeAutomatically = () => {
    const darkTheme = window.matchMedia('(prefers-color-scheme: dark)');
    if (darkTheme.matches) {
      document.body.setAttribute('data-theme', 'Dark');
    } else {
      document.body.setAttribute('data-theme', 'Light');
    }
  };

  window
    .matchMedia('(prefers-color-scheme: dark)')
    .addEventListener('change', setThemeAutomatically);

  const savedTheme = window.localStorage.getItem('themePreferences');

  if (!savedTheme) {
    setThemeAutomatically();
  } else {
    document.body.setAttribute('data-theme', savedTheme);
  }
};

export default syncTheme;
