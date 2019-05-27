
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