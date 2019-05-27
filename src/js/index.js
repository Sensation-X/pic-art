window.addEventListener('DOMContentLoaded', function () {

    'use strict';

    let burger = require('./parts/burger.js'),
        sizes = require('./parts/sizes.js'),
        styleBlock = require('./parts/style-block.js'),
        accordion = require('./parts/accordion.js'),
        feedbackSlider = require('./parts/feedback-slider.js'),
        filtration = require('./parts/filtration.js'),
        consultation = require('./parts/consultation.js'),
        popups = require('./parts/popups.js'),
        gift = require('./parts/fixed-gift.js'),
        calculator = require('./parts/calculator.js'),
        mask = require('./parts/mask.js'),
        form = require('./parts/form.js'),
        sliders = require('./parts/sliders.js');




    burger();
    accordion();
    sizes();
    styleBlock();
    sliders();
    feedbackSlider();
    filtration();
    consultation();
    popups();
    gift();
    calculator();
    mask();
    form();
});