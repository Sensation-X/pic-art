function mask() {
    let inpMask = document.querySelectorAll('input'),
        textAreaMask = document.querySelector('textarea');
    textAreaMask.addEventListener('input', (e) => {
        e.target.value = e.target.value.replace(/[^А-Яа-яЁё]/ig, '');
    });
    inpMask.forEach( (e) => {
        if (e.getAttribute('name') == 'name' || e.getAttribute('name') == 'message') {
            e.addEventListener('input', () => {
                e.value = e.value.replace(/[^А-Яа-яЁё,.\-:"()!?/%*]/ig, '');
            });
        }

        if (e.getAttribute('name') == 'phone') {
            let input = e,
                goLength;
            input.addEventListener('input', (e) => {
                input.value = input.value.replace('+7 (', '');
                input.value = input.value.replace(') ', '');
                input.value = input.value.replace(')', '');
                input.value = input.value.replace('-', '');
                let inpSlice = input.value.slice(-1);
                let inpSliceNum = +inpSlice;

                if (isNaN(inpSliceNum) || inpSlice.charCodeAt(0) === 32) {
                    input.value = input.value.slice(0, input.value.length - 1);
                } else if (e.data == null && goLength == 3) {
                    input.value = input.value.slice(0, input.value.length - 1);
                }

                goLength = input.value.length;

                if (input.value.length < 3) {
                    input.value = "+7 (".concat(input.value.slice(0, 3), ")");
                    input.setSelectionRange(input.value.length - 1, input.value.length - 1);
                } else if (input.value.length == 3) {
                    input.value = "+7 (".concat(input.value.slice(0, 3), ")");
                } else if (input.value.length > 3 && input.value.length < 7) {
                    input.value = "+7 (".concat(input.value.slice(0, 3), ") ").concat(input.value.slice(3, 6));
                } else if (input.value.length > 6) {
                    input.value = "+7 (".concat(input.value.slice(0, 3), ") ").concat(input.value.slice(3, 6), "-").concat(input.value.slice(6, 10));
                }
            });
        }
    });
}

module.exports = mask;