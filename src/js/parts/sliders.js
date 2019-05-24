function sliders() {
    let slideTurn = 1,
        slides = document.querySelectorAll(".main-slider-item");
    showSlides();
    setInterval(plusSlides, 4000);

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
        slides.forEach((item) => {
            item.style.display = "none";
        });
        slides[slideTurn - 1].style.display = "block";
        slides[slideTurn - 1].classList.add('slideInDown');
        setTimeout(() => {
            slides[slideTurn - 1].classList.remove('slideInDown');
        }, 3000);
        setTimeout(() => {
            slides[slideTurn - 1].classList.add('slideOutDown');
        }, 5000);
    }
    
}

module.exports = sliders;