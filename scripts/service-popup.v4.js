const openServicePopup = id => {
  const servicePopup = document.getElementById("popup" + id);
  console.log(servicePopup);
  servicePopup.classList.add("message__show")
  document.body.style = "overflow: hidden;"
}

const closeServicePopup = id => {
  const servicePopup = document.getElementById("popup" + id);
  
  servicePopup.classList.remove("message__show")
  document.body.style = "overflow: visible;"
}
