import { socials } from '../utils/socials.v2.js';
import { services } from '../utils/services.js';
import { debounce } from '../utils/utils.js';

class ServCulc {
  static classes = {
    selectItemClass: 'servculc__select-item',
    selectButtonClass: 'servculc__select-button',
    activeButtonClass: 'servculc__select-button_selected',
    selectActiveButtonClass: 'servculc__select-button_active',
    selectListClass: 'servculc__select-list',
    selectIconClass: 'servculc__select-icon',
    selectTextClass: 'servculc__select-text',
    selectOpenedClass: 'servculc__select_opened',
    selectListOpenedClass: 'servculc__select-list_opened',
    typeItemClass: 'servculc__type-item',
    tagButtonClass: 'servculc__tag-button',
    tagButtonSelectedClass: 'servculc__tag-button_selected',
    tagIconClass: 'servculc__tag-icon',
    tagCostClass: 'servculc__tag-cost',
    semiActiveClass: 'servculc__wrapper_type_semi_active',
  };

  constructor() {
    this.socials = Object.values(socials);
    this.culcContainer = document.querySelector('.servculc__container');
    this.selectedSocial = this.culcContainer.dataset.social;
    this.selectedType = this.culcContainer.dataset.type;

    this.culcSelect = this.culcContainer.querySelector('.servculc__select');
    this.typeContainer = this.culcContainer.querySelector(
      '.servculc__type-list'
    );
    this.variantContainer = this.culcContainer.querySelector(
      '.servculc__variant-list'
    );
    this.semiContainer = this.culcContainer.querySelector(
      '.servculc__semi-list'
    );
    this.semiParentContainer = this.culcContainer.querySelector(
      '.servculc__wrapper_type_semi'
    );
    this.selectedSocial = socials[this.selectedSocial] || this.socials[0];

    this.range = this.culcContainer.querySelector('.servculc__range');

    this.count = this.culcContainer.querySelector('.servculc__count');

    this.costEl = this.culcContainer.querySelector('.servculc__cost');

    this.priceTitle = this.culcContainer.querySelector(
      '.servculc__price-number'
    );

    this.button = this.culcContainer.querySelector('.servculc__button');

    this.initSelect();
  }

  setButtonText = () => {
    let text = '';

    if (window.matchMedia('(max-width: 500px)').matches) {
      text = 'Хочу';
    } else {
      text = 'Зарегистрироваться и оформить задачу';
    }
    this.button.textContent = text;
  };

  createTagButton = ({ name, type, cost, icon }) => {
    const { tagIconClass, tagButtonClass, tagCostClass } = ServCulc.classes;

    return `
      <button ${type ? `data-type="${type}"` : ''} class="${tagButtonClass}">
        ${icon ? `<img class="${tagIconClass}" src="${icon}"/>` : ''}
        <span>${name}</span>
        ${cost ? `<span class="${tagCostClass}">${cost}</span>` : ''}
      </button>
    `;
  };

  setContainersOpennesWithChild = container => {
    const isArray = Array.isArray(container);
    if (isArray) {
      this.setVariantOptions(container);
      this.setOpennessSemiContainer(false);
    } else {
      this.semiExamples = Object.values(container);
      this.setSemiOptions(...this.semiExamples);
    }
  };

  setTypeOptions = (list, firstChild) => {
    const { typeItemClass, tagButtonClass, tagButtonSelectedClass } =
      ServCulc.classes;
    this.typeContainer.innerHTML = '';
    const container = new DocumentFragment();

    for (let i in list) {
      const item = services[i];
      const li = document.createElement('li');

      li.classList.add(typeItemClass);
      li.innerHTML = this.createTagButton({ name: item.name, type: i });
      container.append(li);
    }

    this.typeContainer.append(container);

    this.typeBtnsList = this.typeContainer.querySelectorAll(
      `.${tagButtonClass}`
    );

    const firstKey = list[firstChild] || Object.values(list)[0];

    const selectedBtn = firstChild
      ? Array.from(this.typeBtnsList).find(
          btn => btn.dataset.type === firstChild
        )
      : this.typeBtnsList[0];
    selectedBtn.classList.add(tagButtonSelectedClass);
    this.setContainersOpennesWithChild(firstKey);
  };

