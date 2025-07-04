const darkmodebutton = document.getElementById('theme-toggle');
const body = document.body;

function updateButtonText(isDark) {
  darkmodebutton.textContent = isDark ? 'Go light' : 'Go dark';
}

const savedTheme = localStorage.getItem('proohf_theme');
if (savedTheme === 'dark') {
  body.classList.add('dark-mode');
  updateButtonText(true);
} else {
  updateButtonText(false);
}

darkmodebutton.addEventListener('click', () => {
  const isDarkMode = body.classList.toggle('dark-mode');
  localStorage.setItem('proohf_theme', isDarkMode ? 'dark' : 'light');
  updateButtonText(isDarkMode);
});