import ChoiceService from './ChoiceService.js';
import Faq from './Faq.js';


const firstCulc = new ChoiceService('first-culc');
firstCulc.renderSocials();
firstCulc.setEventListeners();

const faqList = document.querySelectorAll('.faq__item');
faqList.forEach(faq => {
  const faqItem = new Faq(faq);
  faqItem.setEventListeners();
});

const phonesBlock = document.querySelector('.advantages__phone-list');
const phonesList = document.querySelectorAll('.advantages__item_type_phone');

console.log(phonesList);

const touchCoord = {
  x: 0
}

function handleTouchStart(e) {
  touchCoord.x = e.targetTouches[0].clientX;
}

function handleTouchMove(e) {
  const xUp = e.targetTouches[0].clientX;
  const { x } = touchCoord;

  const DETECT_TRESHHOLD = 100;

  if(Math.abs(xUp - x) > DETECT_TRESHHOLD) {

    if(xUp > x) {
      phonesBlock.style.transform = `translate(${width}px)`;
      phonesList[0].classList.add('advantages__item_active');
      phonesList[1].classList.remove('advantages__item_active');
    } else {
      phonesBlock.style.transform = `translate(-${width}px)`;
      phonesList[1].classList.add('advantages__item_active');
      phonesList[0].classList.remove('advantages__item_active');
    }

  }
}

phonesBlock.addEventListener('touchstart', (e) => handleTouchStart(e));
phonesBlock.addEventListener('touchmove', (e) => handleTouchMove(e));

console.log(window.screen.width);
console.log(phonesList[0].offsetWidth);
console.log(window.screen.width - phonesList[0].offsetWidth);
const width = phonesList[0].offsetWidth / 2;

phonesBlock.style.transform = `translate(${width}px)`;

