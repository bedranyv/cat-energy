const modalWindow = document.querySelector('.modal__window'),
      modalOverlay = document.querySelector('.modal__overlay'),
      btnCloseModal = modalWindow.querySelector('.modal__btn--close');

function showModal() {
    modalWindow.classList.remove('modal--hide');
    modalOverlay.classList.remove('modal--hide');
    modalWindow.classList.add('modal--show');
    modalOverlay.classList.add('modal--show');

    window.removeEventListener('scroll', showModalByScroll);
}

function closeModal() {
    modalWindow.classList.remove('modal--show');
    modalOverlay.classList.remove('modal--show');
    modalWindow.classList.add('modal--hide');
    modalOverlay.classList.add('modal--hide');
}

// функция показа модалки при прокручивании страницы до низа
function showModalByScroll() {
    if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
        showModal();
        clearInterval(timerShowModal);
    }
}


// показ модалки с заданием таймера
let timerShowModal = setTimeout(showModal, 15000);


window.addEventListener('scroll', showModalByScroll);


// закрытие модалки при клике на крестик
btnCloseModal.addEventListener('click', function() {
    closeModal();
});

// закрытие модалки при клике на подложку
modalOverlay.addEventListener('click', function() {
    closeModal();
});


// закрытие модалки при клике на клавишу Esc
document.addEventListener('keydown', function(e) {
    if (e.code === 'Escape' && modalWindow.classList.contains('modal--show')) {
        closeModal();
    }
});