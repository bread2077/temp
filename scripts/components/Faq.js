export default class Faq {
  constructor(faqBlock) {
    this._faqBlock = faqBlock
    this._descriptionBlock = this._faqBlock.querySelector('.faq__description');
    this._announceBlock = this._faqBlock.querySelector('.faq__announce');
    this._descriptionText = this._faqBlock.querySelector('.faq__text');
    this._button = this._faqBlock.querySelector('.faq__button');
  }

  _toggleDescription() {
    this._descriptionBlock.classList.toggle('faq__description_closed');
    this._descriptionText.classList.toggle('faq__text_closed');
    this._announceBlock.classList.toggle('faq__announce_opened');
  }

  setEventListeners() {
    this._button.addEventListener('click', () => {
      this._toggleDescription();
      this._button.classList.toggle('faq__button_type_close');
    });
  }

}
