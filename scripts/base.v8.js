import '../styles/global.v17.css';

import ListOpener from './components/ListOpener.js';
import {
  menuBurger,
  root,
  upperFooterLinks,
  dateElement,
  header,
  signInButtons,
} from './utils/constants.v5.js';

if (menuBurger) {
  const menuBurgerSpans = menuBurger.querySelectorAll('.menu-burger__item');
  const headerMenu = header.querySelector('.header__nav');
  const signinButton = header.querySelector('.header__button_role_signin');

  function toggleHeaderMenu() {
    root.classList.toggle('root_hidden');
    header.classList.toggle('header__mobile_opened');
    headerMenu.classList.toggle('header__nav_opened');
    menuBurgerSpans.forEach(item => {
      item.classList.toggle('menu-burger__item_active');
    });
  }

  const isToday = date => {
    const today = new Date();

    const getCustomCurrentDate = dateObj => {
      return `${dateObj.getDate()}/${
        dateObj.getMonth() + 1
      }/${dateObj.getFullYear()}`;
    };

    return getCustomCurrentDate(today) === getCustomCurrentDate(date);
  };

  function closeHeaderMenu() {
    root.classList.remove('root_hidden');
    header.classList.remove('header__mobile_opened');
    headerMenu.classList.remove('header__nav_opened');
    menuBurgerSpans.forEach(item => {
      item.classList.remove('menu-burger__item_active');
    });
  }

  menuBurger.addEventListener('click', toggleHeaderMenu);
  signinButton.addEventListener('click', closeHeaderMenu);

  if (document.documentElement.clientWidth < 980) {
    const mainMenu = new ListOpener(
      '.header__links-list',
      '.header__link_type_menu'
    );
    mainMenu.initializeOpener();
  }
}

const footerMenu = new ListOpener('.footer', '.footer__link_type_menu');
footerMenu.initializeOpener();

upperFooterLinks.forEach(link => {
  link.nextElementSibling.classList.add('footer__links_type_upper-sublist');

  const submenu = link.nextElementSibling;

  submenu &&
    link.addEventListener('click', e => {
      e.preventDefault();
      link.classList.toggle('footer__link_type_upper-menu_opened');
      submenu.classList.toggle('footer__links_type_upper-sublist_opened');
    });
});

function setCurrentDate() {
  const data = new Date();
  dateElement.textContent = data.getFullYear();
}

setCurrentDate();

const scrollToBlock = blockId => {
  const block = document.getElementById(blockId);
  window.scrollTo({
    top: block.offsetTop * 0.9,
    left: 0,
    behavior: 'smooth',
  });
};

const checkScrollBlock = (e, blockId) => {
  e.preventDefault();

  if (location.pathname === '/') {
    scrollToBlock(blockId);
  } else {
    location.href = '/signin/#signIn';
  }
};

// signInButtons.forEach(btn => {
//   btn.addEventListener('click', e => checkScrollBlock(e, 'signIn'));
// });

// показ сообщения о копировании
const alertImg = document.querySelector('.alert_img');
const floatMessageStyle = document.getElementById('floatMessageStyle');
const floatMessage = document.querySelector('.floatMessageStyle');
const copyTexts = document.querySelectorAll('.blue_link_card_mini');

const animateCopyPopup = () => {
  floatMessageStyle.classList.add('floatMessageStyle');
  setTimeout(() => {
    floatMessageStyle.classList.remove('floatMessageStyle');
  }, 3000);
};

if (copyTexts.length > 0) {
  copyTexts.forEach((text, index) => {
    const copyText = copyTexts[index];
    copyText.addEventListener('copy', () => animateCopyPopup());
  });
}

const copyItem = (button, textClass, buttonWrapperClass, blockClass) => {
  document.execCommand('copy');
  button
    .closest(`.${buttonWrapperClass}`)
    .classList.add('crypto__button-wrapper_active');
  const copyText = button
    .closest(`.${blockClass}`)
    .querySelector(`.${textClass}`).textContent;
  navigator.clipboard.writeText(copyText);

  setTimeout(() => {
    button
      .closest(`.${buttonWrapperClass}`)
      .classList.remove('crypto__button-wrapper_active');
  }, 1700);
};

const addFundsCopyButtons = document.querySelectorAll(
  '.crypto__button_type_addfunds'
);
const cryptoButtons = document.querySelectorAll('.crypto__button_type_crypto');
const bankButtons = document.querySelectorAll('.crypto__button_type_bank');

