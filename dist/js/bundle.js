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
        sliders = __webpack_require__(/*! ./parts/sliders.js */ "./src/js/parts/sliders.js"),
        sizes = __webpack_require__(/*! ./parts/sizes.js */ "./src/js/parts/sizes.js"),
        styleBlock = __webpack_require__(/*! ./parts/style-block.js */ "./src/js/parts/style-block.js"),
        accordion = __webpack_require__(/*! ./parts/accordion.js */ "./src/js/parts/accordion.js");




    burger();
    sliders();
    accordion();
    sizes();
    styleBlock();
});

/***/ }),

/***/ "./src/js/parts/accordion.js":
/*!***********************************!*\
  !*** ./src/js/parts/accordion.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

function accordion() {
    let accordionBlock = document.querySelectorAll(".accordion-block"),
    accordionHeading = document.querySelectorAll(".heading"),
    accordionWrapper = document.querySelector('.often-questions');
    
    function hideBlockContent() {
    for (var i = 0; i < accordionBlock.length; i++) {
        accordionBlock[i].classList.remove("show", "slideInDown");
        accordionBlock[i].classList.add("hide");
        accordionHeading[i].classList.remove("active");
    }
    }
    
    hideBlockContent();
    
    function showBlockContent(b) {
    if (accordionBlock[b].classList.contains("hide")) {
        accordionBlock[b].classList.remove("hide");
        accordionBlock[b].classList.add("show", "slideInDown");
        accordionHeading[b].classList.add("active");
    }
    }
    
    accordionWrapper.addEventListener("click", function (event) {
    let target = event.target;
    
    if (target && target.classList.contains("heading")) {
        for (var i = 0; i < accordionBlock.length; i++) {
            if (target == accordionHeading[i]) {
                hideBlockContent();
                showBlockContent(i);
            }
        }
    }
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
        p.forEach(function (e) {
            if (e.className != 'sizes-hit') {
                e.style.display = 'none';
            }
        });
    }
    
    function hideSize(p, img, i) {
        img.setAttribute('src', "img/sizes-".concat(i + 1, ".png"));
        p.forEach(function (e) {
            e.style.display = '';
        });
    }
    
    sizesBlock.forEach(function (e, i) {
        let p = e.querySelectorAll('p'),
            img = e.querySelector('img');
        e.addEventListener('mouseover', function () {
            showSize(p, img, i);
        });
        e.addEventListener('mouseout', function () {
            hideSize(p, img, i);
        });
    });
    sizesBlock.forEach(function (e, i) {
        let p = e.querySelectorAll('p'),
            img = e.querySelector('img');
        window.addEventListener('touchstart', function (elem) {
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
    btnStyleBlock.addEventListener('click', function () {
        btnStyleBlock.style.display = 'none';
        hiddenStyleBlock.forEach(function (e) {
            e.classList.remove("hidden-lg");
            e.classList.remove("hidden-md");
            e.classList.remove("hidden-sm");
            e.classList.remove("hidden-xs");
            e.classList.add("col-sm-3");
            e.classList.add("col-sm-offset-0");
            e.classList.add("col-xs-10");
            e.classList.add("col-xs-offset-1");
        });
    });
}

module.exports = styleBlock;

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map