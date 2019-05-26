function gift() {
    let fixGift = document.querySelector('.fixed-gift'),
        popupGift = document.querySelector('.popup-gift'),
        btnClose = popupGift.querySelector('.popup-close');
    let buttons = document.querySelectorAll('button');
    let logFullScroll = 0;
    buttons.forEach( (e) => {
        e.addEventListener('click', () => {
            logFullScroll = 1;
        });
    });

    function showGift() {
        fixGift.remove();
        popupGift.classList.add("show");
        popupGift.classList.add("smooth");
        popupGift.style.display = 'block';
        document.querySelector('body').style.overflow = 'hidden';
        logFullScroll = 1;
    }

    function hideGift() {
        popupGift.classList.remove("show");
        popupGift.classList.remove("smooth");
        popupGift.style.display = '';
        document.querySelector('body').style.overflow = '';
    }

    fixGift.addEventListener('click', () => {
        showGift();
    });
    popupGift.addEventListener('click', (e) => {
        if (e.currentTarget == e.target) {
            hideGift();
        }
    });
    btnClose.addEventListener('click', () => {
        hideGift();
    });
    window.addEventListener('scroll', () => {
        if (logFullScroll == 0 && window.scrollY >= document.documentElement.scrollHeight - document.documentElement.clientHeight) {
            showGift();
        }
    });
}

module.exports = gift;