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
  item.querySelector('.cyrcle__image').style.transform = `rotate(calc(-${360 * (index+1)/ cyrcleItems.length}deg)) translateX(-100%)`;
})

