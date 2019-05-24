function feedbackSlider() {
let secondSlider = document.querySelectorAll(".feedback-slider-item"),
    secondSliderTurn = 1,
    prev = document.querySelector(".main-prev-btn"), 
    next = document.querySelector(".main-next-btn"); 

showSecondSlides();
let timerClear; // таймер сброса анимации

function timer() {
    // таймер для анимации налево
    timerClear = setInterval(() => {
        secondSlider[secondSliderTurn - 1].classList.add("slideInRight");
        secondSlider[secondSliderTurn - 1].classList.remove("slideInRight");
        console.log("789");
    }, 5000);
}

let timerSwap; // таймер смены изображений

function timerFunc() {
    timerSwap = setInterval(plusSecondSlides, 6000);
}

timerFunc();

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

    secondSlider.forEach((item) => {
        item.style.display = "none";
    });
    secondSlider[secondSliderTurn - 1].style.display = "block";
    secondSlider[secondSliderTurn - 1].classList.add("slideInRight"); 
    
} 

function viewSlides(n) {
    showSecondSlides(secondSliderTurn += n);
}

prev.addEventListener("click", () => {
    viewSlides(-1); //слайд назад

    clearInterval(timerSwap);
    clearInterval(timer);
    timerFunc();
});
next.addEventListener("click", () => {
    viewSlides(+1); //слайд вперед

    clearInterval(timerSwap);
    clearInterval(timer);
    timerFunc();
});
}
module.exports = feedbackSlider;