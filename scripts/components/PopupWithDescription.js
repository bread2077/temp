import Popup from './Popup.js';
export default class PopupWithDescription extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._title = this._popup.querySelector('.popup__title');
    this._id = this._popup.querySelector('.popup__id');
    this._additionalInfoContainer =
      this._popup.querySelector('.popup__info-list');
    this._exampleInfo = this._popup.querySelector('.popup__text_type_example');
    this._descriptionContainer = this._popup.querySelector(
      '.popup__description-list'
    );
  }

  openServicePopup(service) {
    super.open();
    this._resetInformation();
    this._setServicePopupInfo(service);
  }

  _resetInformation() {
    this._additionalInfoContainer.innerHTML = '';
    this._descriptionContainer.innerHTML = '';
    this._exampleInfo.textContent = '';
  }

  _setServicePopupInfo(service) {
    this._title.textContent = service.name;
    this._id.textContent = service.id;
    service.information &&
      service.information.forEach(text => {
        this._additionalInfoContainer.insertAdjacentHTML(
          'beforeend',
          `<li class="popup__description-item popup__text">${text}</li>`
        );
      });
    service.description &&
      service.description.forEach(text => {
        this._descriptionContainer.insertAdjacentHTML(
          'beforeend',
          `<li class="popup__description-item popup__text">${text}</li>`
        );
      });
    this._exampleInfo.textContent = service.example;
  }
}
