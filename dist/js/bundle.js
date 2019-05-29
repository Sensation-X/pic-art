/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

window.addEventListener('DOMContentLoaded', function () {

    'use strict';

    let burger = __webpack_require__(/*! ./parts/burger.js */ "./src/js/parts/burger.js"),
        sizes = __webpack_require__(/*! ./parts/sizes.js */ "./src/js/parts/sizes.js"),
        styleBlock = __webpack_require__(/*! ./parts/style-block.js */ "./src/js/parts/style-block.js"),
        accordion = __webpack_require__(/*! ./parts/accordion.js */ "./src/js/parts/accordion.js"),
        feedbackSlider = __webpack_require__(/*! ./parts/feedback-slider.js */ "./src/js/parts/feedback-slider.js"),
        filtration = __webpack_require__(/*! ./parts/filtration.js */ "./src/js/parts/filtration.js"),
        consultation = __webpack_require__(/*! ./parts/consultation.js */ "./src/js/parts/consultation.js"),
        popups = __webpack_require__(/*! ./parts/popups.js */ "./src/js/parts/popups.js"),
        gift = __webpack_require__(/*! ./parts/fixed-gift.js */ "./src/js/parts/fixed-gift.js"),
        calculator = __webpack_require__(/*! ./parts/calculator.js */ "./src/js/parts/calculator.js"),
        mask = __webpack_require__(/*! ./parts/mask.js */ "./src/js/parts/mask.js"),
        form = __webpack_require__(/*! ./parts/form.js */ "./src/js/parts/form.js"),
        sliders = __webpack_require__(/*! ./parts/sliders.js */ "./src/js/parts/sliders.js");




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

/***/ }),

/***/ "./src/js/parts/accordion.js":
/*!***********************************!*\
  !*** ./src/js/parts/accordion.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

function accordion() {
    let accordionHeadings = document.querySelectorAll('.accordion-heading'),
        accordionBlocks = document.querySelectorAll('.accordion-block');

    accordionBlocks.forEach((item) => {
        item.style.display = 'none';
        item.classList.add('animated');
        item.classList.add('slideInDown');
    });

    let activePanel;
    accordionHeadings.forEach((item, i, accordionHeadings) => {
        item.addEventListener('click', function (e) {
            this.classList.add('ui-accordion-header-active');
            this.nextElementSibling.classList.add('ui-accordion-content-active');
            this.nextElementSibling.style.display = 'block';

            if (activePanel) {
                activePanel.classList.remove('ui-accordion-header-active');
                activePanel.nextElementSibling.classList.remove('ui-accordion-content-active');
                activePanel.nextElementSibling.style.display = 'none';
            }
            activePanel = (activePanel === this) ? 0 : this;
        });
    });
}

module.exports = accordion;

/***/ }),

/***/ "./src/js/parts/burger.js":
/*!********************************!*\
  !*** ./src/js/parts/burger.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

function burger() {
    let burgerBtn = document.querySelector('.burger'),
        burgerMenu = document.querySelector('.burger-menu'),
        temp = 0;

    window.addEventListener('resize', () => {
        let menuHidden = document.querySelector('.header-menu').offsetWidth;
        if (menuHidden) {
            burgerMenu.style.display = 'none';
        }
    });

    burgerBtn.addEventListener('click', () => {
        let menuHidden = document.querySelector('.header-menu').offsetWidth;
        if (!menuHidden) {
            if (temp == 0) {
                burgerMenu.style.display = 'block';
                temp++;
            } else {
                burgerMenu.style.display = 'none';
                temp--;
            }
        }
    });
}
module.exports = burger;

/***/ }),

/***/ "./src/js/parts/calculator.js":
/*!************************************!*\
  !*** ./src/js/parts/calculator.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function calsulator() {
    let size = document.querySelector('#size'),
        material = document.querySelector('#material'),
        options = document.querySelector('#options'),
        promocode = document.querySelector('.promocode'),
        priceInput = document.querySelector('.calc-price');
    let sizePrice = {
        1: 500, 2: 1000, 3: 1500, 4: 2000
    },
        materialPrice = {
            1: 500, 2: 1000, 3: 1500
        },
        optionsPrice = {
            1: 500, 2: 1000, 3: 1500
        };

    function priceChange() {
        if (size.options.selectedIndex > 0 && material.options.selectedIndex > 0) {
            let price = sizePrice[size.options.selectedIndex] + materialPrice[material.options.selectedIndex];

            if (options.options.selectedIndex > 0) {
                price = price + optionsPrice[options.options.selectedIndex];
            }

            if (promocode.value == 'IWANTPOPART') {
                price = price * 0.7;
            }

            priceInput.textContent = price;
        } else {
            priceInput.textContent = 'Для расчета нужно выбрать размер картины и материал картины';
        }
    }

    size.addEventListener('change', () => {
        priceChange();
    });
    material.addEventListener('change', () => {
        priceChange();
    });
    options.addEventListener('change', () => {
        priceChange();
    });
    promocode.addEventListener('input', () => {
        priceChange();
    });
}

module.exports = calsulator;




/***/ }),

