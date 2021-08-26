
const theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};



const bodyEl = document.querySelector('body');
const checkBoxEl = document.querySelector('.theme-switch__toggle');




checkBoxEl.addEventListener('change', onClickCheckBox);

onChangeThemeReloadPage();

function onClickCheckBox(e, { DARK, LIGHT } = theme) {

    bodyEl.classList.toggle(DARK)
    localStorage.setItem('theme', DARK)

    if (bodyEl.classList.contains('dark-theme')) {
        bodyEl.classList.remove(LIGHT)
    } else {
        bodyEl.classList.add(LIGHT);
        localStorage.setItem('theme', LIGHT)
    }
}


function onChangeThemeReloadPage({ DARK, LIGHT } = theme) {
if (localStorage.getItem('theme') !== theme.DARK) {
    bodyEl.classList.add(theme.LIGHT)
} 

    if (localStorage.getItem('theme') === DARK) {
        bodyEl.classList.add(DARK);
        checkBoxEl.checked = "true";
    }
}