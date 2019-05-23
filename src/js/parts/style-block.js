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