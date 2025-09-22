export default class FilterCategories {
  constructor(btns, selector, categories, options) {
    this._btns = btns;
    this._selector = selector;
    this._categories = categories;
    this._options = options;

    this._asd = this._btns.querySelectorAll('[data-social-main]');
    this._mainCategories = Array.from(this._asd)
      .map(btn => btn.dataset.social)
      .join('|');

    // this._mainCategories = [
    //   'telegram',
    //   'instagram',
    //   'вконтакте',
    //   'tiktok',
    //   'youtube',
    //   'twitch',
    //   'twitter',
    //   'facebook',
    //   'рутуб',
    //   'max',
    // ];
  }

  _createCategoryImage = category => {
    if (category.icon?.icon_type === 'icon') {
      return `<span class="${category.icon.icon}"></span>`;
    }

    if (category.icon?.icon_type === 'emoji') {
      return `<span>${category.icon.icon}</span>`;
    }

    if (category.icon?.icon_type === 'image') {
      return `<img src="${category.icon.url}" alt="${category.name}" class="img-responsive btn-group-vertical">`;
    }
  };

  _createCategory(category) {
    return `<option data-icon='${this._createCategoryImage(category)}' value='${
      category.id
    }'>${category.name}</option>`;
  }

  _renderCategories = categories => {
    categories.forEach(category => {
      this._selector.insertAdjacentHTML(
        'beforeend',
        this._createCategory(category)
      );
    });
  };

  _cleanSelector = () => {
    this._selector.innerHTML = '';
  };

  _filterCategories = name => {
    const mainRegex = new RegExp(`${this._mainCategories}`, 'gi');

    if (name.match(mainRegex)) {
      const regex = new RegExp(`${name}`, 'gi');

      return this._categories.filter(category => category.name.match(regex));
    } else {
      return this._categories.filter(
        category => !category.name.match(mainRegex)
      );
    }
  };

  _dispatch = () => {
    const changeEvent = new Event('change', { bubbles: true });
    this._selector.dispatchEvent(changeEvent);
  };

  _toggleActiveBtn = button => {
    this._activeBtn?.classList.toggle('_active', false);
    this._activeBtn = button;
    button.classList.toggle('_active', true);
  };

  _choiceCategories = e => {
    const button = e.target.closest(this._options.btnSelector);

    if (!button) return;

    this._toggleActiveBtn(button);

    const platformName = button.dataset.social;

    this._cleanSelector();

    const filteredCategories = this._filterCategories(platformName);

    if (platformName && filteredCategories?.length) {
      this._renderCategories(filteredCategories);
    } else {
      this._renderCategories(this._categories);
    }
    this._dispatch();
  };

  setEventListeners = () => {
    this._btns.addEventListener('click', this._choiceCategories);
  };
}
