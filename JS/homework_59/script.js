// Функции на кнопках, поэтому они всегда будут тут
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

// Добавляет товар при помощи кнопки. Тоже всегда будет тут
function createProduct() {

    "use strict";
    let crtPrdct = document.getElementsByClassName('heading__btn');

    let funcCreate = function (event) {

        event.preventDefault();

        let saleNew = prompt('Введите скидку на товар / новый товар:', '-25% / New');
        let color = prompt('Цвет флажка скидки / нового товара:', 'green / orange');
        let image = prompt('Введите адрес картинки товара:', 'img/img61.jpg');
        let title = prompt('Введите название товара:', 'Crepe Jacket With Pompom');
        let newPrice = prompt('Введите новую цену для товара (в сомах):', '1230');
        let oldPrice = prompt('Введите старую цену для товара (в сомах):', '2500');

        class create {

            constructor(tooltips, tooltipsColor, img, title, originPrice, oldPrice, item) {

                this.tooltips = tooltips;
                this.tooltipsColor = tooltipsColor;
                this.img = img;
                this.title = title;
                this.originPrice = originPrice;
                this.oldPrice = oldPrice;
                this.item = document.querySelector(item);
                this.currency = 85;
                this.originPrice = this.convertToUSD(this.originPrice);
                this.oldPrice = this.convertToUSD(this.oldPrice);

            }

            convertToUSD(price) {

                const result = price / this.currency;
                return result.toFixed(2);

            }

            render() {

                const div = document.createElement('div');

                div.classList.add('list__item');
                div.innerHTML = `
                                <div class="item__img">
                                    <div class="tooltips ${this.tooltipsColor}">
                                        <span>${this.tooltips}</span>
                                    </div>

                                    <img class="image" src=${this.img} alt="">

                                    <div class="arrows">
                                        <span><i class="fas fa-arrows-alt"></i> Quick view</span>
                                    </div>
                                </div>
                                <div class="item__title">
                                    <a class="title" href="#">${this.title}</a>

                                    <div class="stars">
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <span>6 Review(s)</span>
                                    </div>

                                    <div class="price">
                                        <span class="currency">$</span>
                                        <span class="price__sum">${this.originPrice}</span>
                                        <del>$${this.oldPrice}</del>
                                    </div>
                                </div>

                                <div class="item__hide">
                                    <div class="item__icon">
                                        <a class="icon__hidden add__card" href="#"><i class="fas fa-shopping-bag"></i></a>
                                    </div>

                                    <div class="item__icon">
                                        <a class="icon__hidden" href="#"><i class="fas fa-balance-scale"></i></a>
                                    </div>

                                    <div class="item__icon">
                                        <a class="icon__hidden" href="#"><i class="fas fa-heart"></i></a>
                                    </div>
                                </div>
                `;

                this.item.append(div);

            }

        }

        new create(saleNew, color, image, title, newPrice, oldPrice, '.main__list').render();

    };

    crtPrdct[0].addEventListener('click', funcCreate, false);

}

createProduct();

function allProduct() {

    'use strict';

    class cartProduct {

        constructor(tooltips, tooltipsClass, img, title, originPrice, oldPrice, innerBlock) {

            this.tooltips = tooltips;
            this.tooltipsClass = tooltipsClass;
            this.img = img;
            this.title = title;
            this.originPrice = originPrice;
            this.oldPrice = oldPrice;
            this.innerBlock = document.querySelector(innerBlock);
            this.currency = 85;
            this.originPrice = this.convertToUSD(this.originPrice);
            this.oldPrice = this.convertToUSD(this.oldPrice);

        }

        convertToUSD(price) {

            const result = price / this.currency;
            return result.toFixed(2);

        }

        render() {

            const div = document.createElement('div');
            div.classList.add('list__item');
            div.innerHTML = `
                                <div class="item__img">
                                    <div class="tooltips ${this.tooltipsClass}">
                                        <span>${this.tooltips}</span>
                                    </div>

                                    <img class="image" src=${this.img} alt="">

                                    <div class="arrows">
                                        <span><i class="fas fa-arrows-alt"></i> Quick view</span>
                                    </div>
                                </div>
                                <div class="item__title">
                                    <a class="title" href="#">${this.title}</a>

                                    <div class="stars">
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <span>6 Review(s)</span>
                                    </div>

                                    <div class="price">
                                        <span class="currency">$</span>
                                        <span class="oprice">${this.originPrice}</span>

                                        <del>$${this.oldPrice}</del>
                                    </div>
                                </div>

                                <div class="item__hide">
                                    <div class="item__icon">
                                        <a class="icon__hidden add__card" href="#"><i class="fas fa-shopping-bag"></i></a>
                                    </div>

                                    <div class="item__icon">
                                        <a class="icon__hidden" href="#"><i class="fas fa-balance-scale"></i></a>
                                    </div>

                                    <div class="item__icon">
                                        <a class="icon__hidden" href="#"><i class="fas fa-heart"></i></a>
                                    </div>
                                </div>
            `;

            this.innerBlock.append(div);

        }

    }

    const getProduct = async (url) => {

        const result = await fetch(url);

        if (!result.ok) {
            throw new Error(`Ошибка fetch ${url} статус: ${result.status}`);
        }

        return await result.json();

    };

    getProduct('http://localhost:3000/products')
        .then(data => {

            data.forEach(({
                ttl,
                color,
                img,
                title,
                origin_price,
                old_price
            }) => {

                new cartProduct(ttl, color, img, title, origin_price, old_price, '.main__list').render();

            });

        });

}

allProduct();

// Поисковик
function search() {

    "use strict";

    const search = document.querySelector("[name = 'search']"),
        btnSearch = document.querySelector(".search button"),
        searchRes = document.querySelector(".search__result");

    btnSearch.addEventListener('click', (event) => {

        event.preventDefault();

        fetch('js/search.php', {
                method: "POST",
                body: JSON.stringify({
                    query: search.value
                }),
                headers: {
                    'Content-type': 'application/json'
                }
            })
            .then(response => response.json())
            .then(json => {

                let createUl = document.createElement('ul');

                for (let i = 0; i < json.length; i++) {

                    createUl.innerHTML += `<li>
                                        <a href="${json[i].href}">${json[i].text}</a>
                                        </li>`;

                }

                searchRes.innerHTML = createUl.outerHTML;

            });

    });

}

search();

// ДЗ 59
function getAuthorization() {

    const buttonSubmit = document.querySelector('#buttonSubmit');

    buttonSubmit.addEventListener('click', () => {

        let userName = document.querySelector('#userName').value;
        let userLogin = document.querySelector('#userLogin').value;
        let userPassword = document.querySelector('#userPassword').value;

        class User {

            #name = 'Санно';
            #login = 'Sanno';
            #password = 'ursimplol';

            checkAll(name, login, password) {
                
                if (name != this.#name || login != this.#login || password != this.#password) {
                    alert('Йо! Ты кто?!');
                } else {
                    return alert(`Привет , добро пожаловать!`);
                }

            }
            
        }

        let user = new User();

        user.#name = 'Тай'; // Не меняется
        user.#login = 'Tai'; // Не меняется
        user.#password = 'nevergiveup'; // Не меняется
        user.checkAll(userName, userLogin, userPassword);

        class Programmer extends User {
            constructor(name, log, pass) {
                super();
                this.name = name;
                this.log = log;
                this.pass = pass;
            }

            method() {
                alert(this.#name);
            }
        }

        let program = new Programmer();

        program.#name = 'Тай'; // Не наследуется
        program.name = 'Тай';
        console.log(program.name);

    });
}

getAuthorization();