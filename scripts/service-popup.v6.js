const openServicePopup = id => {
  const servicePopup = document.getElementById("popup" + id);
  servicePopup.classList.add("message__show")
  document.body.style.setProperty('overflow', 'hidden');
}

const closeServicePopup = id => {
  const servicePopup = document.getElementById("popup" + id);
  
  servicePopup.classList.remove("message__show")
  document.body.style.removeProperty('overflow');
}
