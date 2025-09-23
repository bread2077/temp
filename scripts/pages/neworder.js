import '../../styles/neworder.css';

import FilterCategories from '../components/FilterCategories.js';

const select = document.querySelector('select.select_card_type_category');

const btns = document.querySelector('.platform-btn-container');
if (btns && select) {
  const categoriesFilter = new FilterCategories(btns, select, categories, {
    btnSelector: '.platform-btn',
  });
  categoriesFilter.setEventListeners();
}