/***/ "./src/js/parts/consultation.js":
/*!**************************************!*\
  !*** ./src/js/parts/consultation.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function consultation() {
    let btnConsultation = document.querySelectorAll('.button-consultation'),
    popupConsultation = document.querySelector('.popup-consultation'),
    modalWindow = document.querySelectorAll('.modal-window'),
    temp = 0;
    
    btnConsultation.forEach((item) => {
    item.addEventListener('click', () => {
        popupConsultation.classList.add("show");
        popupConsultation.classList.add("smooth");
        popupConsultation.style.display = 'block';
        document.body.style.overflow = 'hidden';
    });
    });
    
    popupConsultation.addEventListener('click', (e) => {
    if (e.target.classList.contains('popup-close') || e.target.classList.contains('popup-consultation')) {
        popupConsultation.classList.remove("show");
        popupConsultation.classList.remove("smooth");
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

/***/ }),

/***/ "./src/js/parts/feedback-slider.js":
/*!*****************************************!*\
  !*** ./src/js/parts/feedback-slider.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

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
        SecondSlider[SecondSliderTurn - 1].classList.remove('slideInLeft');
        SecondSlider[SecondSliderTurn - 1].classList.add('slideInLeft');
    });
    next.addEventListener('click', function () {
        plusSecondSlider(1);
    });
    setInterval(plusSecondSlider, 6000, 1);
};

module.exports = feedbackSlider;

/***/ }),

/***/ "./src/js/parts/filtration.js":
/*!************************************!*\
  !*** ./src/js/parts/filtration.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function filtration() {
    let portfolioWrapper = document.querySelector('.portfolio-wrapper'),
        portfolioBlock = portfolioWrapper.querySelectorAll('.portfolio-block'),
        portfolioMenu = document.querySelector('.portfolio-menu'),
        portfolioMenuItem = portfolioMenu.querySelectorAll('li'),
        portfolioNo = document.querySelector('.portfolio-no');
    portfolioMenuItem.forEach((e) => {
        e.addEventListener('click', () => {
            portfolioMenuItem.forEach((e) => {
                e.classList.remove('active');
            });
            let classN = e.className,
                log = 0;
            e.classList.add('active');
            portfolioBlock.forEach((elem) => {
                if (!elem.classList.contains(classN)) {
                    elem.style.display = 'none';
                } else {
                    log = 1;
                    elem.style.display = '';
                }
            });
            if (log == 0) {
                portfolioNo.style.display = 'block';
            } else {
                portfolioNo.style.display = '';
            }
        });
    });
}

module.exports = filtration;

/***/ }),

/***/ "./src/js/parts/fixed-gift.js":
/*!************************************!*\
  !*** ./src/js/parts/fixed-gift.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

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

/***/ }),

