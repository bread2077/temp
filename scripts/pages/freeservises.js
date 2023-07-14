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

const formFreeService = document.querySelector('.freeservices__form');
if (formFreeService) {
  const linkFreeService = formFreeService.querySelector(
    '.freeservices__input_type_link'
  );
  const selectFreeService = formFreeService.querySelector(
    '.freeservices__input_type_select'
  );
  const submitFreeService = formFreeService.querySelector(
    '.freeservices__submit'
  );

  const waitFreeService = formFreeService.querySelector(
    '.freeservices__waiting'
  );
  const responseFreeService = formFreeService.querySelector(
    '.freeservices__response'
  );
  const timerFreeService = formFreeService.querySelector('.freeservices__time');

  const getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  };

  formFreeService.addEventListener('submit', e => {
    e.preventDefault();
    /*fetch(`https://smmprime.com/api/v2?key=dc51ab87891560150bbaad9acb6cbb6f&action=add&service=708&link=${freeServiceLink.value}&quantity=100`);*/
    responseFreeService.classList.remove('freeservices__responce_hidden');
    submitFreeService.classList.add('btn_disabled');
    console.log(linkFreeService.value);
    console.log(selectFreeService.value);
    switch (selectFreeService.value) {
      case 708:
      case 764:
      case 753:
        console.log();
        break;
      case 869:
      case 499:
        break;
    }
  });

  window.addEventListener('load', () => {
    let num = getRandomInt(5, 6);

    const timer = window.setInterval(() => {
      num--;
      if (num <= 0) {
        window.clearInterval(timer);
        waitFreeService.classList.add('freeservices__waiting_hidden');
        submitFreeService.classList.remove('btn_disabled');
      } else {
        timerFreeService.textContent = num;
      }
    }, 1000);
  });
}
