const modalWindow = document.querySelector('.modal__window'),
      modalOverlay = document.querySelector('.modal__overlay'),
      btnCloseModal = modalWindow.querySelector('.modal__btn--close');

function showModal() {
    modalWindow.classList.toggle('modal--show');
    modalOverlay.classList.toggle('modal--show');

    window.removeEventListener('scroll', showModalByScroll);
}

// функция показа модалки при прокручивании страницы до низа
function showModalByScroll() {
    if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
        showModal();
        clearInterval(timerShowModal);
    }
}

btnCloseModal.addEventListener('click', function() {
    modalWindow.classList.toggle('modal--show');
    modalOverlay.classList.toggle('modal--show');
});

// показ модалки с заданием таймера
const timerShowModal = setTimeout(showModal, 15000);

window.addEventListener('scroll', showModalByScroll);


