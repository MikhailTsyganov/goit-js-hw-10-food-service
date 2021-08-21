
const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};



const bodyEl = document.querySelector('body');
const checkBoxEl = document.querySelector('.theme-switch__toggle');

checkBoxEl.addEventListener('change', onClickCheckBox);

onChangeThemeReloadPage();

function onClickCheckBox(e, { DARK, LIGHT } = Theme) {
    // const value = e.currentTarget
    // console.log(value);

    bodyEl.classList.toggle(DARK)
    localStorage.setItem('theme', DARK)

    if (bodyEl.classList.contains('dark-theme')) {
        bodyEl.classList.remove(LIGHT)
    } else {
        bodyEl.classList.add(LIGHT);
        localStorage.setItem('theme', LIGHT)
    }
}


function onChangeThemeReloadPage({ DARK, LIGHT } = Theme) {
    if (localStorage.getItem('theme') === DARK) {
        bodyEl.classList.add(DARK);
        checkBoxEl.checked = "true";
    }

    // if (localStorage.getItem('theme') === LIGHT) {
    //     bodyEl.classList.add(LIGHT)
    // }
}