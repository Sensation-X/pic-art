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