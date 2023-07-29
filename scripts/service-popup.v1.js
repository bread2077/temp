const openServicePopup = id => {
  const servicePopup = document.getElementById("popup" + id);
  
  servicePopup.classList.add("message__show")
  document.body.style = "overflow: hidden;"
}

const closeServicePopup = () => {
  servicePopup.classList.remove("message__show")
  document.body.style = "overflow: visible;"
}
