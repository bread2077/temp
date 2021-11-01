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
/*! smooth-scroll v16.1.2 | (c) 2020 Chris Ferdinandi | MIT License | http://github.com/cferdinandi/smooth-scroll */
window.Element && !Element.prototype.closest && (Element.prototype.closest = function (e) { var t, n = (this.document || this.ownerDocument).querySelectorAll(e), o = this; do { for (t = n.length; 0 <= --t && n.item(t) !== o;); } while (t < 0 && (o = o.parentElement)); return o }), (function () { if ("function" == typeof window.CustomEvent) return; function e(e, t) { t = t || { bubbles: !1, cancelable: !1, detail: void 0 }; var n = document.createEvent("CustomEvent"); return n.initCustomEvent(e, t.bubbles, t.cancelable, t.detail), n } e.prototype = window.Event.prototype, window.CustomEvent = e })(), (function () { for (var r = 0, e = ["ms", "moz", "webkit", "o"], t = 0; t < e.length && !window.requestAnimationFrame; ++t)window.requestAnimationFrame = window[e[t] + "RequestAnimationFrame"], window.cancelAnimationFrame = window[e[t] + "CancelAnimationFrame"] || window[e[t] + "CancelRequestAnimationFrame"]; window.requestAnimationFrame || (window.requestAnimationFrame = function (e, t) { var n = (new Date).getTime(), o = Math.max(0, 16 - (n - r)), a = window.setTimeout((function () { e(n + o) }), o); return r = n + o, a }), window.cancelAnimationFrame || (window.cancelAnimationFrame = function (e) { clearTimeout(e) }) })(), (function (e, t) { "function" == typeof define && define.amd ? define([], (function () { return t(e) })) : "object" == typeof exports ? module.exports = t(e) : e.SmoothScroll = t(e) })("undefined" != typeof global ? global : "undefined" != typeof window ? window : this, (function (q) { "use strict"; var I = { ignore: "[data-scroll-ignore]", header: null, topOnEmptyHash: !0, speed: 500, speedAsDuration: !1, durationMax: null, durationMin: null, clip: !0, offset: 0, easing: "easeInOutCubic", customEasing: null, updateURL: !0, popstate: !0, emitEvents: !0 }, F = function () { var n = {}; return Array.prototype.forEach.call(arguments, (function (e) { for (var t in e) { if (!e.hasOwnProperty(t)) return; n[t] = e[t] } })), n }, r = function (e) { "#" === e.charAt(0) && (e = e.substr(1)); for (var t, n = String(e), o = n.length, a = -1, r = "", i = n.charCodeAt(0); ++a < o;) { if (0 === (t = n.charCodeAt(a))) throw new InvalidCharacterError("Invalid character: the input contains U+0000."); 1 <= t && t <= 31 || 127 == t || 0 === a && 48 <= t && t <= 57 || 1 === a && 48 <= t && t <= 57 && 45 === i ? r += "\\" + t.toString(16) + " " : r += 128 <= t || 45 === t || 95 === t || 48 <= t && t <= 57 || 65 <= t && t <= 90 || 97 <= t && t <= 122 ? n.charAt(a) : "\\" + n.charAt(a) } return "#" + r }, L = function () { return Math.max(document.body.scrollHeight, document.documentElement.scrollHeight, document.body.offsetHeight, document.documentElement.offsetHeight, document.body.clientHeight, document.documentElement.clientHeight) }, x = function (e) { return e ? (t = e, parseInt(q.getComputedStyle(t).height, 10) + e.offsetTop) : 0; var t }, H = function (e, t, n, o) { if (t.emitEvents && "function" == typeof q.CustomEvent) { var a = new CustomEvent(e, { bubbles: !0, detail: { anchor: n, toggle: o } }); document.dispatchEvent(a) } }; return function (o, e) { var A, a, O, C, M = {}; M.cancelScroll = function (e) { cancelAnimationFrame(C), C = null, e || H("scrollCancel", A) }, M.animateScroll = function (i, c, e) { M.cancelScroll(); var s = F(A || I, e || {}), u = "[object Number]" === Object.prototype.toString.call(i), t = u || !i.tagName ? null : i; if (u || t) { var l = q.pageYOffset; s.header && !O && (O = document.querySelector(s.header)); var n, o, a, m, r, d, f, h, p = x(O), g = u ? i : (function (e, t, n, o) { var a = 0; if (e.offsetParent) for (; a += e.offsetTop, e = e.offsetParent;); return a = Math.max(a - t - n, 0), o && (a = Math.min(a, L() - q.innerHeight)), a })(t, p, parseInt("function" == typeof s.offset ? s.offset(i, c) : s.offset, 10), s.clip), y = g - l, v = L(), w = 0, S = (n = y, a = (o = s).speedAsDuration ? o.speed : Math.abs(n / 1e3 * o.speed), o.durationMax && a > o.durationMax ? o.durationMax : o.durationMin && a < o.durationMin ? o.durationMin : parseInt(a, 10)), E = function (e, t) { var n, o, a, r = q.pageYOffset; if (e == t || r == t || (l < t && q.innerHeight + r) >= v) return M.cancelScroll(!0), o = t, a = u, 0 === (n = i) && document.body.focus(), a || (n.focus(), document.activeElement !== n && (n.setAttribute("tabindex", "-1"), n.focus(), n.style.outline = "none"), q.scrollTo(0, o)), H("scrollStop", s, i, c), !(C = m = null) }, b = function (e) { var t, n, o; m || (m = e), w += e - m, d = l + y * (n = r = 1 < (r = 0 === S ? 0 : w / S) ? 1 : r, "easeInQuad" === (t = s).easing && (o = n * n), "easeOutQuad" === t.easing && (o = n * (2 - n)), "easeInOutQuad" === t.easing && (o = n < .5 ? 2 * n * n : (4 - 2 * n) * n - 1), "easeInCubic" === t.easing && (o = n * n * n), "easeOutCubic" === t.easing && (o = --n * n * n + 1), "easeInOutCubic" === t.easing && (o = n < .5 ? 4 * n * n * n : (n - 1) * (2 * n - 2) * (2 * n - 2) + 1), "easeInQuart" === t.easing && (o = n * n * n * n), "easeOutQuart" === t.easing && (o = 1 - --n * n * n * n), "easeInOutQuart" === t.easing && (o = n < .5 ? 8 * n * n * n * n : 1 - 8 * --n * n * n * n), "easeInQuint" === t.easing && (o = n * n * n * n * n), "easeOutQuint" === t.easing && (o = 1 + --n * n * n * n * n), "easeInOutQuint" === t.easing && (o = n < .5 ? 16 * n * n * n * n * n : 1 + 16 * --n * n * n * n * n), t.customEasing && (o = t.customEasing(n)), o || n), q.scrollTo(0, Math.floor(d)), E(d, g) || (C = q.requestAnimationFrame(b), m = e) }; 0 === q.pageYOffset && q.scrollTo(0, 0), f = i, h = s, u || history.pushState && h.updateURL && history.pushState({ smoothScroll: JSON.stringify(h), anchor: f.id }, document.title, f === document.documentElement ? "#top" : "#" + f.id), "matchMedia" in q && q.matchMedia("(prefers-reduced-motion)").matches ? q.scrollTo(0, Math.floor(g)) : (H("scrollStart", s, i, c), M.cancelScroll(!0), q.requestAnimationFrame(b)) } }; var t = function (e) { if (!e.defaultPrevented && !(0 !== e.button || e.metaKey || e.ctrlKey || e.shiftKey) && "closest" in e.target && (a = e.target.closest(o)) && "a" === a.tagName.toLowerCase() && !e.target.closest(A.ignore) && a.hostname === q.location.hostname && a.pathname === q.location.pathname && /#/.test(a.href)) { var t, n; try { t = r(decodeURIComponent(a.hash)) } catch (e) { t = r(a.hash) } if ("#" === t) { if (!A.topOnEmptyHash) return; n = document.documentElement } else n = document.querySelector(t); (n = n || "#top" !== t ? n : document.documentElement) && (e.preventDefault(), (function (e) { if (history.replaceState && e.updateURL && !history.state) { var t = q.location.hash; t = t || "", history.replaceState({ smoothScroll: JSON.stringify(e), anchor: t || q.pageYOffset }, document.title, t || q.location.href) } })(A), M.animateScroll(n, a)) } }, n = function (e) { if (null !== history.state && history.state.smoothScroll && history.state.smoothScroll === JSON.stringify(A)) { var t = history.state.anchor; "string" == typeof t && t && !(t = document.querySelector(r(history.state.anchor))) || M.animateScroll(t, null, { updateURL: !1 }) } }; M.destroy = function () { A && (document.removeEventListener("click", t, !1), q.removeEventListener("popstate", n, !1), M.cancelScroll(), C = O = a = A = null) }; return (function () { if (!("querySelector" in document && "addEventListener" in q && "requestAnimationFrame" in q && "closest" in q.Element.prototype)) throw "Smooth Scroll: This browser does not support the required JavaScript methods and browser APIs."; M.destroy(), A = F(I, e || {}), O = A.header ? document.querySelector(A.header) : null, document.addEventListener("click", t, !1), A.updateURL && A.popstate && q.addEventListener("popstate", n, !1) })(), M } }));

function email_test(input) {
  return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
}



var ua = window.navigator.userAgent;
var msie = ua.indexOf("MSIE ");
var isMobile = { Android: function () { return navigator.userAgent.match(/Android/i); }, BlackBerry: function () { return navigator.userAgent.match(/BlackBerry/i); }, iOS: function () { return navigator.userAgent.match(/iPhone|iPad|iPod/i); }, Opera: function () { return navigator.userAgent.match(/Opera Mini/i); }, Windows: function () { return navigator.userAgent.match(/IEMobile/i); }, any: function () { return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows()); } };
function isIE() {
  ua = navigator.userAgent;
  var is_ie = ua.indexOf("MSIE ") > -1 || ua.indexOf("Trident/") > -1;
  return is_ie;
}
if (isIE()) {
  document.querySelector('body').classList.add('ie');
}
if (isMobile.any()) {
  document.querySelector('body').classList.add('_touch');
}
/*
function testWebP(callback) {
  var webP = new Image();
  webP.onload = webP.onerror = function () {
    callback(webP.height == 2);
  };
  webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}
testWebP(function (support) {
  if (support == true) {
    document.querySelector('body').classList.add('_webp');
  } else {
    document.querySelector('body').classList.add('_no-webp');
  }
});
*/
function ibg() {
  if (isIE()) {
    let ibg = document.querySelectorAll("._ibg");
    for (var i = 0; i < ibg.length; i++) {
      if (ibg[i].querySelector('img') && ibg[i].querySelector('img').getAttribute('src') != null) {
        ibg[i].style.backgroundImage = 'url(' + ibg[i].querySelector('img').getAttribute('src') + ')';
      }
    }
  }
}
ibg();

if (document.querySelector('.wrapper')) {
  document.querySelector('.wrapper').classList.add('_loaded');
}

let unlock = true;

//=================
//ActionsOnHash
if (location.hash) {
  const hsh = location.hash.replace('#', '');
  if (document.querySelector('.popup_' + hsh)) {
    popup_open(hsh);
  } else if (document.querySelector('div.' + hsh)) {
    _goto(document.querySelector('.' + hsh), 500, '');
  }
}
//=================
//Menu
let iconMenu = document.querySelector(".icon-menu");
if (iconMenu != null) {
  let delay = 500;
  let menuBody = document.querySelector(".menu__body");
  iconMenu.addEventListener("click", function (e) {
    if (unlock) {
      body_lock(delay);
      iconMenu.classList.toggle("_active");
      menuBody.classList.toggle("_active");
    }
  });
};
function menu_close() {
  let iconMenu = document.querySelector(".icon-menu");
  let menuBody = document.querySelector(".menu__body");
  iconMenu.classList.remove("_active");
  menuBody.classList.remove("_active");
}
//=================
//BodyLock
function body_lock(delay) {
  let body = document.querySelector("body");
  if (body.classList.contains('_lock')) {
    body_lock_remove(delay);
  } else {
    body_lock_add(delay);
  }
}
function body_lock_remove(delay) {
  let body = document.querySelector("body");
  if (unlock) {
    let lock_padding = document.querySelectorAll("._lp");
    setTimeout(() => {
      for (let index = 0; index < lock_padding.length; index++) {
        const el = lock_padding[index];
        el.style.paddingRight = '0px';
      }
      body.style.paddingRight = '0px';
      body.classList.remove("_lock");
    }, delay);

    unlock = false;
    setTimeout(function () {
      unlock = true;
    }, delay);
  }
}
function body_lock_add(delay) {
  let body = document.querySelector("body");
  if (unlock) {
    let lock_padding = document.querySelectorAll("._lp");
    for (let index = 0; index < lock_padding.length; index++) {
      const el = lock_padding[index];
      el.style.paddingRight = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';
    }
    body.style.paddingRight = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';
    body.classList.add("_lock");

    unlock = false;
    setTimeout(function () {
      unlock = true;
    }, delay);
  }
}
//=================

// LettersAnimation
let title = document.querySelectorAll('._letter-animation');
if (title) {
  for (let index = 0; index < title.length; index++) {
    let el = title[index];
    let txt = el.innerHTML;
    let txt_words = txt.replace('  ', ' ').split(' ');
    let new_title = '';
    for (let index = 0; index < txt_words.length; index++) {
      let txt_word = txt_words[index];
      let len = txt_word.length;
      new_title = new_title + '<p>';
      for (let index = 0; index < len; index++) {
        let it = txt_word.substr(index, 1);
        if (it == ' ') {
          it = '&nbsp;';
        }
        new_title = new_title + '<span>' + it + '</span>';
      }
      el.innerHTML = new_title;
      new_title = new_title + '&nbsp;</p>';
    }
  }
}
//=================
//Tabs
let tabs = document.querySelectorAll("._tabs");
for (let index = 0; index < tabs.length; index++) {
  let tab = tabs[index];
  let tabs_items = tab.querySelectorAll("._tabs-item");
  let tabs_blocks = tab.querySelectorAll("._tabs-block");
  for (let index = 0; index < tabs_items.length; index++) {
    let tabs_item = tabs_items[index];
    tabs_item.addEventListener("click", function (e) {
      for (let index = 0; index < tabs_items.length; index++) {
        let tabs_item = tabs_items[index];
        tabs_item.classList.remove('_active');
        tabs_blocks[index].classList.remove('_active');
      }
      tabs_item.classList.add('_active');
      tabs_blocks[index].classList.add('_active');
      e.preventDefault();
    });
  }
}
//=================
//Spollers
window.addEventListener('resize', spCheck)

function spCheck() {
  let spollers = document.querySelectorAll("._spoller");
  if (spollers.length > 0) {
    for (let index = 0; index < spollers.length; index++) {
      const spoller = spollers[index];
      spoller.addEventListener("click", function (e) {
        if (spoller.classList.contains('_spoller-992') && window.innerWidth > 992) {
          return false;
        }
        if (spoller.classList.contains('_spoller-768') && window.innerWidth > 768) {
          return false;
        }
        if (spoller.closest('._spollers').classList.contains('_one')) {
          let curent_spollers = spoller.closest('._spollers').querySelectorAll('._spoller');
          for (let i = 0; i < curent_spollers.length; i++) {
            let el = curent_spollers[i];
            if (el != spoller) {
              el.classList.remove('_active');
              _slideUp(el.nextElementSibling);
            }
          }
        }
        spoller.classList.toggle('_active');
        _slideToggle(spoller.nextElementSibling);
      });
    }
  }
  console.log(spollers)
}
spCheck()
//=================
//Gallery
let gallery = document.querySelectorAll('._gallery');
if (gallery) {
  gallery_init();
}
function gallery_init() {
  for (let index = 0; index < gallery.length; index++) {
    const el = gallery[index];
    lightGallery(el, {
      counter: false,
      selector: 'a',
      download: false
    });
  }
}
//=================
//SearchInList
function search_in_list(input) {
  let ul = input.parentNode.querySelector('ul')
  let li = ul.querySelectorAll('li');
  let filter = input.value.toUpperCase();

  for (i = 0; i < li.length; i++) {
    let el = li[i];
    let item = el;
    txtValue = item.textContent || item.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      el.style.display = "";
    } else {
      el.style.display = "none";
    }
  }
}
//=================
//DigiFormat
function digi(str) {
  var r = str.toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, "$1 ");
  return r;
}
//=================
//DiGiAnimate
function digi_animate(digi_animate) {
  if (digi_animate.length > 0) {
    for (let index = 0; index < digi_animate.length; index++) {
      const el = digi_animate[index];
      const el_to = parseInt(el.innerHTML.replace(' ', ''));
      if (!el.classList.contains('_done')) {
        digi_animate_value(el, 0, el_to, 1500);
      }
    }
  }
}
function digi_animate_value(el, start, end, duration) {
  var obj = el;
  var range = end - start;
  // no timer shorter than 50ms (not really visible any way)
  var minTimer = 50;
  // calc step time to show all interediate values
  var stepTime = Math.abs(Math.floor(duration / range));

  // never go below minTimer
  stepTime = Math.max(stepTime, minTimer);

  // get current time and calculate desired end time
  var startTime = new Date().getTime();
  var endTime = startTime + duration;
  var timer;

  function run() {
    var now = new Date().getTime();
    var remaining = Math.max((endTime - now) / duration, 0);
    var value = Math.round(end - (remaining * range));
    obj.innerHTML = digi(value);
    if (value == end) {
      clearInterval(timer);
    }
  }

  timer = setInterval(run, stepTime);
  run();

  el.classList.add('_done');
}
//=================
//Popups
let popup_link = document.querySelectorAll('._popup-link');
let popups = document.querySelectorAll('.popup');
for (let index = 0; index < popup_link.length; index++) {
  const el = popup_link[index];
  el.addEventListener('click', function (e) {
    if (unlock) {
      let item = el.getAttribute('href').replace('#', '');
      let video = el.getAttribute('data-video');
      popup_open(item, video);
    }
    e.preventDefault();
  })
}
for (let index = 0; index < popups.length; index++) {
  const popup = popups[index];
  popup.addEventListener("click", function (e) {
    if (!e.target.closest('.popup__body')) {
      popup_close(e.target.closest('.popup'));
    }
  });
}
function popup_open(item, video = '') {
  let activePopup = document.querySelectorAll('.popup._active');
  if (activePopup.length > 0) {
    popup_close('', false);
  }
  let curent_popup = document.querySelector('.popup_' + item);
  if (curent_popup && unlock) {
    if (video != '' && video != null) {
      let popup_video = document.querySelector('.popup_video');
      popup_video.querySelector('.popup__video').innerHTML = '<iframe src="https://www.youtube.com/embed/' + video + '?autoplay=1"  allow="autoplay; encrypted-media" allowfullscreen></iframe>';
    }
    if (!document.querySelector('.menu__body._active')) {
      body_lock_add(500);
    }
    curent_popup.classList.add('_active');
    history.pushState('', '', '#' + item);
  }
}
function popup_close(item, bodyUnlock = true) {
  if (unlock) {
    if (!item) {
      for (let index = 0; index < popups.length; index++) {
        const popup = popups[index];
        let video = popup.querySelector('.popup__video');
        if (video) {
          video.innerHTML = '';
        }
        popup.classList.remove('_active');
      }
    } else {
      let video = item.querySelector('.popup__video');
      if (video) {
        video.innerHTML = '';
      }
      item.classList.remove('_active');
    }
    if (!document.querySelector('.menu__body._active') && bodyUnlock) {
      body_lock_remove(500);
    }
    history.pushState('', '', window.location.href.split('#')[0]);
  }
}
let popup_close_icon = document.querySelectorAll('.popup__close,._popup-close');
if (popup_close_icon) {
  for (let index = 0; index < popup_close_icon.length; index++) {
    const el = popup_close_icon[index];
    el.addEventListener('click', function () {
      popup_close(el.closest('.popup'));
    })
  }
}
document.addEventListener('keydown', function (e) {
  if (e.which == 27) {
    popup_close();
  }
});
//=================
//SlideToggle
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
//========================================
//Wrap
function _wrap(el, wrapper) {
  el.parentNode.insertBefore(wrapper, el);
  wrapper.appendChild(el);
}
//========================================
//RemoveClasses
function _removeClasses(el, class_name) {
  for (var i = 0; i < el.length; i++) {
    el[i].classList.remove(class_name);
  }
}
//========================================
//IsHidden
function _is_hidden(el) {
  return (el.offsetParent === null)
}
//========================================
//Animate
function animate({ timing, draw, duration }) {
  let start = performance.now();
  requestAnimationFrame(function animate(time) {
    // timeFraction изменяется от 0 до 1
    let timeFraction = (time - start) / duration;
    if (timeFraction > 1) timeFraction = 1;

    // вычисление текущего состояния анимации
    let progress = timing(timeFraction);

    draw(progress); // отрисовать её

    if (timeFraction < 1) {
      requestAnimationFrame(animate);
    }

  });
}
function makeEaseOut(timing) {
  return function (timeFraction) {
    return 1 - timing(1 - timeFraction);
  }
}
function makeEaseInOut(timing) {
  return function (timeFraction) {
    if (timeFraction < .5)
      return timing(2 * timeFraction) / 2;
    else
      return (2 - timing(2 * (1 - timeFraction))) / 2;
  }
}
function quad(timeFraction) {
  return Math.pow(timeFraction, 2)
}
function circ(timeFraction) {
  return 1 - Math.sin(Math.acos(timeFraction));
}
/*
animate({
  duration: 1000,
  timing: makeEaseOut(quad),
  draw(progress) {
    window.scroll(0, start_position + 400 * progress);
  }
});*/

//Полифилы
(function () {
  // проверяем поддержку
  if (!Element.prototype.closest) {
    // реализуем
    Element.prototype.closest = function (css) {
      var node = this;
      while (node) {
        if (node.matches(css)) return node;
        else node = node.parentElement;
      }
      return null;
    };
  }
})();
(function () {
  // проверяем поддержку
  if (!Element.prototype.matches) {
    // определяем свойство
    Element.prototype.matches = Element.prototype.matchesSelector ||
      Element.prototype.webkitMatchesSelector ||
      Element.prototype.mozMatchesSelector ||
      Element.prototype.msMatchesSelector;
  }
})();
//let btn = document.querySelectorAll('button[type="submit"],input[type="submit"]');
let forms = document.querySelectorAll('form');
if (forms.length > 0) {
  for (let index = 0; index < forms.length; index++) {
    const el = forms[index];
    el.addEventListener('submit', form_submit);
  }
}
function form_submit(e) {
  let btn = event.target;
  let form = btn.closest('form');
  let message = form.getAttribute('data-message');
  let error = form_validate(form);
  if (error == 0) {
    //SendForm
    form_clean(form);
    if (message) {
      popup_open('message-' + message);
      e.preventDefault();
    }
  } else {
    let form_error = form.querySelectorAll('._error');
    if (form_error && form.classList.contains('_goto-error')) {
      _goto(form_error[0], 1000, 50);
    }
    event.preventDefault();
  }
}
function form_validate(form) {
  let error = 0;
  let form_req = form.querySelectorAll('._req');
  if (form_req.length > 0) {
    for (let index = 0; index < form_req.length; index++) {
      const el = form_req[index];
      if (!_is_hidden(el)) {
        error += form_validate_input(el);
      }
    }
  }
  return error;
}
function form_validate_input(input) {
  let error = 0;
  let input_g_value = input.getAttribute('data-value');

  if (input.getAttribute("name") == "email" || input.classList.contains("_email")) {
    if (input.value != input_g_value) {
      let em = input.value.replace(" ", "");
      input.value = em;
    }
    if (email_test(input) || input.value == input_g_value) {
      form_add_error(input);
      error++;
    } else {
      form_remove_error(input);
    }
  } else if (input.getAttribute("type") == "checkbox" && input.checked == false) {
    form_add_error(input);
    error++;
  } else {
    if (input.value == '' || input.value == input_g_value) {
      form_add_error(input);
      error++;
    } else {
      form_remove_error(input);
    }
  }
  return error;
}
function form_add_error(input) {
  input.classList.add('_error');
  input.parentElement.classList.add('_error');

  let input_error = input.parentElement.querySelector('.form__error');
  if (input_error) {
    input.parentElement.removeChild(input_error);
  }
  let input_error_text = input.getAttribute('data-error');
  if (input_error_text && input_error_text != '') {
    input.parentElement.insertAdjacentHTML('beforeend', '<div class="form__error">' + input_error_text + '</div>');
  }
}
function form_remove_error(input) {
  input.classList.remove('_error');
  input.parentElement.classList.remove('_error');

  let input_error = input.parentElement.querySelector('.form__error');
  if (input_error) {
    input.parentElement.removeChild(input_error);
  }
}
function form_clean(form) {
  let inputs = form.querySelectorAll('input,textarea');
  for (let index = 0; index < inputs.length; index++) {
    const el = inputs[index];
    el.parentElement.classList.remove('_focus');
    el.classList.remove('_focus');
    el.value = el.getAttribute('data-value');
  }
  let checkboxes = form.querySelectorAll('.checkbox__input');
  if (checkboxes.length > 0) {
    for (let index = 0; index < checkboxes.length; index++) {
      const checkbox = checkboxes[index];
      checkbox.checked = false;
    }
  }
  let selects = form.querySelectorAll('select');
  if (selects.length > 0) {
    for (let index = 0; index < selects.length; index++) {
      const select = selects[index];
      const select_default_value = select.getAttribute('data-default');
      select.value = select_default_value;
      select_item(select);
    }
  }
}

let viewPass = document.querySelectorAll('.form__viewpass');
for (let index = 0; index < viewPass.length; index++) {
  const element = viewPass[index];
  element.addEventListener("click", function (e) {
    if (element.classList.contains('_active')) {
      element.parentElement.querySelector('input').setAttribute("type", "password");
    } else {
      element.parentElement.querySelector('input').setAttribute("type", "text");
    }
    element.classList.toggle('_active');
  });
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

//Placeholers
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

//ScrollOnScroll



function scroll_lazy(scr_item) {
  let lazy_src = scr_item.querySelectorAll('*[data-src]');
  if (lazy_src.length > 0) {
    for (let index = 0; index < lazy_src.length; index++) {
      const el = lazy_src[index];
      if (!el.classList.contains('_loaded')) {
        el.setAttribute('src', el.getAttribute('data-src'));
        el.classList.add('_loaded');
      }
    }
  }
  let lazy_srcset = scr_item.querySelectorAll('*[data-srcset]');
  if (lazy_srcset.length > 0) {
    for (let index = 0; index < lazy_srcset.length; index++) {
      const el = lazy_srcset[index];
      if (!el.classList.contains('_loaded')) {
        el.setAttribute('srcset', el.getAttribute('data-srcset'));
        el.classList.add('_loaded');
      }
    }
  }
}

function scroll_load_item(scr_item) {
  if (scr_item.classList.contains('_load-map') && !scr_item.classList.contains('_loaded-map')) {
    let map_item = document.getElementById('map');
    if (map_item) {
      scr_item.classList.add('_loaded-map');
      map();
    }
  }
}

//FullScreenScroll
if (scr_blocks.length > 0 && !isMobile.any()) {
  disableScroll();
  window.addEventListener('wheel', full_scroll);
}
function full_scroll(e) {
  let viewport_height = window.innerHeight;
  if (viewport_height >= scr_min_height) {
    if (scrolling_full) {
      // ВЫЧИСЛИТЬ!!!
      let current_scroll = pageYOffset;//parseInt(scr_body.getAttribute('data-scroll'));
      //
      let current_block = document.querySelector('._scr-sector._scr-sector_current');
      let current_block_pos = offset(current_block).top;
      let current_block_height = current_block.offsetHeight;
      let current_block_next = current_block.nextElementSibling;
      let current_block_prev = current_block.previousElementSibling;
      let block_pos;
      if (e.keyCode == 40 || e.keyCode == 34 || e.deltaX > 0 || e.deltaY < 0) {
        if (current_block_prev) {
          let current_block_prev_height = current_block_prev.offsetHeight;
          block_pos = offset(current_block_prev).top;
          if (current_block_height <= viewport_height) {
            if (current_block_prev_height >= viewport_height) {
              block_pos = block_pos + (current_block_prev_height - viewport_height);
              full_scroll_to_sector(block_pos);
            }
          } else {
            enableScroll();
            if (current_scroll <= current_block_pos) {
              full_scroll_to_sector(block_pos);
            }
          }
        } else {
          full_scroll_pagestart();
        }
      } else if (e.keyCode == 38 || e.keyCode == 33 || e.deltaX < 0 || e.deltaY > 0) {
        if (current_block_next) {
          block_pos = offset(current_block_next).top;
          if (current_block_height <= viewport_height) {
            full_scroll_to_sector(block_pos);
          } else {
            enableScroll();
            if (current_scroll >= block_pos - viewport_height) {
              full_scroll_to_sector(block_pos);
            }
          }
        } else {
          full_scroll_pageend();
        }
      }
    } else {
      disableScroll();
    }
  } else {
    enableScroll();
  }
}
function full_scroll_to_sector(pos) {
  disableScroll();
  scrolling_full = false;
  _goto(pos, 800);

  let scr_pause = 500;
  if (navigator.appVersion.indexOf("Mac") != -1) {
    scr_pause = 1000;
  };
  setTimeout(function () {
    scrolling_full = true;
  }, scr_pause);
}
function full_scroll_pagestart() { }
function full_scroll_pageend() { }

//ScrollOnClick (Navigation)
let link = document.querySelectorAll('._goto-block');
if (link) {
  let blocks = [];
  for (let index = 0; index < link.length; index++) {
    let el = link[index];
    let block_name = el.getAttribute('href').replace('#', '');
    if (block_name != '' && !~blocks.indexOf(block_name)) {
      blocks.push(block_name);
    }
    el.addEventListener('click', function (e) {
      if (document.querySelector('.menu__body._active')) {
        menu_close();
        body_lock_remove(500);
      }
      let target_block_class = el.getAttribute('href').replace('#', '');
      let target_block = document.querySelector('.' + target_block_class);
      _goto(target_block, 300);
      e.preventDefault();
    })
  }

  window.addEventListener('scroll', function (el) {
    let old_current_link = document.querySelectorAll('._goto-block._active');
    if (old_current_link) {
      for (let index = 0; index < old_current_link.length; index++) {
        let el = old_current_link[index];
        el.classList.remove('_active');
      }
    }
    for (let index = 0; index < blocks.length; index++) {
      let block = blocks[index];
      let block_item = document.querySelector('.' + block);
      if (block_item) {
        let block_offset = offset(block_item).top;
        let block_height = block_item.offsetHeight;
        if ((pageYOffset > block_offset - window.innerHeight / 3) && pageYOffset < (block_offset + block_height) - window.innerHeight / 3) {
          let current_links = document.querySelectorAll('._goto-block[href="#' + block + '"]');
          for (let index = 0; index < current_links.length; index++) {
            let current_link = current_links[index];
            current_link.classList.add('_active');
          }
        }
      }
    }
  })
}
//ScrollOnClick (Simple)
let goto_links = document.querySelectorAll('._goto');
if (goto_links) {
  for (let index = 0; index < goto_links.length; index++) {
    let goto_link = goto_links[index];
    goto_link.addEventListener('click', function (e) {
      let target_block_class = goto_link.getAttribute('href').replace('#', '');
      let target_block = document.querySelector('.' + target_block_class);
      _goto(target_block, 300);
      e.preventDefault();
    });
  }
}
function _goto(target_block, speed, offset = 0) {
  let header = '';
  //OffsetHeader
  //if (window.innerWidth < 992) {
  //	header = 'header';
  //}
  let options = {
    speedAsDuration: true,
    speed: speed,
    header: header,
    offset: offset,
    easing: 'easeOutQuad',
  };
  let scr = new SmoothScroll();
  scr.animateScroll(target_block, '', options);
}

//SameFunctions
function offset(el) {
  var rect = el.getBoundingClientRect(),
    scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
}
function disableScroll() {
  if (window.addEventListener) // older FF
    window.addEventListener('DOMMouseScroll', preventDefault, false);
  document.addEventListener('wheel', preventDefault, { passive: false }); // Disable scrolling in Chrome
  window.onwheel = preventDefault; // modern standard
  window.onmousewheel = document.onmousewheel = preventDefault; // older browsers, IE
  window.ontouchmove = preventDefault; // mobile
  document.onkeydown = preventDefaultForScrollKeys;
}
function enableScroll() {
  if (window.removeEventListener)
    window.removeEventListener('DOMMouseScroll', preventDefault, false);
  document.removeEventListener('wheel', preventDefault, { passive: false }); // Enable scrolling in Chrome
  window.onmousewheel = document.onmousewheel = null;
  window.onwheel = null;
  window.ontouchmove = null;
  document.onkeydown = null;
}
function preventDefault(e) {
  e = e || window.event;
  if (e.preventDefault)
    e.preventDefault();
  e.returnValue = false;
}
function preventDefaultForScrollKeys(e) {
  /*if (keys[e.keyCode]) {
    preventDefault(e);
    return false;
  }*/
}

function fix_block(scr_fix_block, scr_value) {
  let window_width = parseInt(window.innerWidth);
  let window_height = parseInt(window.innerHeight);
  let header_height = parseInt(document.querySelector('header').offsetHeight) + 15;
  for (let index = 0; index < scr_fix_block.length; index++) {
    const block = scr_fix_block[index];
    const block_width = block.getAttribute('data-width');
    const item = block.querySelector('._side-block');
    if (!block_width) { block_width = 0; }
    if (window_width > block_width) {
      if (item.offsetHeight < window_height - (header_height + 30)) {
        if (scr_value > offset(block).top - (header_height + 15)) {
          item.style.cssText = "position:fixed;bottom:auto;top:" + header_height + "px;width:" + block.offsetWidth + "px;left:" + offset(block).left + "px;";
        } else {
          gotoRelative(item);
        }
        if (scr_value > (block.offsetHeight + offset(block).top) - (item.offsetHeight + (header_height + 15))) {
          block.style.cssText = "position:relative;";
          item.style.cssText = "position:absolute;bottom:0;top:auto;left:0px;width:100%";
        }
      } else {
        gotoRelative(item);
      }
    }
  }
  function gotoRelative(item) {
    item.style.cssText = "position:relative;bottom:auto;top:0px;left:0px;";
  }
}

if (!isMobile.any()) {
  //custom_scroll();
  /*
  window.addEventListener('wheel', scroll_animate, {
    capture: true,
    passive: true
  });
  window.addEventListener('resize', custom_scroll, {
    capture: true,
    passive: true
  });
  */
}
function custom_scroll(event) {
  scr_body.style.overflow = 'hidden';
  let window_height = window.innerHeight;
  let custom_scroll_line = document.querySelector('._custom-scroll__line');
  let custom_scroll_content_height = document.querySelector('.wrapper').offsetHeight;
  let custom_cursor_height = Math.min(window_height, Math.round(window_height * (window_height / custom_scroll_content_height)));
  if (custom_scroll_content_height > window_height) {
    if (!custom_scroll_line) {
      let custom_scroll = document.createElement('div');
      custom_scroll_line = document.createElement('div');
      custom_scroll.setAttribute('class', '_custom-scroll');
      custom_scroll_line.setAttribute('class', '_custom-scroll__line');
      custom_scroll.appendChild(custom_scroll_line);
      scr_body.appendChild(custom_scroll);
    }
    custom_scroll_line.style.height = custom_cursor_height + 'px';
  }
}

let new_pos = pageYOffset;
function scroll_animate(event) {
  let window_height = window.innerHeight;
  let content_height = document.querySelector('.wrapper').offsetHeight;
  let start_position = pageYOffset;
  let pos_add = 100;

  if (event.keyCode == 40 || event.keyCode == 34 || event.deltaX > 0 || event.deltaY < 0) {
    new_pos = new_pos - pos_add;
  } else if (event.keyCode == 38 || event.keyCode == 33 || event.deltaX < 0 || event.deltaY > 0) {
    new_pos = new_pos + pos_add;
  }
  if (new_pos > (content_height - window_height)) new_pos = content_height - window_height;
  if (new_pos < 0) new_pos = 0;

  if (scrolling) {
    scrolling = false;
    _goto(new_pos, 1000);

    let scr_pause = 100;
    if (navigator.appVersion.indexOf("Mac") != -1) {
      scr_pause = scr_pause * 2;
    };
    setTimeout(function () {
      scrolling = true;
      _goto(new_pos, 1000);
    }, scr_pause);
  }
  //If native scroll
  //disableScroll();
}


let tableTab = document.querySelector('.tableStory__tabs');
if (tableTab != null) {
  let tabs = tableTab.querySelectorAll('p')
  for (let i = 0; tabs.length > i; i++) {
    const el = tabs[i]
    el.addEventListener("click", function (e) {
      for (let index = 0; index < tabs.length; index++) {
        const element = tabs[index];
        element.classList.remove('_active')

      }
      el.classList.add('_active')
    });

  }
}