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

const longRead = document.getElementById('long-read');
console.log(longRead.scrollWidth);
let scroll = 0;

function scrollBlock(e) {
  if (
    window.pageYOffset >= longRead.offsetTop - 70 &&
    window.pageYOffset <= longRead.offsetTop + 70
  ) {
    e.preventDefault();
    longRead.scrollTo({
      top: window.pageYOffset,
      left: scroll,
      behavior: 'auto',
    });
    scroll -= e.wheelDelta / 10;
    console.log(scroll);
  }
  if (scroll + 800 >= longRead.scrollWidth) {
    document.removeEventListener('mousewheel', scrollBlock, { passive: false });
  }
}

document.addEventListener('mousewheel', scrollBlock, { passive: false });

// document.addEventListener(
//   'mousewheel',
//   e => {
//     console.log(e);
//     // e.preventDefault();
//   },
//   { passive: false }
// );

// document.addEventListener(
//   'mousewheel',
//   e => {
//     // console.log(e);
//     // e.preventDefault();
//   },
//   { passive: false }
// );
