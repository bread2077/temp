import ChoiceServiceText from '../components/ChoiceServiceText.js';
import Faq from '../components/Faq.js';
import HorizontalSwiper from '../components/HorizontalSwiper.js';
import CustomerCounter from '../components/CustomerCounter.js';
import FullService from '../components/FullService.js';
import PopupWithDescription from '../components/PopupWithDescription.js';
import { cyrcle, faqList, listContainer } from '../utils/constants.v5.js';
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

const cyrcleItems = cyrcle.querySelectorAll('.cyrcle__item');
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

const socialsName = document
  .querySelector('[data-socials]')
  .getAttribute('data-socials')
  .split('.');

const [socialTitle, socialServices] = socialsName;

const setServicesItem = item => {
  const serviceItem = new FullService(
    'service-list__body',
    'service-element',
    {
      servicesItem: item,
    },
    popupService.openServicePopup.bind(popupService)
  );

  serviceItem.setEvetListeners();
  listContainer.append(serviceItem.createServiceItem());
};
const setServicesItems = serviceItems => {
  serviceItems.forEach(social => {
    setServicesItem(social);
  });
};

const serviceSelectForm = document.querySelector('.service-list__form');

if (socialsName.length > 1) {
  setServicesItems(socials[socialTitle].services[socialServices].full);
  serviceSelectForm.classList.add('service-list__form_hided');
} else {
  serviceSelectForm.classList.remove('service-list__form_hided');
  setServicesItems(socials[socialTitle].shortList.full);
  const serviceSelect = document.querySelector(
    '.service-list__input_type_select'
  );

  const serviceSelectElement = document
    .getElementById('service-select')
    .content.querySelector('.service-list__option');
  console.log(serviceSelectElement);

  const typesArray = Array.from(socials[socialTitle].shortList.full).map(
    type => type.type
  );

  const uniqueTypesArray = new Set(typesArray);

  uniqueTypesArray.forEach(type => {
    const [title, value] = type.split(' ');
    const select = serviceSelectElement.cloneNode(true);
    select.textContent = title;
    select.value = value;

    serviceSelect.append(select);
  });

  serviceSelect.addEventListener('input', e => {
    listContainer.innerHTML = '';
    const filterArray = socials[socialTitle].shortList.full.filter(
      item => item.type.endsWith(e.target.value) && item
    );
    setServicesItems(filterArray);
  });
}
