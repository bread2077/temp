import CustomerCounter from '../components/CustomerCounter.js';
import PopupWithImage from '../components/PopupWithImage.js';
import { TaskSpoiler } from '../components/TaskSpoiler.js';

const countersList = document.querySelectorAll('.custom-counter');
const popupOpenButtons = document.querySelectorAll('.tasks__pupup-button');

const imagePopup = new PopupWithImage('popup_type_image');
imagePopup.setEventListeners();

popupOpenButtons.forEach(button => {
  button.addEventListener('click', () => {
    const src =
      button.parentNode.querySelector('.tasks__image-name').dataset.src;
    imagePopup.open(src);
  });
});

const taskSpoilerConfig = {
  spoilerBtnClass: 'tasks__spoiler-btn',
  activeSpoilerBtnClass: 'tasks__spoiler-btn_active',
  activeSpoilerClass: 'tasks__spoiler_active',
  spoilerListSelector: '.tasks__list',
  spoilerSelector: '.tasks__spoiler',
  shortSpoilerSelector: '.tasks__spoiler-short',
  longSpoilerSelector: '.tasks__spoiler-long',
  activeSpoilerSelector: '.tasks__spoiler_active',
};
const taskSpoiler = new TaskSpoiler(taskSpoilerConfig);
taskSpoiler.init();

countersList.forEach(counter => {
  const customCounter = new CustomerCounter(counter);
  customCounter.startTimer();
});
