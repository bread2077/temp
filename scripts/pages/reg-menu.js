import CustomerCounter from '../components/CustomerCounter.js';

const countersList = document.querySelectorAll('.custom-counter');

countersList.forEach(counter => {
  const customCounter = new CustomerCounter(counter);
  customCounter.startTimer();
});

const buttonMenu = document.querySelector('.reg-menu__button');
const containerMenu = document.querySelector('.reg-menu');
const longMenu = document.querySelector('.reg-menu__long');
const root = document.querySelector('.root');

const toggleMenuVisibility = () => {
  const isOpened = containerMenu.classList.contains('reg-menu_opened');

  longMenu.classList[isOpened ? 'remove' : 'add']('reg-menu__long_opened');
  containerMenu.classList[isOpened ? 'remove' : 'add']('reg-menu_opened');
  root.classList[isOpened ? 'remove' : 'add']('root_hidden');
};

buttonMenu.addEventListener('click', toggleMenuVisibility);

containerMenu.addEventListener('click', e => {
  if (e.target === e.currentTarget) {
    toggleMenuVisibility();
  }
});
