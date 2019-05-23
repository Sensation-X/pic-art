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