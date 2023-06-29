export default class FullService {
  constructor(
    blockSelector,
    templateSelector,
    { servicesItem },
    handleOpenPopup
  ) {
    this._block = document.querySelector(`.${blockSelector}`);
    this._serviceTemplate = document.getElementById(templateSelector);
    this._servicesItem = servicesItem;
    this._handleOpenPopup = handleOpenPopup;
    this._serviceItem = this._getTemplate();
    this._button = this._serviceItem.querySelector(
      '.service-list__popup-button'
    );
  }

  _getTemplate() {
    return this._serviceTemplate.content
      .querySelector('.service-list__body-container')
      .cloneNode(true);
  }

  createServiceItem() {
    const serviceQuery = 'service-list__body-item_type';

    this._serviceItem.querySelector(`.${serviceQuery}_id`).textContent =
      this._servicesItem.id;
    this._serviceItem.querySelector(`.${serviceQuery}_name`).textContent =
      this._servicesItem.name;
    this._serviceItem.querySelector(
      `.${serviceQuery}_cost`
    ).textContent = `${this._servicesItem.cost} ₽`;
    this._serviceItem.querySelector(`.${serviceQuery}_guarantee`).textContent =
      this._servicesItem.guarantee;
    this._serviceItem.querySelector(
      `.${serviceQuery}_timetostart`
    ).textContent = this._servicesItem.timetostart;
    return this._serviceItem;
  }

  setEvetListeners() {
    this._button.addEventListener('click', e => {
      e.preventDefault();
      this._handleOpenPopup(this._servicesItem);
    });
  }
}
