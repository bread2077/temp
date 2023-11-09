import CustomerCounter from '../components/CustomerCounter.js';

const countersList = document.querySelectorAll('.custom-counter');

countersList.forEach(counter => {
  const customCounter = new CustomerCounter(counter);
  customCounter.startTimer();
});

const faqList = document.querySelector('.child-faq__list');
const childSpoilerConfig = {
  item: '.child-faq__item',
  itemTextWrapperSelector: '.child-faq__item-description-wrapper',
  itemTextWrapperClass: 'child-faq__item-description-wrapper',
  itemTextSelector: '.child-faq__item-description',
  itemTextActiveSelector: '.child-faq__item-description_active',
  itemTextActiveClass: 'child-faq__item-description_active',
  itemTitleClass: 'child-faq__item-title',
  buttonClass: 'child-faq__button',
  buttonSelector: '.child-faq__button',
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
