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

linkSubmenuList.forEach(link => {
  const submenu = link.nextElementSibling;
  console.log(submenu);

    submenu && link.addEventListener('click', (e) => {
      e.preventDefault();
      const openedSubmenu =  menu.querySelector('.header__links-sublist_opened');
      // if(openedSubmenu) {
      //   openedSubmenu.classList.remove('header__links-sublist_opened');
      // } else {
      // }
      submenu.classList.toggle('header__links-sublist_opened');

    });

});