  createBtnsList = list => {
    const container = new DocumentFragment();

    for (let item of list) {
      const { name, cost, icon, type } = item;
      const li = document.createElement('li');
      li.classList.add(ServCulc.classes.typeItemClass);
      li.innerHTML = this.createTagButton({ name, type, cost, icon });

      container.append(li);
    }
    return container;
  };

  setVariantOptions = list => {
    const { tagButtonClass } = ServCulc.classes;

    this.variantContainer.innerHTML = '';
    this.variantContainer.append(this.createBtnsList(list));
    this.btnTypeList = this.variantContainer.querySelectorAll(
      `.${tagButtonClass}`
    );
    this.setActiveTypeBtn(this.btnTypeList[0]);
  };

  setSemiOptions = list => {
    const { tagButtonClass, tagButtonSelectedClass } = ServCulc.classes;

    this.semiContainer.innerHTML = '';
    this.semiContainer.append(this.createBtnsList(list));
    this.btnSemiList = this.semiContainer.querySelectorAll(
      `.${tagButtonClass}`
    );
    this.setActiveTagBtn(
      this.btnSemiList[0],
      this.btnSemiList,
      tagButtonSelectedClass
    );
    this.setOpennessSemiContainer(true);
    this.setVariantOptions(list[0].items);
  };

  setActiveTagBtn = (btn, list, className) => {
    list.forEach(btn => btn.classList.remove(className));
    btn.classList.add(className);
  };

  setActiveTypeBtn = btn => {
    const { tagButtonSelectedClass, tagCostClass } = ServCulc.classes;

    this.activeTypeBtn = btn;
    this.setActiveTagBtn(btn, this.btnTypeList, tagButtonSelectedClass);

    const cost = btn.querySelector(`.${tagCostClass}`);
    this.cost = cost.textContent;
    this.setRange(this.range.value);
  };

  setOpennessList = isOpened => {
    const { selectOpenedClass, selectListOpenedClass } = ServCulc.classes;

    this.culcSelect.classList[isOpened ? 'remove' : 'add'](selectOpenedClass);
    this.list.classList[isOpened ? 'remove' : 'add'](selectListOpenedClass);
    this.list.style.height = isOpened ? '0px' : `${this.list.scrollHeight}px`;
  };

  onActiveButtonClick = () => {
    const isOpened = this.list.classList.contains(
      ServCulc.classes.selectListOpenedClass
    );
    this.setOpennessList(isOpened);
  };

  onSelectItemClick = ({ target }) => {
    const {
      selectActiveButtonClass,
      selectIconClass,
      selectTextClass,
      selectButtonClass,
    } = ServCulc.classes;
    const current = target.closest(`.${selectButtonClass}`);
    if (!current) return;

    this.setActiveTagBtn(current, this.selectBtns, selectActiveButtonClass);

    const currentText = current.querySelector(`.${selectTextClass}`);
    const currenIcon = current.querySelector(`.${selectIconClass}`);

    const activeBtnText = this.activeButton.querySelector(
      `.${selectTextClass}`
    );
    const activeBtnIcon = this.activeButton.querySelector(
      `.${selectIconClass}`
    );

    activeBtnText.textContent = currentText.textContent;
    activeBtnIcon.src = currenIcon.src;
    this.selectedSocial = socials[current.dataset.id];

    this.setTypeOptions(this.selectedSocial.services);
    this.setOpennessList(true);
  };

  setOpennessSemiContainer = (open = true) => {
    this.semiParentContainer.classList[open ? 'add' : 'remove'](
      ServCulc.classes.semiActiveClass
    );
    // this.semiParentContainer.style.height = open
    //   ? `${this.semiParentContainer.scrollHeight}px`
    //   : '0px';
  };

  onTypeButtonClick = ({ target }) => {
    const { tagButtonClass, tagButtonSelectedClass } = ServCulc.classes;
    const current = target.closest(`.${tagButtonClass}`);

    if (!current) return;

    this.selectedType = current.dataset.type;
    this.setActiveTagBtn(current, this.typeBtnsList, tagButtonSelectedClass);

    const item = this.selectedSocial.services[current.dataset.type];
    this.setContainersOpennesWithChild(item);
  };

