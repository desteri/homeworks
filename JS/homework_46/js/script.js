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

// ДЗ 46, добавляет товар при помощи кнопки. Тоже всегда будет тут
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