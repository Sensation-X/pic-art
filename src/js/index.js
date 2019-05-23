window.addEventListener('DOMContentLoaded', function () {

    'use strict';

    let burger = require('./parts/burger.js'),
        sliders = require('./parts/sliders.js'),
        sizes = require('./parts/sizes.js'),
        styleBlock = require('./parts/style-block.js'),
        accordion = require('./parts/accordion.js');




    burger();
    sliders();
    accordion();
    sizes();
    styleBlock();
});