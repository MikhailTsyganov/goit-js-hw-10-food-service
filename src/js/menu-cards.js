
import menuCardTpl from '../templates/menu-card.hbs';
import menuList from './menu.json'
import './styles.css'


const menuEl = document.querySelector('.js-menu');

const cardsMarkup = createMenuCards(menuList);

menuEl.insertAdjacentHTML('beforeend', cardsMarkup)

function createMenuCards(menuList) {
    return menuCardTpl(menuList);
}