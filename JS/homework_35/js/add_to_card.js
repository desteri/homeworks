let className = document.getElementsByClassName("add__card");

let myFunction = function(event) {
    "use strict";
    event.preventDefault();
    
    let title = this.parentNode.parentNode.parentNode.querySelectorAll(".item__title a");
    let price = this.parentNode.parentNode.parentNode.querySelectorAll(".price span");
    let image = this.parentNode.parentNode.parentNode.querySelectorAll(".item__img img");
    let delPrice = this.parentNode.parentNode.parentNode.querySelectorAll(".price del");
    
    let createLi = document.createElement('li');

    createLi.innerHTML = '<div class="bag__item">' +
                            '<div class="bag__img">' +
                                '<a href="#">' +
                                    '<img src="' + image[0].src + '" alt="">' +
                                '</a>' +
                            '</div>' +
                            '<div class="bag__info">' +
                                '<p class="info__title"><a href="#">' + title[0].innerText + '</a></p>' +
                                '<div class="info__price">' +
                                    '<span>' + price[0].innerText + '</span>' +
                                    '<del>' + delPrice[0].innerText + '</del>' +
                                '</div>' +
                                '<div class="trash">' +
                                    '<a href="#"><i class="far fa-trash-alt"></i></a>' +
                                '</div>' +
                            '</div>' +
                        '</div>';

    let blockCard = document.querySelector('.bag ul');
    blockCard.appendChild(createLi);

    alert("Товары успешно добавлены в корзину!");

};

for (var i = 0; i < className.length; i++) {
    className[i].addEventListener('click', myFunction, false);
}