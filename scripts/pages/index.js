import ChoiceServiceImage from '../components/ChoiceServiceImage.js';
import ChoiceServiceText from '../components/ChoiceServiceText.js';
import Faq from '../components/Faq.js';
import HorizontalSwiper from '../components/HorizontalSwiper.js';
import {
  cyrcleItems,
  faqList,
  longReadContainer,
  longRead,
} from '../utils/constants.js';

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

cyrcleItems.forEach((item, index) => {
  item.style.transform = `rotate(calc(${
    (360 * (index + 1)) / cyrcleItems.length
  }deg))`;
  item.querySelector('.cyrcle__image').style.transform = `rotate(calc(-${
    (360 * (index + 1)) / cyrcleItems.length
  }deg))`;
});

let customScroll = {
  x: 0,
};

function addScrollHorizontalBlock(e) {
  longReadContainer.style.height = `${longRead.offsetWidth - 800}px`;

  if (
    window.pageYOffset > longReadContainer.offsetTop &&
    scrollY - longReadContainer.offsetTop < longRead.offsetWidth - 1500
  ) {
    longRead.style.top = `${scrollY - longReadContainer.offsetTop}px`;
    longRead.style.left = `-${scrollY - longReadContainer.offsetTop}px`;

    // console.log(longReadContainer.offsetTop);
    // longRead.style.transform = `translateX(-${
    //   scrollY - longReadContainer.offsetTop
    // }px)`;

    // longRead.style.transform = `translateY(${
    //   scrollY - longReadContainer.offsetTop
    // }px)`;
    // longRead.style.transition = 'all 20s linear';

    customScroll.x += e.deltaY;
    // console.log('custom: ' + customScroll.x / 2.09);
    // console.log('scroll: ' + (scrollY - longReadContainer.offsetTop));
    // const a = scrollY - longReadContainer.offsetTop;
    // console.log('customScroll ' + customScroll.x.toFixed(3));
    // console.log('scrollY ' + a);
    // longRead.style.top = `${scrollY - longReadContainer.offsetTop}px`;
    // longRead.style.left = `-${scrollY - longReadContainer.offsetTop}px`;
    // longRead.style.top = `${scrollY - longReadContainer.offsetTop}px`;
    // longRead.style.left = `-${scrollY - longReadContainer.offsetTop}px`;
  }
}

// const throttle = (func, limit) => {
//   let lastFunc;
//   let lastRan;
//   return function () {
//     const context = this;
//     const args = arguments;
//     if (!lastRan) {
//       func.apply(context, args);
//       lastRan = Date.now();
//     } else {
//       clearTimeout(lastFunc);
//       lastFunc = setTimeout(function () {
//         if (Date.now() - lastRan >= limit) {
//           func.apply(context, args);
//           lastRan = Date.now();
//         }
//       }, limit - (Date.now() - lastRan));
//     }
//   };
// };
// let scrollCust = 0;

// if (document.documentElement.clientWidth > 1300) {
//   // код будет срабатывать раз в 1 секунду
//   document.addEventListener(
//     'scroll',
//     throttle(e => {
//       // console.log(scrollCust);
//       longReadContainer.style.height = `${longRead.offsetWidth - 800}px`;

//       if (
//         window.pageYOffset > longReadContainer.offsetTop &&
//         scrollY - longReadContainer.offsetTop <= longRead.offsetWidth - 500
//       ) {
//         const a = scrollY - longReadContainer.offsetTop - scrollCust;
//         console.log(a);

//         // for (let i = 0; i <= a; i++) {
//         //   console.log(i);
//         //   // scrollCust += i;
//         // }
//         // let timerScroll = setInterval(() => {}, 1000);
//         longRead.style.transform = `translate(-${scrollCust}px, ${scrollCust}px)`;
//         // console.log(scrollCust);
//       }
//     }, 1000)
//   );
// }