/***/ "./src/js/parts/form.js":
/*!******************************!*\
  !*** ./src/js/parts/form.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {


function form() {
    function sendForm(e) {
        let form = e,
            statusMessage = document.createElement('div'),
            input = form.querySelectorAll('input'),
            textarea = form.querySelectorAll('textarea');
        statusMessage.classList.add('status-message');
        form.addEventListener('submit', (event) => {
            let innerCode;
            event.preventDefault();
            let tel = form.querySelector('input[name=phone]');

            function postData() {
                return new Promise((resolve, reject) => {
                    let request = new XMLHttpRequest(); 
                    request.open('POST', 'server.php');
                    request.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
                    let formData = new FormData(form);
                    request.send(formData); 
                    innerCode = form.innerHTML;
                    form.innerHTML = '';
                    form.appendChild(statusMessage);
                    request.addEventListener('readystatechange', () => {
                        if (request.readyState < 4) {
                            resolve();
                        } else if (request.readyState == 4 && request.status == 200) {
                            resolve();
                        } else {
                            reject();
                        }
                    });
                });
            }

            function clearInput() {
                for (let i = 0; i < input.length; i++) {
                    input[i].value = '';
                }
                for (let _i = 0; _i < textarea.length; _i++) {
                    textarea[_i].value = '';
                }
            }

            function closeForm(status) {
                statusMessage.innerHTML = status;
                let timeLog = 0;
                let closeFormTimer = setInterval(() => {
                    timeLog = timeLog + 20;
                    if (timeLog == 2000) {
                        form.innerHTML = innerCode;
                        clearInput();
                        if (form.className.indexOf('popup') != -1) {
                            let popupClass = document.querySelector('.' + form.className.slice(0, -5));
                            popupClass.style.display = 'none';
                            document.querySelector('body').style.overflow = '';
                        }
                        clearInterval(closeFormTimer);
                    }
                }, 20);
            }

            if (tel.value.length != 17) {
                tel.style.border = '1px solid red';
            } else {
                tel.style.border = '';
                postData().then(() => {
                    closeForm('<p>Идет отправка</p>');
                }).then(() => {
                    closeForm('<p>Спасибо! Мы с Вами свяжемся</p>');
                }).catch(() => {
                    closeForm('<p>Произошла ошибка</p>');
                });
            }
        });
    }

    let form = document.querySelectorAll('form');
    form.forEach((e) => {
        if (!e.classList.contains('form-calc')) {
            sendForm(e);
        }
    });
}

module.exports = form;

/***/ }),

/***/ "./src/js/parts/mask.js":
/*!******************************!*\
  !*** ./src/js/parts/mask.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

function masks() {
    var inputs = document.querySelectorAll('input'),
        textArea = document.querySelector('textarea');
    textArea.addEventListener('input', function (e) {
        e.target.value = e.target.value.replace(/[^а-яё0-9 ,.\-:"()!?/%*]/ig, '');
    });
    inputs.forEach(function (e) {
        if (e.getAttribute('name') == 'name') {
            e.addEventListener('input', function () {
                e.value = e.value.replace(/[^а-яёА-ЯЁ]/ig, '');
            });
        }
    });
    //Маска для нижней формы
    const tel1 = document.querySelector('#tel1');
    let num1 = tel1.value.length;
    tel1.value = '+7 (';

    tel1.addEventListener('keydown', (e) => {
        e.preventDefault();
        if (e.key.match(/[0-9]/) && num1 < 18 && (num1 == '8' || num1 == '15' || num1 == '12')) {
            tel1.value += ' ' + e.key;
            num1 = tel1.value.length;
        } else if (e.key.match(/[0-9]/) && num1 < 18) {
            tel1.value += e.key;
            num1 = tel1.value.length;
            if (num1 == '7') {
                tel1.value += ') ';
            } else if (num1 == '12' || num1 == '15') {
                tel1.value += ' ';
            }
            num1 = tel1.value.length;
        }

        if (e.key == 'Backspace') {
            if (num1 == '14' || num1 == '17' || num1 == '10' || num1 == '8') {
                tel1.value = tel1.value.substring(0, num1 - 2);
            } else if (num1 > 4) {
                tel1.value = tel1.value.substring(0, num1 - 1);
            }
            num1 = tel1.value.length;
        }
    });
    // маска для маленькой формы
    const tel2 = document.querySelector('#tel2');
let num2 = tel2.value.length;
tel2.value = '+7 (';

tel2.addEventListener('keydown', (e) => {
    e.preventDefault();
    if (e.key.match(/[0-9]/) && num2 < 18 && (num2 == '8' || num2 == '15' || num2 == '12')) {
        tel2.value += ' ' + e.key;
        num2 = tel2.value.length;
    } else if (e.key.match(/[0-9]/) && num2 < 18) {
        tel2.value += e.key;
        num2 = tel2.value.length;
        if (num2 == '7') {
            tel2.value += ') ';
        } else if (num2 == '12' || num2 == '15') {
            tel2.value += ' ';
        }
        num2 = tel2.value.length;
    }

    if (e.key == 'Backspace') {
        if (num2 == '14' || num2 == '17' || num2 == '10' || num2 == '8') {
            tel2.value = tel2.value.substring(0, num2 - 2);
        } else if (num2 > 4) {
            tel2.value = tel2.value.substring(0, num2 - 1);
        }
        num2 = tel2.value.length;
    }
});
}
// маска для главной формы
const tel3 = document.querySelector('#tel3');
let num3 = tel3.value.length;
tel3.value = '+7 (';

tel3.addEventListener('keydown', (e) => {
    e.preventDefault();
    if (e.key.match(/[0-9]/) && num3 < 18 && (num3 == '8' || num3 == '15' || num3 == '12')) {
        tel3.value += ' ' + e.key;
        num3 = tel3.value.length;
    } else if (e.key.match(/[0-9]/) && num3 < 18) {
        tel3.value += e.key;
        num3 = tel3.value.length;
        if (num3 == '7') {
            tel3.value += ') ';
        } else if (num3 == '12' || num3 == '15') {
            tel3.value += ' ';
        }
        num3 = tel3.value.length;
    }

    if (e.key == 'Backspace') {
        if (num3 == '14' || num3 == '17' || num3 == '10' || num3 == '8') {
            tel3.value = tel3.value.substring(0, num3 - 2);
        } else if (num3 > 4) {
            tel3.value = tel3.value.substring(0, num3 - 1);
        }
        num3 = tel3.value.length;
    }
});

module.exports = masks;

/***/ }),

