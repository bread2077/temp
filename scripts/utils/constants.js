const cyrcle = document.querySelector('.cyrcle__container');
const cyrcleItems = cyrcle.querySelectorAll('.cyrcle__item');
const faqList = document.querySelectorAll('.faq__item');
const menuBurger = document.querySelector('.menu-burger');
const menuBurgerSpans = menuBurger.querySelectorAll('.menu-burger__item');
const header = document.querySelector('.header');
const headerMenu = header.querySelector('.header__nav');
const root = document.querySelector('.root');
const footer = document.querySelector('.footer');
const upperFooterLinks = footer.querySelectorAll(
  '.footer__link_type_upper-menu'
);
const dateElement = footer.querySelector('.footer__current-data');
const listContainer = document.querySelector('.service-list__body');
const longReadContainer = document.querySelector('.long-read');
const longRead = longReadContainer.querySelector('.long-read__container');

export {
  cyrcleItems,
  faqList,
  menuBurger,
  menuBurgerSpans,
  header,
  headerMenu,
  root,
  upperFooterLinks,
  dateElement,
  listContainer,
  longReadContainer,
  longRead,
};
