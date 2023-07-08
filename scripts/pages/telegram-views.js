import ChoiceServiceText from '../components/ChoiceServiceText.js';
import Faq from '../components/Faq.js';
import HorizontalSwiper from '../components/HorizontalSwiper.js';
import CustomerCounter from '../components/CustomerCounter.js';
import FullService from '../components/FullService.js';
import PopupWithDescription from '../components/PopupWithDescription.js';
import { cyrcleItems, faqList, listContainer } from '../utils/constants.js';
import { socials } from '../utils/socials.js';

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

cyrcleItems.forEach((item, index) => {
  item.style.transform = `rotate(calc(${
    (360 * (index + 1)) / cyrcleItems.length
  }deg))`;
  item.querySelector('.cyrcle__image').style.transform = `rotate(calc(-${
    (360 * (index + 1)) / cyrcleItems.length
  }deg))`;
});

const countersList = document.querySelectorAll('.custom-counter');
countersList.forEach(counter => {
  const customCounter = new CustomerCounter(counter);
  customCounter.startTimer();
});

const popupService = new PopupWithDescription('popup_type_service');
popupService.setEventListeners();

socials.telegram.services.views.full.forEach(social => {
  const serviceItem = new FullService(
    'service-list__body',
    'service-element',
    {
      servicesItem: social,
    },
    popupService.openServicePopup.bind(popupService)
  );

  serviceItem.setEvetListeners();
  listContainer.append(serviceItem.createServiceItem());
});
