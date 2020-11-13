let imgContainer = document.querySelector(".slider__image-wrapper--before");
let btnBefore = document.querySelector(".slider__controls-text--before");
let btnAfter = document.querySelector(".slider__controls-text--after");
let thumb = document.querySelector(".slider__controls-scale");


thumb.addEventListener("click", function onclick(event) {
	event.preventDefault();

	imgContainer.style.width = "calc(100% - " + thumb.value + "%)";
});

btnBefore.onclick = function (evt) {
	evt.preventDefault();
	imgContainer.style.width = "100%";
	thumb.value = "0";
};

btnAfter.onclick = function (evt) {
	evt.preventDefault();
	imgContainer.style.width = "0";
	thumb.value = "100";
};


