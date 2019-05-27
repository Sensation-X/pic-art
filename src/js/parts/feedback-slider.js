let feedbackSlider = function feedbackSlider() {
    let SecondSliderTurn = 1,
        SecondSlider = document.querySelectorAll('.feedback-slider-item'),
        prev = document.querySelector('.main-prev-btn'),
        next = document.querySelector('.main-next-btn');
    SecondSlider.forEach(function (item) {
        item.classList.add('animated');
    });

    let showSecondSlider = function showSecondSlider(n) {
        if (n > SecondSlider.length) {
            SecondSliderTurn = 1;
        }

        if (n < 1) {
            SecondSliderTurn = SecondSlider.length;
        }

        SecondSlider.forEach(function (item) {
            return item.style.display = 'none';
        });
        SecondSlider[SecondSliderTurn - 1].style.display = 'block';
        SecondSlider.forEach(function (item) {
            item.classList.remove('slideInLeft');
            item.classList.add('slideInRight');
        });
    };

    showSecondSlider(SecondSliderTurn);

    let plusSecondSlider = function plusSecondSlider(n) {
        showSecondSlider(SecondSliderTurn += n);
    };

    prev.addEventListener('click', function () {
        plusSecondSlider(-1);
        SecondSlider[SecondSliderTurn - 1].classList.remove('slideInRight');
        SecondSlider[SecondSliderTurn - 1].classList.add('slideInLeft');
    });
    next.addEventListener('click', function () {
        plusSecondSlider(1);
    });
    setInterval(plusSecondSlider, 6000, 1);
};

module.exports = feedbackSlider;