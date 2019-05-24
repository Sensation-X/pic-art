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