/***/ "./src/js/parts/popups.js":
/*!********************************!*\
  !*** ./src/js/parts/popups.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

function popup() {
    let popupBtn = document.getElementsByTagName("body")[0],
        popupDesign = document.querySelector(".popup-design");

    popupBtn.addEventListener("click", (event) => {
        let target = event.target;

        if (target && target.classList.contains("show")) {
            target.classList.remove('show');
            document.body.style.overflow = '';
        }

        if (target && target.classList.contains("button-design")) {
            popupDesign.classList.add("show");
            popupDesign.classList.add("smooth");
        } 
    });

    let popupClose = document.querySelectorAll(".popup-close");
    popupClose.forEach( (item) => {
        item.addEventListener("click",  () => {
            popupDesign.classList.remove("show");
            popupDesign.classList.remove("smooth");
            document.body.style.overflow = "";
        });
    });
}

module.exports = popup;

/***/ }),

/***/ "./src/js/parts/sizes.js":
/*!*******************************!*\
  !*** ./src/js/parts/sizes.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

function sizes() {
    let sizesBlock = document.querySelectorAll('.sizes-block');

    function showSize(p, img, i) {
        img.setAttribute('src', "img/sizes-".concat(i + 1, "-1.png"));
        p.forEach( (e) => {
            if (e.className != 'sizes-hit') {
                e.style.display = 'none';
            }
        });
    }
    
    function hideSize(p, img, i) {
        img.setAttribute('src', "img/sizes-".concat(i + 1, ".png"));
        p.forEach( (e) => {
            e.style.display = '';
        });
    }
    
    sizesBlock.forEach( (e, i) => {
        let p = e.querySelectorAll('p'),
            img = e.querySelector('img');
        e.addEventListener('mouseover',  () => {
            showSize(p, img, i);
        });
        e.addEventListener('mouseout',  () => {
            hideSize(p, img, i);
        });
    });
    sizesBlock.forEach( (e, i) => {
        let p = e.querySelectorAll('p'),
            img = e.querySelector('img');
        window.addEventListener('touchstart',  (elem) => {
            if (elem.target == p[0] || elem.target == p[1] || elem.target == p[2] || elem.target == p[3] || elem.target == img) {
                showSize(p, img, i);
            } else {
                hideSize(p, img, i);
            }
        });
    });
}

module.exports = sizes;

/***/ }),

/***/ "./src/js/parts/sliders.js":
/*!*********************************!*\
  !*** ./src/js/parts/sliders.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

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

/***/ }),

/***/ "./src/js/parts/style-block.js":
/*!*************************************!*\
  !*** ./src/js/parts/style-block.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function styleBlock() {
    var hiddenStyleBlock = document.querySelectorAll('.styles-2'),
        btnStyleBlock = document.querySelector('.button-styles');
    btnStyleBlock.addEventListener('click', () => {
        btnStyleBlock.style.display = 'none';
        hiddenStyleBlock.forEach( (e) => {
            e.classList.remove("hidden-lg", "hidden-md", "hidden-sm", "hidden-xs");
            e.classList.add("col-sm-3", "col-sm-offset-0", "col-xs-10", "col-xs-offset-1");
        });
    });
}

module.exports = styleBlock;

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map