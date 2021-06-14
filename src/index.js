import './sass/main.scss';
// for menu
import template from './templates/menu-cards.hbs';
import data from './json/menu.json';
// for theme changer
import * as toolbar from './js/toolbar.js';

// menu-cards-creator
const menuMarkUp = template(data);
const menu = document.querySelector(`.js-menu`);
menu.insertAdjacentHTML(`beforeend`, menuMarkUp)














