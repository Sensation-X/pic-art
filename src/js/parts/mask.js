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