if (bankButtons.length > 0) {
  bankButtons.forEach(button => {
    button.addEventListener('click', () =>
      copyItem(button, 'copy-text', 'bank__button-wrapper', 'feedbacks_text')
    );
  });
}

if (addFundsCopyButtons.length > 0) {
  addFundsCopyButtons.forEach(button => {
    button.addEventListener('click', () => {
      copyItem(
        button,
        'blue_link_card_mini',
        'addfunds__button-wrapper',
        'card'
      );
      animateCopyPopup();
    });
  });
}

if (cryptoButtons.length > 0) {
  cryptoButtons.forEach(button => {
    button.addEventListener('click', () => {
      copyItem(
        button,
        'crypto__text-content',
        'crypto__button-wrapper',
        'crypto__item'
      );
      animateCopyPopup();
    });
  });
}

function open__burg() {
  burg.classList.remove('hide_elem');
}
function close__burg() {
  burg.classList.add('hide_elem');
}
function openElement(id) {
  document.getElementById('popup' + id).classList.toggle('message__show');
  document.body.style = 'overflow: hidden;';
}
function searchFunc() {
  input = document.getElementById('search_field');
  filter = input.value;
  if (!filter) {
    filter = document.getElementById('search_field_mob').value;
  }
  filter = filter.toUpperCase();
  columns = document.getElementsByClassName('tableStory__column');
  for (i = 0; i < columns.length; i++) {
    column = columns[i];
    txtValue = column.textContent || a.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      column.classList.remove('hide_elem');
    } else {
      column.classList.add('hide_elem');
    }
  }
}

//блокирование активной страницы

let menuLs = document.querySelectorAll('.menu__navs__link a');
if (menuLs.length > 0) {
  for (let i = 0; i < menuLs.length; i++) {
    let menuL = menuLs[i];
    if (menuL.href == window.location.href) {
      menuL.classList.add('active__link');
    }
  }
}

let menuImgs = document.querySelectorAll('.menu__img');
if (menuImgs.length > 0) {
  for (let i = 0; i < menuImgs.length; i++) {
    let menuImg = menuImgs[i];
    if (window.location.href == 'https://smmprime.com/') {
      menuImg.classList.add('nonactive__menu__link');
    }
  }
}

//анимация картинок

let movingBlocks = document.querySelectorAll('#advices-block-item');
if (movingBlocks.length > 0) {
  for (let i = 0; i < movingBlocks.length; i++) {
    let movingBlock = movingBlocks[i];
    window.addEventListener('scroll', function (e) {
      if (movingBlock.getBoundingClientRect().top < window.innerHeight) {
        movingBlock.classList.add('advices-block__item_visible');
      }
    });
  }
}

// фильтрация на странице цен

let tabsTops = document.querySelector('.services__icons');
if (tabsTops != null) {
  let tabse = tabsTops.querySelectorAll('.services__tab-icon');
  for (let i = 0; tabse.length > i; i++) {
    const el = tabse[i];
    el.addEventListener('click', function (e) {
      for (let index = 0; index < tabse.length; index++) {
        const element = tabse[index];
        element.classList.remove('services__tab-icon_active');
      }
      el.classList.add('services__tab-icon_active');
      el.id = 'active_tab';
      let active_elem = document
        .getElementsByClassName('services__tab-icon_active')[0]
        .getAttribute('name');
      document.querySelectorAll('[data-category]').forEach(function (element) {
        if (active_elem == 'all') {
          element.classList.remove('hide_elem');
          return;
        }
        if (!element.getAttribute('data-category').startsWith(active_elem)) {
          element.classList.add('hide_elem');
        } else {
          element.classList.remove('hide_elem');
        }
      });
    });
  }
}

let formFilter = document.querySelector('.service__form-filter');

if (formFilter) {
  formFilter.addEventListener('input', function (e) {
    let cardsItems = document.querySelectorAll('#card-item');

    cardsItems.forEach(function (item) {
      let formFilterValue = formFilter.value.toLowerCase();
      let serviceNames = item.querySelectorAll('#service-name');

      serviceNames.forEach(function (element) {
        let serviceName = element.getAttribute('data-service').toLowerCase();
        let changeElement = element.parentElement;

        if (!serviceName.includes(formFilterValue)) {
          changeElement.classList.add('hidden');

          if (!changeElement.previousElementSibling) {
            item.previousElementSibling.classList.add('hidden');
          }
        } else {
          changeElement.classList.remove('hidden');
          item.previousElementSibling.classList.remove('hidden');
        }
      });
    });
  });
}

