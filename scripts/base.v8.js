// import '../styles/global.v17.css';

if (copyTexts.length > 0) {
  copyTexts.forEach((text, index) => {
    let copyText = copyTexts[index];
    copyText.addEventListener('copy', function (e) {
      floatMessageStyle.classList.add('floatMessageStyle');
    });
    setTimeout(() => {
      floatMessageStyle.classList.remove('floatMessageStyle');
    }, 1000);
    /*document.addEventListener('click', function(e) {
          floatMessageStyle.classList.remove("floatMessageStyle");
        });*/
  });
}
if (bankButtons.length > 0) {
  bankButtons.forEach(button => {
    button.addEventListener('click', () =>
      copyItem(button, 'copy-text', 'bank__button-wrapper', 'feedbacks_text')
    );
  });
}

const animateCopyPopup = () => {
  floatMessageStyle.classList.add('floatMessageStyle');
  setTimeout(() => {
    floatMessageStyle.classList.remove('floatMessageStyle');
  }, 2000);
};

if (addFundsCopyButtons.length > 0) {
  addFundsCopyButtons.forEach(button => {
    button.addEventListener('click', e =>
      copyItem('blue_link_card_mini', 'addfunds__button-wrapper')
    );
  });
}

const copyItem = (textClass, buttonWrapperClass) => {
  document.execCommand('copy');
  button
    .closest(`.${buttonWrapperClass}`)
    .classList.add('crypto__button-wrapper_active');
  const copyText = button
    .closest('.card')
    .querySelector(`.${textClass}`).textContent;
  console.log(copyText);
  navigator.clipboard.writeText(copyText);

  setTimeout(() => {
    button
      .closest(`.${buttonWrapperClass}`)
      .classList.remove('crypto__button-wrapper_active');
  }, 1700);
};

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

signInButtons.forEach(btn => {
  btn.addEventListener('click', e => checkScrollBlock(e, 'signIn'));
});
