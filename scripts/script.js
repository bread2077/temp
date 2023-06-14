import ChoiceService from './ChoiceService.js';
import Faq from './Faq.js';
import HorizontalSwiper from './HorizontalSwiper.js';

const firstCulc = new ChoiceService('first-culc');
firstCulc.renderSocials();
firstCulc.setEventListeners();

const faqList = document.querySelectorAll('.faq__item');
faqList.forEach(faq => {
  const faqItem = new Faq(faq);
  faqItem.setEventListeners();
});

const phoneSwiper = new HorizontalSwiper('.advantages__phone-list');
phoneSwiper.initializeSwiper();

