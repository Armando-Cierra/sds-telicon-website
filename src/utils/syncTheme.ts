const syncTheme = () => {
  const savedTheme = window.localStorage.getItem('theme');
  const systemPreference = window.matchMedia('(prefers-color-scheme: light)');

  //Detetcts automatically which is the user's operative system preferences
  const setThemeAutomatically = () => {
    if (systemPreference.matches) {
      document.body.setAttribute('data-theme', 'Default');
    } else {
      document.body.setAttribute('data-theme', 'Dark');
    }
  };

  //Verifies if there is a user preference already saved
  if (!savedTheme) {
    setThemeAutomatically();
    localStorage.setItem('theme', 'Auto');
    //Automatically changes the theme based on the system actions
    systemPreference.addEventListener('change', setThemeAutomatically);
  } else {
    if (savedTheme === 'Auto') {
      setThemeAutomatically();
      //Automatically changes the theme based on the system actions
      systemPreference.addEventListener('change', setThemeAutomatically);
    } else {
      document.body.setAttribute('data-theme', savedTheme);
    }
  }
};

export default syncTheme;
