function sliders() {
    //Главный слайдер
    let slideTurn = 1,
        slides = document.querySelectorAll(".main-slider-item");
    showSlides();
    setInterval(plusSlides, 6000);

    function plusSlides() {
        if (slideTurn == slides.length) {
            slideTurn = 1;
        } else {
            slideTurn += 1;
        }

        showSlides();
    }

    function showSlides(n) {
        slides[slideTurn - 1].classList.remove('slideOutDown');
        slides.forEach(function (item) {
            item.style.display = "none";
        });
        slides[slideTurn - 1].style.display = "block";
        slides[slideTurn - 1].classList.add('slideInDown');
        setTimeout(function () {
            slides[slideTurn - 1].classList.remove('slideInDown');
        }, 3000);
        setTimeout(function () {
            slides[slideTurn - 1].classList.add('slideOutDown');
        }, 5000);
    }
    
}

module.exports = sliders;