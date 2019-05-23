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