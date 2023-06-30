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

const longReadContainer = document.querySelector('.long-read');
const longRead = longReadContainer.querySelector('.long-read__container');
const blockWidth = longRead.offsetWidth - 1500;
console.log(longRead);

let scroll = 0;
const topOfBlock = longRead.offsetTop;
// console.log('высота блока' + longRead.offsetWidth);
// console.log('высота блока' + longRead.offsetTop);

function scrollBlock(e) {
  // console.log('скролл' + scrollY);
  // console.log('верхяя точка' + window.pageYOffset);
  // console.log('верняя точка блока' + longReadContainer.offsetTop);
  // console.log('скролл' + scroll);

  // scrollY - longReadContainer.offsetTop < longRead.offsetWidth

  if (
    window.pageYOffset > longReadContainer.offsetTop - 70 &&
    scrollY - longReadContainer.offsetTop < longRead.offsetWidth - 1500
  ) {
    longRead.scrollWidth;

    longRead.style.position = 'fixed';
    longRead.style.top = '0px';
    e.preventDefault();
    longRead.style.left = `-${scrollY - longReadContainer.offsetTop}px`;
    scroll -= e.wheelDelta / 2;
  } else {
    longRead.style.position = 'absolute';
  }
}

if (document.documentElement.clientWidth > 1300) {
  document.addEventListener('scroll', scrollBlock);
  longReadContainer.style.height = `${6900}px`;
}
