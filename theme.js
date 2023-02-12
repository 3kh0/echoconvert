const darkThemeClass = 'dark-theme';
const themeSwitchButton = document.getElementById('theme-switch-button');
const body = document.querySelector('body');

const setTheme = (theme) => {
  if (theme === 'dark') {
    console.log("Setting theme to dark")
    body.classList.add(darkThemeClass);
    localStorage.setItem('theme', 'dark');
  } else {
    console.log("Setting theme to light")
    body.classList.remove(darkThemeClass);
    localStorage.setItem('theme', 'light');
  }
};

const getPreferredTheme = () => {
  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    return 'dark';
  }
  return localStorage.getItem('theme') || 'light';
};

const initializeTheme = () => {
  setTheme(getPreferredTheme());
};

themeSwitchButton.addEventListener('click', () => {
  let currentTheme = localStorage.getItem('theme') || 'light';
  let newTheme = currentTheme === 'light' ? 'dark' : 'light';
  setTheme(newTheme);
});

initializeTheme();
