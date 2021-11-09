let icon_menu = document.getElementsByClassName('menu__icon__phone')[0];
let phone__menu = document.getElementsByClassName('menu__phone')[0];
let burg = document.getElementsByClassName('burger')[0];

phone__menu.style.transform = 'translateX(100%)';
function dropDown(thiss) {
  if (thiss.parentElement.nextElementSibling.style.display == "none" || thiss.parentElement.nextElementSibling.style.display == "")
  { 
    thiss.parentElement.nextElementSibling.style.display = "block";
    thiss.style.transform = 'rotate(180deg)'
  }
  else 
  {
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
  
} catch(e) {
}
function open__phone__menu(){
  icon_menu.style.display = 'none';
  phone__menu.style.transform='translateX(0%)';
  document.body.style = 'overflow-y: hidden !important;'
  document.getElementById("black__background").style.opacity = "1"
}
function close__phone__menu(){
  icon_menu.style.display = 'block';
  document.body.style = 'overflow-y: visble;'
  phone__menu.style.transform='translateX(100%)';
  document.getElementById("black__background").style.opacity = "0"
}
function open__burg(){
  burg.classList.add('hide_elem');
}
function close__burg(){
  burg.classList.remove('hide_elem');
}
let show = document.getElementById('hidden_Text');
let open = document.getElementById('open_text');
let showmass = document.getElementById('hidden_Text_2');
let open2 = document.getElementById('open_text_2');
function OllText(){
  if (show.style.display = 'none') {
    show.style.display = 'block';
    open.style.display = 'none'
  }

}
function OllText2(){
  if (showmass.style.display = 'none') {
    showmass.style.display = 'block';
    open2.style.display = 'none';
  }

}
function massovi_block(){
  let show = document.getElementById('hidden_blocks');
  let vis = document.getElementById('visible_blocks');
  if (show.style.display = 'none') {
    show.style.display = 'block';
    vis.style.display = 'none';
    document.getElementsByClassName('first_active')[0].style.background  = 'white'; 
    document.getElementsByClassName('note_active')[0].style.background  = '#FF725E';
    document.getElementsByClassName('first_active_text')[0].style.color  = 'rgba(255, 114, 94,0.32)';
    document.getElementsByClassName('note_active_text')[0].style.color  = 'white';
  }
}
function Bistri_block(){
  let show = document.getElementById('hidden_blocks');
  let vis = document.getElementById('visible_blocks');
  if (vis.style.display = 'none') {
    show.style.display = 'none';
    vis.style.display = 'block';
    document.getElementsByClassName('note_active')[0].style.background  = 'white';
    document.getElementsByClassName('first_active')[0].style.background  = '#FF725E';
    document.getElementsByClassName('note_active_text')[0].style.color  = 'rgba(255, 114, 94,0.32)';
    document.getElementsByClassName('first_active_text')[0].style.color  = 'white';
  }
}
function hide() {
  document.getElementsByClassName("form")[0].classList.toggle("d-nonee")
  document.getElementById("+").classList.toggle("d-nonee")
  document.getElementById("-").classList.toggle("d-nonee")
}
function openElement(id) {
  document.getElementById("popup" + id).classList.toggle("message__show")
  document.body.style = "overflow: hidden;"
}
