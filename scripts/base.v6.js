import ListOpener from './components/ListOpener.js';
import {
  menuBurger,
  menuBurgerSpans,
  headerMenu,
  root,
  upperFooterLinks,
  dateElement,
  header,
  signinButton,
} from './utils/constants.v2.js';

function toggleHeaderMenu() {
  root.classList.toggle('root_hidden');
  header.classList.toggle('header__mobile_opened');
  headerMenu.classList.toggle('header__nav_opened');
  menuBurgerSpans.forEach(item => {
    item.classList.toggle('menu-burger__item_active');
  });
}

function closeHeaderMenu() {
  root.classList.remove('root_hidden');
  header.classList.remove('header__mobile_opened');
  headerMenu.classList.remove('header__nav_opened');
  menuBurgerSpans.forEach(item => {
    item.classList.remove('menu-burger__item_active');
  });
}

menuBurger.addEventListener('click', toggleHeaderMenu);
signinButton.addEventListener('click', closeHeaderMenu);

if (document.documentElement.clientWidth < 980) {
  const mainMenu = new ListOpener(
    '.header__links-list',
    '.header__link_type_menu'
  );
  mainMenu.initializeOpener();
}

const footerMenu = new ListOpener('.footer', '.footer__link_type_menu');
footerMenu.initializeOpener();

upperFooterLinks.forEach(link => {
  link.nextElementSibling.classList.add('footer__links_type_upper-sublist');

  const submenu = link.nextElementSibling;

  submenu &&
    link.addEventListener('click', e => {
      e.preventDefault();
      link.classList.toggle('footer__link_type_upper-menu_opened');
      submenu.classList.toggle('footer__links_type_upper-sublist_opened');
    });
});

function setCurrentDate() {
  const data = new Date();
  dateElement.textContent = data.getFullYear();
}

setCurrentDate();
