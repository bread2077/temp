import Popup from './Popup.js';
export default class PopupWithDescription extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
  }

  openServicePopup(service) {
    super.open();
    this._setServicePopupInfo(service);
  }

  _setServicePopupInfo(service) {
    this._popup.querySelector('.popup__title').textContent = service.name;
    this._popup.querySelector('.popup__id').textContent = service.id;
    this._popup.querySelector('.popup__text_type_information').textContent =
      service.information;
    this._popup.querySelector('.popup__text_type_example').textContent =
      service.example;
    const descriptionContainer = this._popup.querySelector(
      '.popup__description-list'
    );
    descriptionContainer.textContent = '';
    service.description.forEach(text => {
      descriptionContainer.insertAdjacentHTML(
        'beforeend',
        `<li class="popup__description-item popup__text">${text}</li>`
      );
    });
  }
}
