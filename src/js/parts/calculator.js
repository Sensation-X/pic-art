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


