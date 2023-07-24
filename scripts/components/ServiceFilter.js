export class ServiceFilter {
  constructor(formSelector, social, setServiceItem, servicesContaner) {
    this._form = document.querySelector(`.${formSelector}`);
    this._select = this._form.querySelector('.service-list__input_type_select');
    this._social = social;
    this._uniqueSocialServicesArray = new Set(
      this._social.shortList.map(type => type.type)
    );
    this._socialsName = document
      .querySelector('[data-socials]')
      .getAttribute('data-socials')
      .split('.');
    this._socialServices = this._socialsName[1];
    this._setServiceItem = setServiceItem;
    this._servicesContaner = servicesContaner;
  }

  _setServiceItems = serviceItems => {
    serviceItems.forEach(social => {
      this._setServiceItem(social);
    });
  };

  _getFilterElement() {
    return document
      .getElementById('service-select')
      .content.querySelector('.service-list__option')
      .cloneNode(true);
  }

  _setEventListeners() {
    this._select.addEventListener('input', e => {
      this._servicesContaner.innerHTML = '';
      const filterArray = this._social.shortList.filter(
        item => item.type.endsWith(e.target.value) && item
      );
      this._setServiceItems(filterArray);
    });
  }

  _createFilterServices() {
    this._uniqueSocialServicesArray.forEach(type => {
      const [title, value] = type.split(' ');
      const select = this._getFilterElement();
      select.textContent = title;
      select.value = value;

      this._select.append(select);
    });
  }

  _checkService() {
    if (this._social.services[this._socialServices]) {
      this._setServiceItems(this._social.services[this._socialServices]);
      this._form.classList.add('service-list__form_hided');
    } else {
      this._servicesContaner.insertAdjacentHTML(
        'beforeend',
        `<li class="service-list__error-message">
        Мы работаем над загрузкой данных для этой страницы. Пока можете перейти на общую страницу с услугами по кнопке ниже.
        </li>`
      );
    }
  }
  initializeFilter() {
    if (this._socialsName.length > 1) {
      this._checkService();
    } else {
      this._form.classList.remove('service-list__form_hided');
      this._setServiceItems(this._social.shortList);

      this._createFilterServices();
      this._setEventListeners();
    }
  }
}
