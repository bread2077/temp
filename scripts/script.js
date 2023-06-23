import ChoiceService from './ChoiceService.js';
import Faq from './Faq.js';
import HorizontalSwiper from './HorizontalSwiper.js';

const firstCulc = new ChoiceService('first-culc');
firstCulc.renderSocials();
firstCulc.setEventListeners();

const secondCulc = new ChoiceService('second-culc');
secondCulc.renderSocials();
secondCulc.setEventListeners();

const faqList = document.querySelectorAll('.faq__item');
faqList.forEach(faq => {
  const faqItem = new Faq(faq);
  faqItem.setEventListeners();
});

const phoneSwiper = new HorizontalSwiper('.advantages__phones');

if(document.documentElement.clientWidth < 700) { phoneSwiper.initializeSwiper(); }

const cyrcle = document.querySelector('.cyrcle__container');
const cyrcleItems = cyrcle.querySelectorAll('.cyrcle__item');

cyrcleItems.forEach((item, index) => {
  item.style.transform = `rotate(calc(${360 * (index+1)/ cyrcleItems.length}deg))`;
  item.querySelector('.cyrcle__image').style.transform = `rotate(calc(-${360 * (index+1)/ cyrcleItems.length}deg))`;
});

// ----------------------------------
const menuBurger = document.querySelector('.menu-burger');
const menuBurgerSpans = menuBurger.querySelectorAll('.menu-burger__item');
const headerMenu = document.querySelector('.header__nav');
const header = document.querySelector('.header');
const root = document.querySelector('.root');


function toggleHeaderMenu() {
  root.classList.toggle('root_hidden');
  header.classList.toggle('header__mobile_opened');
  headerMenu.classList.toggle('header__nav_opened');
  menuBurgerSpans.forEach(item => {
    item.classList.toggle('menu-burger__item_active');
  });
}

menuBurger.addEventListener('click', toggleHeaderMenu);
// ----------------------------------
const menu = document.querySelector('.header__links-list');
const linkSubmenuList = menu.querySelectorAll('.header__link_type_menu');

function closeMenuItem(link, submenu) {
  link.classList.remove('link_type_menu_opened');
  submenu.classList.remove('links-sublist_opened');
}

function openMenuItem(link, submenu) {
  link.classList.add('link_type_menu_opened');
  submenu.classList.add('links-sublist_opened');
}

linkSubmenuList.forEach(link => {
  const submenu = link.nextElementSibling;

    submenu && link.addEventListener('click', (e) => {
      e.preventDefault();
      const openedMenuLink = menu.querySelector('.link_type_menu_opened');

      if(link.classList.contains('link_type_menu_opened')) {
        closeMenuItem(link, submenu);
      } else {
        openedMenuLink && closeMenuItem(openedMenuLink, openedMenuLink.nextElementSibling);
        openMenuItem(link, submenu);
      }

    });

});

const footer = document.querySelector('.footer');
const linkSubmenuListFooter = footer.querySelectorAll('.footer__link_type_menu');

linkSubmenuListFooter.forEach(link => {
  const submenu = link.nextElementSibling;

    submenu && link.addEventListener('click', (e) => {
      e.preventDefault();
      const openedMenuLink = footer.querySelector('.link_type_menu_opened');

      if(link.classList.contains('link_type_menu_opened')) {
        closeMenuItem(link, submenu);
      } else {
        openedMenuLink && closeMenuItem(openedMenuLink, openedMenuLink.nextElementSibling);
        openMenuItem(link, submenu);
      }

    });

});

const elementsLinks = document.querySelectorAll('.footer__link_type_upper-menu');


  elementsLinks.forEach(link => {
    link.nextElementSibling.classList.add('footer__links_type_upper-sublist');

    const submenu = link.nextElementSibling;

    submenu && link.addEventListener('click', (e) => {
      e.preventDefault();
      // const openedMenuLink = menuFooter.querySelector('.link_type_menu_opened');
      link.classList.toggle('footer__link_type_upper-menu_opened');
      submenu.classList.toggle('footer__links_type_upper-sublist_opened');

    });

  });

  function setCurrentDate() {
    const dateElement = document.querySelector('.footer__current-data');
    const data = new Date;
    dateElement.textContent = data.getFullYear();
  }

  setCurrentDate();




