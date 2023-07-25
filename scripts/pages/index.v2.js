// import '../../styles/index.v10.css';

import ChoiceServiceImage from '../components/ChoiceServiceImage.js';
import ChoiceServiceText from '../components/ChoiceServiceText.js';
import Faq from '../components/Faq.js';
import HorizontalSwiper from '../components/HorizontalSwiper.js';
import { cyrcle, faqList } from '../utils/constants.v5.js';

const secondCulc = new ChoiceServiceText('first-culc');
secondCulc.renderSocials();
secondCulc.setEventListeners();

const firstCulc = new ChoiceServiceImage('second-culc');
firstCulc.renderSocials();
firstCulc.setEventListeners();

faqList.forEach(faq => {
  const faqItem = new Faq(faq);
  faqItem.setEventListeners();
});

const phoneSwiper = new HorizontalSwiper('.advantages__phones');
if (document.documentElement.clientWidth < 700) {
  phoneSwiper.initializeSwiper();
}

const cyrcleItems = cyrcle.querySelectorAll('.cyrcle__item');
cyrcleItems.forEach((item, index) => {
  item.style.transform = `rotate(calc(${
    (360 * (index + 1)) / cyrcleItems.length
  }deg))`;
  item.querySelector('.cyrcle__image').style.transform = `rotate(calc(-${
    (360 * (index + 1)) / cyrcleItems.length
  }deg))`;
});
