let icon_menu = document.getElementsByClassName('menu__icon__phone')[0];
let phone__menu = document.getElementsByClassName('menu__phone')[0];
let burg = document.getElementsByClassName('burger')[0];

phone__menu.style.transform = 'translateX(100%)';
function dropDown(thiss) {
  if (thiss.parentElement.nextElementSibling.style.display == "none" || thiss.parentElement.nextElementSibling.style.display == "") {
    thiss.parentElement.nextElementSibling.style.display = "block";
    thiss.style.transform = 'rotate(180deg)'
  }
  else {
    thiss.parentElement.nextElementSibling.style.display = "none";
    thiss.style.transform = 'rotate(0deg)'
  }
}
function hideElement() {
  document.getElementsByClassName("btn__blue1")[0].style.display = "none"
  for (var i = 0; i < document.getElementsByClassName("price").length; i++) {
    document.getElementsByClassName("price")[i].style.display = "block"
  }
}
try {
  $('.sevice__group').slick({
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 680,
        settings: {
          dots: true,
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

  $('.slider__blog').slick({
    dots: true,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
    ]
  });
  $('.feedback__slider').slick({
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  });
  $('.faq__slider').slick({
    dots: true,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
    ]
  });

} catch (e) {
}
function open__phone__menu() {
  icon_menu.style.display = 'none';
  phone__menu.style.transform = 'translateX(0%)';
  document.body.style = 'overflow-y: hidden !important;'
  document.getElementById("black__background").style.opacity = "1"
}
function close__phone__menu() {
  icon_menu.style.display = 'block';
  document.body.style = 'overflow-y: visble;'
  phone__menu.style.transform = 'translateX(100%)';
  document.getElementById("black__background").style.opacity = "0"
}
function open__burg() {
  burg.style.transform = 'translateX(0%)';
}
function close__burg() {
  burg.style.transform = 'translateX(100%)';
}
let show = document.getElementById('hidden_Text');
let open = document.getElementById('open_text');
let showmass = document.getElementById('hidden_Text_2');
let open2 = document.getElementById('open_text_2');
function OllText() {
  if (show.style.display = 'none') {
    show.style.display = 'block';
    open.style.display = 'none'
  }

}
function OllText2() {
  if (showmass.style.display = 'none') {
    showmass.style.display = 'block';
    open2.style.display = 'none';
  }

}
function massovi_block() {
  let show = document.getElementById('hidden_blocks');
  let vis = document.getElementById('visible_blocks');
  if (show.style.display = 'none') {
    show.style.display = 'block';
    vis.style.display = 'none';
    document.getElementsByClassName('first_active')[0].style.background = 'white';
    document.getElementsByClassName('note_active')[0].style.background = '#FF725E';
    document.getElementsByClassName('first_active_text')[0].style.color = 'rgba(255, 114, 94,0.32)';
    document.getElementsByClassName('note_active_text')[0].style.color = 'white';
  }
}
function Bistri_block() {
  let show = document.getElementById('hidden_blocks');
  let vis = document.getElementById('visible_blocks');
  if (vis.style.display = 'none') {
    show.style.display = 'none';
    vis.style.display = 'block';
    document.getElementsByClassName('note_active')[0].style.background = 'white';
    document.getElementsByClassName('first_active')[0].style.background = '#FF725E';
    document.getElementsByClassName('note_active_text')[0].style.color = 'rgba(255, 114, 94,0.32)';
    document.getElementsByClassName('first_active_text')[0].style.color = 'white';
  }
}
function hide() {
  document.getElementsByClassName("form")[0].classList.toggle("d-nonee")
  document.getElementById("+").classList.toggle("d-nonee")
  document.getElementById("-").classList.toggle("d-nonee")
}
function openElement() {
  console.log("asdasd");
  document.getElementById("popup").classList.toggle("message__show")
  document.body.style = "overflow: hidden;"
}



//Select
let selects = document.getElementsByTagName('select');
if (selects.length > 0) {
  selects_init();
}
function selects_init() {
  for (let index = 0; index < selects.length; index++) {
    const select = selects[index];
    select_init(select);
  }
  //select_callback();
  document.addEventListener('click', function (e) {
    selects_close(e);
  });
  document.addEventListener('keydown', function (e) {
    if (e.which == 27) {
      selects_close(e);
    }
  });
}
function selects_close(e) {
  const selects = document.querySelectorAll('.select');
  if (!e.target.closest('.select')) {
    for (let index = 0; index < selects.length; index++) {
      const select = selects[index];
      const select_body_options = select.querySelector('.select__options');
      select.classList.remove('_active');
      _slideUp(select_body_options, 100);
    }
  }
}
function select_init(select) {
  const select_parent = select.parentElement;
  const select_modifikator = select.getAttribute('class');
  const select_selected_option = select.querySelector('option:checked');
  select.setAttribute('data-default', select_selected_option.value);
  select.style.display = 'none';

  select_parent.insertAdjacentHTML('beforeend', '<div class="select select_' + select_modifikator + '"></div>');

  let new_select = select.parentElement.querySelector('.select');
  new_select.appendChild(select);
  select_item(select);
}
function select_item(select) {
  const select_parent = select.parentElement;
  const select_items = select_parent.querySelector('.select__item');
  const select_options = select.querySelectorAll('option');
  const select_selected_option = select.querySelector('option:checked');
  const select_selected_text = select_selected_option.text;
  const select_type = select.getAttribute('data-type');

  if (select_items) {
    select_items.remove();
  }

  let select_type_content = '';
  if (select_type == 'input') {
    select_type_content = '<div class="select__value icon-select-arrow"><input autocomplete="off" type="text" name="form[]" value="' + select_selected_text + '" data-error="Ошибка" data-value="' + select_selected_text + '" class="select__input"></div>';
  } else {
    select_type_content = '<div class="select__value icon-select-arrow"><span>' + select_selected_text + '</span></div>';
  }

  select_parent.insertAdjacentHTML('beforeend',
    '<div class="select__item">' +
    '<div class="select__title">' + select_type_content + '</div>' +
    '<div class="select__options">' + select_get_options(select_options) + '</div>' +
    '</div></div>');

  select_actions(select, select_parent);
}
function select_actions(original, select) {
  const select_item = select.querySelector('.select__item');
  const select_body_options = select.querySelector('.select__options');
  const select_options = select.querySelectorAll('.select__option');
  const select_type = original.getAttribute('data-type');
  const select_input = select.querySelector('.select__input');

  select_item.addEventListener('click', function () {
    let selects = document.querySelectorAll('.select');
    for (let index = 0; index < selects.length; index++) {
      const select = selects[index];
      const select_body_options = select.querySelector('.select__options');
      if (select != select_item.closest('.select')) {
        select.classList.remove('_active');
        _slideUp(select_body_options, 100);
      }
    }
    _slideToggle(select_body_options, 100);
    select.classList.toggle('_active');
  });

  for (let index = 0; index < select_options.length; index++) {
    const select_option = select_options[index];
    const select_option_value = select_option.getAttribute('data-value');
    const select_option_text = select_option.innerHTML;

    if (select_type == 'input') {
      select_input.addEventListener('keyup', select_search);
    } else {
      if (select_option.getAttribute('data-value') == original.value) {
        select_option.style.display = 'none';
      }
    }
    select_option.addEventListener('click', function () {
      for (let index = 0; index < select_options.length; index++) {
        const el = select_options[index];
        el.style.display = 'block';
      }
      if (select_type == 'input') {
        select_input.value = select_option_text;
        original.value = select_option_value;
      } else {
        select.querySelector('.select__value').innerHTML = '<span>' + select_option_text + '</span>';
        original.value = select_option_value;
        select_option.style.display = 'none';
      }
    });
  }
}
function select_get_options(select_options) {
  if (select_options) {
    let select_options_content = '';
    for (let index = 0; index < select_options.length; index++) {
      const select_option = select_options[index];
      const select_option_value = select_option.value;
      if (select_option_value != '') {
        const select_option_text = select_option.text;
        select_options_content = select_options_content + '<div data-value="' + select_option_value + '" class="select__option">' + select_option_text + '</div>';
      }
    }
    return select_options_content;
  }
}
function select_search(e) {
  let select_block = e.target.closest('.select ').querySelector('.select__options');
  let select_options = e.target.closest('.select ').querySelectorAll('.select__option');
  let select_search_text = e.target.value.toUpperCase();

  for (let i = 0; i < select_options.length; i++) {
    let select_option = select_options[i];
    let select_txt_value = select_option.textContent || select_option.innerText;
    if (select_txt_value.toUpperCase().indexOf(select_search_text) > -1) {
      select_option.style.display = "";
    } else {
      select_option.style.display = "none";
    }
  }
}
function selects_update_all() {
  let selects = document.querySelectorAll('select');
  if (selects) {
    for (let index = 0; index < selects.length; index++) {
      const select = selects[index];
      select_item(select);
    }
  }
}


let inputs = document.querySelectorAll('input[data-value],textarea[data-value]');
inputs_init(inputs);

function inputs_init(inputs) {
  if (inputs.length > 0) {
    for (let index = 0; index < inputs.length; index++) {
      const input = inputs[index];
      const input_g_value = input.getAttribute('data-value');
      input_placeholder_add(input);
      if (input.value != '' && input.value != input_g_value) {
        input_focus_add(input);
      }
      input.addEventListener('focus', function (e) {
        if (input.value == input_g_value) {
          input_focus_add(input);
          input.value = '';
        }
        if (input.getAttribute('data-type') === "pass") {
          input.setAttribute('type', 'password');
        }
        if (input.classList.contains('_date')) {
          /*
          input.classList.add('_mask');
          Inputmask("99.99.9999", {
            //"placeholder": '',
            clearIncomplete: true,
            clearMaskOnLostFocus: true,
            onincomplete: function () {
             input_clear_mask(input, input_g_value);
            }
          }).mask(input);
          */
        }
        if (input.classList.contains('_phone')) {
          //'+7(999) 999 9999'
          //'+38(999) 999 9999'
          //'+375(99)999-99-99'
          input.classList.add('_mask');
          Inputmask("+7 (999) 9999999", {
            //"placeholder": '',
            clearIncomplete: true,
            clearMaskOnLostFocus: true,
            onincomplete: function () {
              input_clear_mask(input, input_g_value);
            }
          }).mask(input);
        }
        if (input.classList.contains('_digital')) {
          input.classList.add('_mask');
          Inputmask("9{1,}", {
            "placeholder": '',
            clearIncomplete: true,
            clearMaskOnLostFocus: true,
            onincomplete: function () {
              input_clear_mask(input, input_g_value);
            }
          }).mask(input);
        }
        form_remove_error(input);
      });
      input.addEventListener('blur', function (e) {
        if (input.value == '') {
          input.value = input_g_value;
          input_focus_remove(input);
          if (input.classList.contains('_mask')) {
            input_clear_mask(input, input_g_value);
          }
          if (input.getAttribute('data-type') === "pass") {
            input.setAttribute('type', 'text');
          }
        }
      });
      if (input.classList.contains('_date')) {
        datepicker(input, {
          customDays: ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"],
          customMonths: ["Янв", "Фев", "Мар", "Апр", "Май", "Июн", "Июл", "Авг", "Сен", "Окт", "Ноя", "Дек"],
          formatter: (input, date, instance) => {
            const value = date.toLocaleDateString()
            input.value = value
          },
          onSelect: function (input, instance, date) {
            input_focus_add(input.el);
          }
        });
      }
    }
  }
}
function input_placeholder_add(input) {
  const input_g_value = input.getAttribute('data-value');
  if (input.value == '' && input_g_value != '') {
    input.value = input_g_value;
  }
}
function input_focus_add(input) {
  input.classList.add('_focus');
  input.parentElement.classList.add('_focus');
}
function input_focus_remove(input) {
  input.classList.remove('_focus');
  input.parentElement.classList.remove('_focus');
}
function input_clear_mask(input, input_g_value) {
  input.inputmask.remove();
  input.value = input_g_value;
  input_focus_remove(input);
}


let quantityButtons = document.querySelectorAll('.quantity__button');
if (quantityButtons.length > 0) {
  for (let index = 0; index < quantityButtons.length; index++) {
    const quantityButton = quantityButtons[index];
    quantityButton.addEventListener("click", function (e) {
      let value = parseInt(quantityButton.closest('.quantity').querySelector('input').value);
      if (quantityButton.classList.contains('quantity__button_plus')) {
        value++;
      } else {
        value = value - 1;
        if (value < 1) {
          value = 1
        }
      }
      quantityButton.closest('.quantity').querySelector('input').value = value;
    });
  }
}

const priceSlider = document.querySelector('.sidebar__filters-price');
if (priceSlider) {
  noUiSlider.create(priceSlider, {
    start: [0, 200000],
    connect: true,
    tooltips: [wNumb({ decimals: 0 }), wNumb({ decimals: 0 })],
    range: {
      'min': [0],
      'max': [200000]
    }
  });

  const priceStart = document.getElementById('price-start');
  const priceEnd = document.getElementById('price-end');
  priceStart.addEventListener('change', setPriceValues);
  priceEnd.addEventListener('change', setPriceValues);

  function setPriceValues() {
    let priceStartValue;
    let priceEndValue;
    if (priceStart.value != '') {
      priceStartValue = priceStart.value;
    }
    if (priceEnd.value != '') {
      priceEndValue = priceEnd.value;
    }
    priceSlider.noUiSlider.set([priceStartValue, priceEndValue]);
  }
}
let scr_body = document.querySelector('body');
let scr_blocks = document.querySelectorAll('._scr-sector');
let scr_items = document.querySelectorAll('._scr-item');
let scr_fix_block = document.querySelectorAll('._side-wrapper');
let scr_min_height = 750;

let scrolling = true;
let scrolling_full = true;

let scrollDirection = 0;


let _slideUp = (target, duration = 500) => {
  target.style.transitionProperty = 'height, margin, padding';
  target.style.transitionDuration = duration + 'ms';
  target.style.height = target.offsetHeight + 'px';
  target.offsetHeight;
  target.style.overflow = 'hidden';
  target.style.height = 0;
  target.style.paddingTop = 0;
  target.style.paddingBottom = 0;
  target.style.marginTop = 0;
  target.style.marginBottom = 0;
  window.setTimeout(() => {
    target.style.display = 'none';
    target.style.removeProperty('height');
    target.style.removeProperty('padding-top');
    target.style.removeProperty('padding-bottom');
    target.style.removeProperty('margin-top');
    target.style.removeProperty('margin-bottom');
    target.style.removeProperty('overflow');
    target.style.removeProperty('transition-duration');
    target.style.removeProperty('transition-property');
    target.classList.remove('_slide');
  }, duration);
}
let _slideDown = (target, duration = 500) => {
  target.style.removeProperty('display');
  let display = window.getComputedStyle(target).display;
  if (display === 'none')
    display = 'block';

  target.style.display = display;
  let height = target.offsetHeight;
  target.style.overflow = 'hidden';
  target.style.height = 0;
  target.style.paddingTop = 0;
  target.style.paddingBottom = 0;
  target.style.marginTop = 0;
  target.style.marginBottom = 0;
  target.offsetHeight;
  target.style.transitionProperty = "height, margin, padding";
  target.style.transitionDuration = duration + 'ms';
  target.style.height = height + 'px';
  target.style.removeProperty('padding-top');
  target.style.removeProperty('padding-bottom');
  target.style.removeProperty('margin-top');
  target.style.removeProperty('margin-bottom');
  window.setTimeout(() => {
    target.style.removeProperty('height');
    target.style.removeProperty('overflow');
    target.style.removeProperty('transition-duration');
    target.style.removeProperty('transition-property');
    target.classList.remove('_slide');
  }, duration);
}
let _slideToggle = (target, duration = 500) => {
  if (!target.classList.contains('_slide')) {
    target.classList.add('_slide');
    if (window.getComputedStyle(target).display === 'none') {
      return _slideDown(target, duration);
    } else {
      return _slideUp(target, duration);
    }
  }
}