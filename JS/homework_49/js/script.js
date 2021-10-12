// ДЗ 33, функции на кнопках, поэтому они всегда будут тут
// Проверка авторизации в форме
function signIn() {

    "use strict";
    let signIn = document.getElementsByClassName("sign__btn");

    let myFunc = function (event) {

        event.preventDefault();

        let login = document.SiRe.login.value;
        let password = document.SiRe.pass.value;

        if (login == "admin" && password == "admin") {
            alert("Добро пожаловать!");
        } else if (login == "" && password == "") {
            alert("Пожалуйста, заполните поля!");
        } else if (login != "admin") {
            alert("Логин не правильный!");
        } else if (password != "admin") {
            alert("Пароль не правильный!");
        }

    };

    signIn[0].addEventListener('click', myFunc, false);

}

// Создание тега в той же форме, кнопка Create Tag
function createTag() {

    "use strict";
    let createTag = document.getElementsByClassName("create");

    let funcTag = function (event) {

        event.preventDefault();

        let crt = prompt("Какой тег создать?", 'div');
        let txt = prompt("Введите текст:", 'Какой-то текст...');
        let clr = prompt("Какого цвета будет текст:", 'red');

        let tag = document.createElement(crt);

        tag.innerText = txt;
        tag.style.color = clr;

        let elemCreate = document.querySelector(".sign");
        elemCreate.appendChild(tag);

    };

    createTag[0].addEventListener('click', funcTag, false);

}

signIn();
createTag();

// ДЗ 49
// При вводе в любом из input'ов валюта конвертируется через Open Server Panel
function exchangeCurrency() {

    "use strict";

    const inputSom = document.querySelector('#som'),
        inputUsd = document.querySelector('#usd'),
        inputRub = document.querySelector('#rub');

    inputSom.addEventListener('input', () => {

        if (!parseInt(inputSom.value) || isNaN(inputSom.value)) {

            alert('Введите число!');
            inputSom.value = "";
            inputUsd.value = "";
            inputRub.value = "";

        } else {
            const request = new XMLHttpRequest();

            request.open("GET", "js/current.json");
            request.setRequestHeader("Content-type", "application/json; charset=UTF-8");
            request.responseType = 'json';
            request.send();

            request.addEventListener('load', () => {

                if (request.status !== 200) {

                    alert("Ошибка сервера..");
                    inputSom.value = "";
                    inputUsd.value = "";
                    inputRub.value = "";

                } else {

                    const currency = request.response;

                    const resSomUsd = inputSom.value * currency.current.somUsd;
                    const resSomRub = inputSom.value * currency.current.somRub;

                    inputUsd.value = (resSomUsd).toFixed(2);
                    inputRub.value = (resSomRub).toFixed(2);
                }

            });
        }

    });

    inputUsd.addEventListener('input', () => {

        if (!parseInt(inputUsd.value) || isNaN(inputUsd.value)) {

            alert('Введите число!');
            inputSom.value = "";
            inputUsd.value = "";
            inputRub.value = "";

        } else {

            const requestUsd = new XMLHttpRequest();

            requestUsd.open("GET", "js/current.json");
            requestUsd.setRequestHeader("Content-type", "application/json; charset=UTF-8");
            requestUsd.responseType = 'json';
            requestUsd.send();

            requestUsd.addEventListener('load', () => {

                if (requestUsd.status !== 200) {

                    alert("Ошибка сервера..");
                    inputSom.value = "";
                    inputUsd.value = "";
                    inputRub.value = "";

                } else {

                    const currency = requestUsd.response;

                    const resUsdSom = inputUsd.value * currency.current.usdSom;
                    const resUsdRub = inputUsd.value * currency.current.usdRub;

                    inputSom.value = (resUsdSom).toFixed(2);
                    inputRub.value = (resUsdRub).toFixed(2);

                }

            });
        }
    });

    inputRub.addEventListener('input', () => {

        if (!parseInt(inputRub.value) || isNaN(inputRub.value)) {

            alert('Введите число!');
            inputSom.value = "";
            inputUsd.value = "";
            inputRub.value = "";

        } else {

            const requestRub = new XMLHttpRequest();

            requestRub.open("GET", "js/current.json");
            requestRub.setRequestHeader("Content-type", "application/json; charset=UTF-8");
            requestRub.responseType = 'json';
            requestRub.send();

            requestRub.addEventListener('load', () => {

                if (requestRub.status !== 200) {

                    alert("Ошибка сервера..");
                    inputSom.value = "";
                    inputUsd.value = "";
                    inputRub.value = "";

                } else {

                    const currency = requestRub.response;

                    const resRubSom = inputRub.value * currency.current.rubSom;
                    const resRubUsd = inputRub.value * currency.current.rubUsd;

                    inputSom.value = (resRubSom).toFixed(2);
                    inputUsd.value = (resRubUsd).toFixed(2);

                }

            });
        }
    });

}

exchangeCurrency();

function search() {

    const search = document.querySelector("[name = 'search']"),
        btnSearch = document.querySelector(".search button"),
        searchRes = document.querySelector(".search__result");

    btnSearch.addEventListener('click', (event) => {

        event.preventDefault();

        if (search.value == "") {

            alert("Пустая строка!");

        } else {

            const requestSrc = new XMLHttpRequest();

            requestSrc.open("GET", "js/search.php?query=" + search.value);
            requestSrc.responseType = 'json';
            requestSrc.send();

            requestSrc.addEventListener('load', () => {

                if (requestSrc.status !== 200) {

                    alert("Ошибка сервера..");

                } else {

                    const data = requestSrc.response;
                    let createData = document.createElement('ul');

                    if (search.value == 'Рубашка' || search.value == 'Платье' || search.value == 'Кофта') {

                        for (let i = 0; i < data.length; i++) {

                            createData.innerHTML += `<li>
                                                        <a href="${data[i].href}">${data[i].text}</a>
                                                        </li>`;

                        }

                        searchRes.innerHTML = createData.outerHTML;

                    } else {

                        createData.innerHTML = `<li>${data.error}</li>`;

                        searchRes.innerHTML = createData.outerHTML;

                    }

                }

            });
        }

    });

}

search();