  onVariantButtonClick = ({ target }) => {
    const { tagButtonClass } = ServCulc.classes;
    const current = target.closest(`.${tagButtonClass}`);

    if (!current) return;
    this.setActiveTypeBtn(current);
  };

  onSemiButtonClick = ({ target }) => {
    const { tagButtonClass, tagButtonSelectedClass } = ServCulc.classes;
    const current = target.closest(`.${tagButtonClass}`);

    if (!current) return;
    const [searchBlock] = this.semiExamples;
    const selectedItem = searchBlock.find(
      item => item.type === current.dataset.type
    );
    this.setActiveTagBtn(current, this.btnSemiList, tagButtonSelectedClass);
    this.setVariantOptions(selectedItem.items);
  };

  setRangeProgress = value => {
    const progress = (value / this.range.max) * 100;

    this.range.style.background = `linear-gradient(to right, var(--color-primary) ${progress}%, #fff ${progress}%)`;
  };

  setCost = value => {
    const costReg = /\d{1,}(.\d{1,})?/g;
    this.costEl.textContent =
      value > 0 ? `${this.devideNum(value * this.cost.match(costReg))} ₽` : '-';
    this.priceTitle.textContent = this.cost;
  };

  setRange = value => {
    this.setRangeProgress(value);
    this.setCost(value);
    this.count.textContent = `${this.devideNum(value)} шт`;
  };

  devideNum = value => {
    let res = '';
    let residue = '';

    if (value % 1 !== 0) {
      const strValue = String(value.toFixed(1));
      const index = strValue.indexOf('.');
      residue = strValue.substring(index);
      value = strValue.substring(0, index);
    }

    while (value >= 100) {
      res = ` ${String(value).slice(-3)}${res}`;
      value = String(value).slice(0, -3);
    }
    return `${value}${res}${residue}`;
  };

  debounceInputChange = target => {
    this.setRange(target.value);
    this.range.value = target.value || 0;
  };

  onRangeChange = ({ target }) => {
    this.setRange(target.value);
    this.count.value = target.value;
  };

  onInputChange = ({ target }) => {
    debounce(this.debounceInputChange, 600)(target);
  };

  initSelect = () => {
    const {
      selectIconClass,
      selectTextClass,
      selectButtonClass,
      activeButtonClass,
      selectListClass,
      selectActiveButtonClass,
      selectItemClass,
    } = ServCulc.classes;

    this.activeButton = document.createElement('button');
    this.activeButton.classList.add(selectButtonClass, activeButtonClass);
    this.activeButton.innerHTML = `
        <img class="${selectIconClass}" src="${this.selectedSocial.img}"/>
        <span class="${selectTextClass}">${this.selectedSocial.name}</span>
    `;
    this.culcSelect.append(this.activeButton);

    this.list = document.createElement('ul');
    this.list.classList.add(selectListClass, 'list');
    this.socials.forEach(social => {
      const activeClass =
        social.name === this.selectedSocial.name ? selectActiveButtonClass : '';
      const li = `
        <li class="${selectItemClass}">
          <button data-id="${social.type}" class="${selectButtonClass} ${activeClass}">
            <img class="${selectIconClass}" src="${social.img}"/>
            <span class="${selectTextClass}">${social.name}</span>
            </button>
        </li>
        `;
      this.list.insertAdjacentHTML('beforeend', li);
    });

    this.selectBtns = this.list.querySelectorAll(
      `.${ServCulc.classes.selectButtonClass}`
    );

    this.culcSelect.append(this.list);

    this.setTypeOptions(this.selectedSocial.services, this.selectedType);

    this.setRange(this.range.value);

    this.setButtonText();

    this.list.addEventListener('click', this.onSelectItemClick);
    this.activeButton.addEventListener('click', this.onActiveButtonClick);
    this.typeContainer.addEventListener('click', this.onTypeButtonClick);
    this.semiContainer.addEventListener('click', this.onSemiButtonClick);
    this.variantContainer.addEventListener('click', this.onVariantButtonClick);
    this.range.addEventListener('input', this.onRangeChange);
    this.count.addEventListener('input', this.onInputChange);
  };
}

const survCulc = new ServCulc();
