let buttonBefore = document.querySelector(".toggle-mobile__button--before");
let buttonAfter = document.querySelector(".toggle-mobile__button--after");
let imageBefore = document.querySelector(".slider__image--before");
let imageAfter = document.querySelector(".slider__image--after");


if (buttonBefore) { // проверка на существование кнопки, если ее нет, значит запущена не мобильная версия
	buttonBefore.addEventListener("click", function() {
		buttonBefore.classList.add("toggle-mobile__button--on");
		imageBefore.classList.add("slider__image--on");
		buttonAfter.classList.remove("toggle-mobile__button--on");
		imageAfter.classList.remove("slider__image--on");
	});
}

if (buttonAfter) {
	buttonAfter.addEventListener("click", function() {
		buttonAfter.classList.add("toggle-mobile__button--on");
		imageAfter.classList.add("slider__image--on");
		buttonBefore.classList.remove("toggle-mobile__button--on");
		imageBefore.classList.remove("slider__image--on");
	});
}