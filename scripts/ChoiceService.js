import { services } from './services.js';
import { socials } from './socials.js';

export default class ChoiceService {
  constructor(choiceSelector) {
    this._choiceSelector = choiceSelector;
    this._choiceBlock = document.getElementById(choiceSelector);
    this._choiceList = this._choiceBlock.querySelector('.culc__list');
    this._choiceSubList = this._choiceBlock.querySelector('.culc__sublist');
    this._choiceAmount = this._choiceBlock.querySelector('.culc__amount');
    this._choiceCost = this._choiceBlock.querySelector('.culc__cost');
    this._containerChoiceServices = this._choiceBlock.querySelector('.choice__services');
    this._containerChoiceDescription = this._choiceBlock.querySelector('.choice__description');
  }

  _getChoiceItem(selector) {
    return document
    .getElementById(selector)
    .content
    .querySelector(`.${selector}-container`)
    .cloneNode(true);
  }

  _createChoiceItemWithImage(name, img, service, templateSelector, serviceName) {
    const element = this._getChoiceItem(templateSelector);
    element.querySelector('.culc__image').src = img;
    element.querySelector('.culc__image').dataset.name = name;
    element.querySelector('.culc__image').dataset.sevice = service;
    const serviceNameElement = element.querySelector('.culc__text');
    if(serviceName) {
      serviceNameElement.textContent = serviceName;
    }

    return element;
  }

  _createChoiceItemWithText(name, img, service, templateSelector) {
    const element = this._createChoiceItemWithImage(name, img, service, templateSelector);
    element.querySelector('.culc__image').classList.add('culc__image_type_service');
    element.querySelector('.culc__text').textContent = services[service].name;
    return element
  }

  _renderServices(e) {
    for(let service in socials[e.target.dataset.name].services) {
      this._choiceSubList.append(this._createChoiceItemWithText(e.target.dataset.name, services[service].img, service, 'culc-template-text'));
    }
  }

  _cleanText(element) {
    element.textContent = '';
  }

  _cleanCheckService(section) {
    const openedSocial = section.querySelector('.culc__image-container_active');
    if(openedSocial) { openedSocial.classList.remove('culc__image-container_active') }
  }

  _setCheckService(e) {
    e.target.closest('.culc__image-container').classList.add('culc__image-container_active');
  }

  _choiceService(e, section) {
    this._cleanCheckService(section);
    this._setCheckService(e);
  }

  _showServices(e) {
    if(e.target.classList.contains('culc__image')) {

      this._choiceService(e, this._choiceList);
      this._cleanText(this._choiceSubList);
      this._containerChoiceDescription.classList.add('choice__description_hided');
      this._containerChoiceServices.classList.remove('choice__services_hided');
      this._renderServices(e);
    }
  }

  _showDescriptionService(e) {
    const card = e.target.closest('.culc__item')

    this._choiceService(e, this._choiceSubList);
    if(card) {
      const cardImage = card.querySelector('.culc__image');
      const item = socials[cardImage.dataset.name].services[cardImage.dataset.sevice];
      this._choiceAmount.textContent = item.amount;
      this._choiceCost.textContent = item.cost;
      this._containerChoiceDescription.classList.remove('choice__description_hided');
    }
  }

  setEventListeners() {
    this._choiceList.addEventListener('click', (e) => this._showServices(e));
    this._choiceSubList.addEventListener('click', (e) => this._showDescriptionService(e));
  }

}
