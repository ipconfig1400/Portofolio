const themeToggleBtn = document.getElementById('themeToggleBtn');
const themeIcon = document.getElementById('themeIcon');
const themeText = document.getElementById('themeText');

themeToggleBtn.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    if (currentTheme === 'dark') {
        document.documentElement.removeAttribute('data-theme');
        themeText.textContent = 'Night';
    } else {
        document.documentElement.setAttribute('data-theme', 'dark');
        themeText.textContent = 'Light';
    }
});