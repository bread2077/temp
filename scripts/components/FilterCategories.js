export default class FilterCategories {
  constructor(btns, selector, categories, options) {
    this._btns = btns;
    this._selector = selector;
    this._categories = categories;
    this._options = options;
  }

  _createCategory(category) {
    return `<option value='${category.id}'>${category.name}</option>`;
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
    return this._categories.filter(category => category.name.includes(name));
  };

  _dispatch = () => {
    const changeEvent = new Event('change', { bubbles: true });
    this._selector.dispatchEvent(changeEvent);
  };

  _choiceCategories = e => {
    const button = e.target.closest(this._options.btnSelector);

    if (!button) return;

    const platformName = button.dataset.social;

    this._cleanSelector();

    if (!platformName) {
      this._renderCategories(this._categories);
    } else {
      this._renderCategories(this._filterCategories(platformName));
    }

    this._dispatch();
  };

  setEventListeners = () => {
    this._btns.addEventListener('click', this._choiceCategories);
  };
}
