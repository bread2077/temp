
function nextfun(id,eleppent){
	for (let i = 0; i < document.getElementsByClassName('block__hidden').length; i++) {
		document.getElementsByClassName('block__hidden')[i].style.display = 'none';
		document.getElementsByClassName('numbers_animate')[i].classList.remove("numbers_animate_active")
	}
	document.getElementById(id).style.display = 'block';
	eleppent.classList.add("numbers_animate_active")
}