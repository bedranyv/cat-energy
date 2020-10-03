let buttonBefore = document.querySelector(".toggle-mobile__button--before");
let buttonAfter = document.querySelector(".toggle-mobile__button--after");
let imageBefore = document.querySelector(".example__image--before");
let imageAfter = document.querySelector(".example__image--after");

buttonBefore.addEventListener("click", function() {
	buttonBefore.classList.add("toggle-mobile__button--on");
	imageBefore.classList.add("example__image--on");
	buttonAfter.classList.remove("toggle-mobile__button--on");
	imageAfter.classList.remove("example__image--on");
})

buttonAfter.addEventListener("click", function() {
	buttonAfter.classList.add("toggle-mobile__button--on");
	imageAfter.classList.add("example__image--on");
	buttonBefore.classList.remove("toggle-mobile__button--on");
	imageBefore.classList.remove("example__image--on");
})
