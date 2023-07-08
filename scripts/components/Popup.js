export default class Popup {
  constructor(popupSelector) {
    this._popup = document.querySelector(`.${popupSelector}`);
    this._closeButton = this._popup.querySelector('.popup__close');
    this._handleEscClose = this._handleEscClose.bind(this);
    this._handleOverlayClose = this._handleOverlayClose.bind(this);
  }

  _handleEscClose(e) {
    if (e.key === 'Escape') this._close();
  }

  _handleOverlayClose(e) {
    if (e.target === e.currentTarget) this._close();
  }

  open() {
    this._popup.classList.add('popup_is-opened');
    document.addEventListener('keydown', this._handleEscClose);
  }

  _close() {
    this._popup.classList.remove('popup_is-opened');
    document.removeEventListener('keydown', this._handleEscClose);
  }

  setEventListeners() {
    this._closeButton.addEventListener('click', () => this._close());
    this._popup.addEventListener('click', this._handleOverlayClose);
  }
}
