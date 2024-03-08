import CustomerCounter from '../components/CustomerCounter.js';

const countersList = document.querySelectorAll('.custom-counter');
countersList.forEach(counter => {
  const customCounter = new CustomerCounter(counter);
  customCounter.startTimer();
});

const faqList = document.querySelector('.download-app__list');
const childSpoilerConfig = {
  item: '.download-app__item',
  itemTextWrapperSelector: '.download-app__item-description-wrapper',
  itemTextWrapperClass: 'download-app__item-description-wrapper',
  itemTextSelector: '.download-app__item-description',
  itemTextActiveSelector: '.download-app__item-description_active',
  itemTextActiveClass: 'download-app__item-description_active',
  itemTitleClass: 'download-app__item-title',
  buttonClass: 'download-app__button',
  buttonSelector: '.download-app__button',
};

const toggleSpoiler = e => {
  const target = e.target;

  if (
    target.classList.contains(childSpoilerConfig.itemTitleClass) ||
    target.classList.contains(childSpoilerConfig.buttonClass)
  ) {
    const parentItem = target.closest(childSpoilerConfig.item);
    const text = parentItem.querySelector(childSpoilerConfig.itemTextSelector);
    const container = parentItem.querySelector(
      childSpoilerConfig.itemTextWrapperSelector
    );
    const btn = parentItem.querySelector(childSpoilerConfig.buttonSelector);
    const isActive = text.classList.contains(
      childSpoilerConfig.itemTextActiveClass
    );
    text.classList[!isActive ? 'add' : 'remove'](
      childSpoilerConfig.itemTextActiveClass
    );
    btn.classList[!isActive ? 'add' : 'remove']('spoiler-btn_active');
    isActive
      ? (container.style.height = 0)
      : (container.style.height = `${text.scrollHeight}px`);
  }
};

faqList.addEventListener('click', toggleSpoiler);
