let imgContainer = document.querySelector(".example__img-container--before");
let btnBefore = document.querySelector(".example__slider--text-before");
let btnAfter = document.querySelector(".example__slider--text-after");
let grip = document.querySelector(".example__slider--grip");


btnBefore.onclick = function (evt) {
	evt.preventDefault();
	imgContainer.style.width = "0";
	grip.style.marginLeft = "calc(0% - " + 17 + "px)";
};

btnAfter.onclick = function (evt) {
	evt.preventDefault();
	imgContainer.style.width = "100%";
	grip.style.marginLeft = "calc(100% - " + 17 + "px)";
};


