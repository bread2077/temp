import ChoiceServiceText from '../components/ChoiceServiceText.js';
import Faq from '../components/Faq.js';
import HorizontalSwiper from '../components/HorizontalSwiper.js';
import CustomerCounter from '../components/CustomerCounter.js';
import { cyrcle, faqList, countersList } from '../utils/constants.v5.js';
import FreeServiceForm from '../components/FreeServiceForm.js';

import '../../styles/freeservice.v13.css';

const thirdCulc = new ChoiceServiceText('third-culc');
thirdCulc.renderSocials();
thirdCulc.setEventListeners();

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

countersList.forEach(counter => {
  const customCounter = new CustomerCounter(counter);
  customCounter.startTimer();
});

const freeServiceForm = new FreeServiceForm('freeservices__form', 90, 120);
freeServiceForm.setEventListeners();