//новогодний попап
/*
let popupBg = document.querySelector('.popup__bg');
let popup = document.querySelector('.popup');
let closePopupButton = document.querySelector('.close-popup');
let flagPopupNewYear = true;

function popupActive(e) {
    e.preventDefault();
    popupBg.classList.add('active');
    popup.classList.add('active');

}

if(popup) {
    if(window.location.href == "https://smmprime.com/") {
      if(document.readyState == 'loading') {
    	window.addEventListener('load', popupActive);
      }
    }
}

if(closePopupButton) {
  closePopupButton.addEventListener('click',() => {
      popupBg.classList.remove('active');
      popup.classList.remove('active');
  });
}

document.addEventListener('click', (e) => {
    if(e.target === popupBg) {
        popupBg.classList.remove('active');
        popup.classList.remove('active');
    }
});
*/
//вывод цифры вывода денег

let dataCoin = document.querySelector('.data__coins');
if (dataCoin) {
  let dataCoinCont = dataCoin.getAttribute('data-coins');
  let dataCoinNum = Number.parseInt(dataCoinCont);
  let dataMinCoin = document.querySelector('.data__min-coin');
  let dataCoinBtn = document.querySelector('.data__coin-btn');
  let dataMinCoinNum = Number.parseInt(dataMinCoin.getAttribute('data-coins'));

  if (dataCoinBtn) {
    if (dataCoinNum < dataMinCoinNum) {
      dataCoinBtn.classList.add('data__coin-btn_disabled');
    } else {
      dataCoinBtn.classList.remove('data__coin-btn_disabled');
    }
  }
}

/*let bankIcons = ["https://cdn.mypanel.link/6b0a4d/zdkr2ww1e78i8dok.png",
                "https://cdn.mypanel.link/6b0a4d/zdkr2ww1e78i8dok.png",
                "https://cdn.mypanel.link/6b0a4d/zdkr2ww1e78i8dok.png",
                "https://cdn.mypanel.link/6b0a4d/zdkr2ww1e78i8dok.png"];

let payPlace = document.querySelector(".place");
let imgBank = document.querySelector(".img_bank");


if(payPlace) {
  switch(payPlace.value) {
    case 1:
      imgBank.src = bankIcons[0];
      break;

  }
	}
*/

// попап на странице цен

function openPopupPrice(id) {
  console.log('popup' + id);
  document.getElementById('popup' + id).classList.toggle('message__show');
}

// вывод сообщения об отмене услуги

let messageCancel = document.getElementById('popup-cancel-massage');
let btnCancels = document.querySelectorAll('#btn-cancel');

if (btnCancels.length > 0) {
  for (let i = 0; i < btnCancels.length; i++) {
    let btnCancel = btnCancels[i];
    function addClassCancelMessage() {
      messageCancel.classList.add('popup__cancel-massage');
    }
    btnCancel.addEventListener('click', addClassCancelMessage);

    messageCancel.addEventListener('click', function (e) {
      messageCancel.classList.remove('popup__cancel-massage');
      btnCancel.removeEventListener('click', addClassCancelMessage);
    });
  }
}

//табы для страницы с обратной связью
const tickets = document.querySelector('.tickets');

if (tickets) {
  const tabTicket = tickets.querySelector('.tickets__tab_type_ticket');
  const tabInfo = tickets.querySelector('.tickets__tab_type_info');
  const btnInfo = tickets.querySelector('.tickets__tab-btn_type_info');
  const btnTicket = tickets.querySelector('.tickets__tab-btn_type_ticket');

  function openTub(openTub, closeTub, btnActive, btnDisactive) {
    btnActive.classList.add('tickets__tab-btn_active');
    btnActive.setAttribute('disabled', '');
    btnDisactive.classList.remove('tickets__tab-btn_active');
    btnDisactive.removeAttribute('disabled');
    openTub.classList.add('tickets__tab_opened');
    closeTub.classList.remove('tickets__tab_opened');
  }

  btnInfo.addEventListener('click', () =>
    openTub(tabInfo, tabTicket, btnInfo, btnTicket)
  );
  btnTicket.addEventListener('click', () =>
    openTub(tabTicket, tabInfo, btnTicket, btnInfo)
  );
}
