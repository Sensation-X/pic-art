function consultation() {
    let btnConsultation = document.querySelectorAll('.button-consultation'),
    popupConsultation = document.querySelector('.popup-consultation'),
    modalWindow = document.querySelectorAll('.modal-window'),
    temp = 0;
    
    btnConsultation.forEach((item) => {
    item.addEventListener('click', () => {
        popupConsultation.style.display = 'block';
        document.body.style.overflow = 'hidden';
    });
    });
    
    popupConsultation.addEventListener('click', (e) => {
    if (e.target.classList.contains('popup-close') || e.target.classList.contains('popup-consultation')) {
        document.body.style.overflow = '';
        popupConsultation.style.display = 'none';
        popupConsultation.querySelector('form').firstElementChild.style.display = 'block';
        popupConsultation.querySelectorAll('form input').forEach((item) => {
            item.value = '';
        });
        if (popupConsultation.querySelector('form').lastElementChild.classList.contains('status')) {
            popupConsultation.querySelector('form').lastElementChild.style.display = 'none';
        }
    }
    });
    
    //60 секунд
    setTimeout(() => {
    modalWindow.forEach((item) => {
        if (item.style.display == 'block') {
            temp++;
        }
    });
    if (temp == 0) {
        popupConsultation.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }
    }, 60000);
}
module.exports = consultation;