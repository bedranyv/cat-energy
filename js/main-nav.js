let toggleMenu = document.querySelector(".page-header__toggle");
let menu = document.querySelector(".main-nav");

menu.classList.remove("main-nav--nojs");

toggleMenu.addEventListener("click", function() {
	if (menu.classList.contains("main-nav--closed")) {
		menu.classList.remove("main-nav--closed");
		menu.classList.add("main-nav--opened");

		toggleMenu.classList.remove("page-header__toggle--open");
		toggleMenu.classList.add("page-header__toggle--close");
	}

	else {
		menu.classList.remove("main-nav--opened");
		menu.classList.add("main-nav--closed");

		toggleMenu.classList.remove("page-header__toggle--close");
		toggleMenu.classList.add("page-header__toggle--open");
	}
})