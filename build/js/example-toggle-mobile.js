let buttonBefore = document.querySelector(".toggle-mobile__button--before");
let buttonAfter = document.querySelector(".toggle-mobile__button--after");
let imageBefore = document.querySelector(".slider__image--before");
let imageAfter = document.querySelector(".slider__image--after");

buttonBefore.addEventListener("click", function() {
	buttonBefore.classList.add("toggle-mobile__button--on");
	imageBefore.classList.add("slider__image--on");
	buttonAfter.classList.remove("toggle-mobile__button--on");
	imageAfter.classList.remove("slider__image--on");
});

buttonAfter.addEventListener("click", function() {
	buttonAfter.classList.add("toggle-mobile__button--on");
	imageAfter.classList.add("slider__image--on");
	buttonBefore.classList.remove("toggle-mobile__button--on");
	imageBefore.classList.remove("slider__image--on");
});
