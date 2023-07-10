const cyrcle = document.querySelector('.cyrcle__container');
const faqList = document.querySelectorAll('.faq__item');
const menuBurger = document.querySelector('.menu-burger');
const header = document.querySelector('.header');
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
  cyrcle,
  faqList,
  menuBurger,
  header,
  root,
  upperFooterLinks,
  dateElement,
  listContainer,
  BASE_URL,
  IMAGES_URL,
  SOCIAL_IMAGES_URL,
  SERVICE_IMAGES_URL,
};
