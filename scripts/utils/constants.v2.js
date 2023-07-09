const cyrcle = document.querySelector('.cyrcle__container');
if(cyrcle) {
  const cyrcleItems = cyrcle.querySelectorAll('.cyrcle__item');
}
const faqList = document.querySelectorAll('.faq__item');
const menuBurger = document.querySelector('.menu-burger');
const menuBurgerSpans = menuBurger.querySelectorAll('.menu-burger__item');
const header = document.querySelector('.header');
const headerMenu = header.querySelector('.header__nav');
const signinButton = header.querySelector('.header__button_role_signin');
const root = document.querySelector('.root');
const footer = document.querySelector('.footer');
const upperFooterLinks = footer.querySelectorAll(
  '.footer__link_type_upper-menu'
);
const dateElement = footer.querySelector('.footer__current-data');
const listContainer = document.querySelector('.service-list__body');
const BASE_URL = 'https://cdn.rawgit.com/bread2077/temp/main';
const IMAGES_URL = `${BASE_URL}/images`;
const SOCIAL_IMAGES_URL = `${IMAGES_URL}/socials`;
const SERVICE_IMAGES_URL = `${IMAGES_URL}/services`;

export {
  cyrcleItems,
  faqList,
  menuBurger,
  menuBurgerSpans,
  header,
  headerMenu,
  signinButton,
  root,
  upperFooterLinks,
  dateElement,
  listContainer,
  longReadContainer,
  longRead,
  BASE_URL,
  IMAGES_URL,
  SOCIAL_IMAGES_URL,
  SERVICE_IMAGES_URL,
};
