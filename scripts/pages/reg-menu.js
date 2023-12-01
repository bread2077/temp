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

buttonMenu.addEventListener('click', () => {
  longMenu.classList.toggle('reg-menu__long_opened');
  containerMenu.classList.toggle('reg-menu_opened');
  root.classList.toggle('root_hidden');
});
