const form = document.querySelector('.program-form'),
      modalWindow = document.querySelector('.modal__window'),
      modalOverlay = document.querySelector('.modal__overlay'),
      btnCloseModal = modalWindow.querySelector('.modal__btn--close');

let automatCloseModal, div;

const message = {
    success: {
        header: 'Ваша заявка отправлена успешно!',
        text: 'В ближайшее время мы с вами свяжемся!',
    },
    failure: {
        header: 'Ваша заявка не отправлена!',
        text: 'Мы уже работаем над проблемой, попробуйте повторить попытку позже!',
    },
};

function postData(form) {
    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const request = new XMLHttpRequest();
        request.open('POST', 'server.php');
        request.setRequestHeader('Content-type', 'application/json');

        const formData = new FormData(form);
        const obj = {};

        formData.forEach(function(value, key) {
            obj[key] = value;
        });

        const json = JSON.stringify(obj);

        request.send(json);

        request.addEventListener('load', function() {
            if (request.status === 200) {
                console.log(request.response);
                showFormModal(message.success);
            } else {
                showFormModal(message.failure);
            }
        });
    });
}

function showFormModal(message) {
    showModal();

    div = document.createElement('div');
    div.innerHTML = `
        <h2 class="modal__title">${message.header}</h2>
        <p class="modal__text">${message.text}</p>
    `;
    modalWindow.prepend(div);

    automatCloseModal = setTimeout(closeModal, 4000);
}

postData(form);


function showModal() {
    modalWindow.classList.remove('modal--hide');
    modalOverlay.classList.remove('modal--hide');
    modalWindow.classList.add('modal--show');
    modalOverlay.classList.add('modal--show');
}

function closeModal() {
    modalWindow.classList.remove('modal--show');
    modalOverlay.classList.remove('modal--show');
    modalWindow.classList.add('modal--hide');
    modalOverlay.classList.add('modal--hide');

    div.remove();

    clearInterval(automatCloseModal);
}

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