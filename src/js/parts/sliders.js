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
// Нижний слайдер
let secondSlider = document.querySelectorAll(".feedback-slider-item"),
    secondSliderTurn = 1,
    prev = document.querySelector(".main-prev-btn"), 
    next = document.querySelector(".main-next-btn"); 

showSecondSlides();
let timerID; // таймер сброса анимации

function timer() {
    // таймер для анимации налево
    timerID = setInterval(function () {
        secondSlider[secondSliderTurn - 1].classList.add("slideOutLeft");
        secondSlider[secondSliderTurn - 1].classList.remove("slideInRightLong");
        console.log("789");
    }, 5000);
}

let timerIDFirst; // таймер смены изображений

function timerFirst() {
    timerIDFirst = setInterval(plusSecondSlides, 6000);
}

timerFirst();

function plusSecondSlides() {
    if (secondSliderTurn == secondSlider.length) {
        secondSliderTurn = 1;
    } else {
        secondSliderTurn += 1;
    }

    showSecondSlides();
}

function showSecondSlides(n) {
    if (n > secondSlider.length) {
        secondSliderTurn = 1; 
    }

    if (n < 1) {
        secondSliderTurn = secondSlider.length;
    }

    secondSlider.forEach(function (item) {
        item.style.display = "none";
    });
    secondSlider[secondSliderTurn - 1].style.display = "block";
    secondSlider[secondSliderTurn - 1].classList.add("slideInRightLong"); 
    
} 

function viewSlides(n) {
    showSecondSlides(secondSliderTurn += n);
}

prev.addEventListener("click", function () {
    viewSlides(-1); //слайд назад

    clearInterval(timerIDFirst);
    clearInterval(timer);
    timerFirst();
});
next.addEventListener("click", function () {
    viewSlides(+1); //слайд вперед

    clearInterval(timerIDFirst);
    clearInterval(timer);
    timerFirst();
});

module.exports = sliders;