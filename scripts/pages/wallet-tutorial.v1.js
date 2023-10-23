import CustomerCounter from '../components/CustomerCounter.js';
import PopupWithImage from '../components/PopupWithImage.js';

const countersList = document.querySelectorAll('.custom-counter');
const popupOpenButtons = document.querySelectorAll(
  '.wallet-tutorial__pupup-button'
);
const imagePopup = new PopupWithImage('popup_type_image');
imagePopup.setEventListeners();

popupOpenButtons.forEach(button => {
  button.addEventListener('click', () => {
    const imageNumber = button
      .closest('.wallet-tutorial__item')
      .querySelector('.wallet-tutorial__count').textContent;
    imagePopup.open(`https://cdn.rawgit.com/bread2077/temp/main/images/wallet-tutorial/${imageNumber}.png`);
  });
});

countersList.forEach(counter => {
  const customCounter = new CustomerCounter(counter);
  customCounter.startTimer();
});
