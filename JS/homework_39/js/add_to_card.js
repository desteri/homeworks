
let className = document.getElementsByClassName("add__card");

let myFunction = function(event) {
    
    "use strict";
    event.preventDefault();
    
    let title = this.parentNode.parentNode.parentNode.querySelectorAll(".item__title a");
    let price = this.parentNode.parentNode.parentNode.querySelectorAll(".price .price__sum");
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
                                    '<span class="currency">$</span>' + 
                                    '<span class="price__sum">' + price[0].innerText + '</span>' +
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
    
    delProduct();
    totalCash();

};

for (var i = 0; i < className.length; i++) {
    
    className[i].addEventListener('click', myFunction, false);

}


function delProduct() {
    
    "use strict";
    let trash = document.querySelectorAll('.trash');

    let delFunction = function(event) {

        event.preventDefault();

        this.parentNode.parentNode.remove();

        totalCash();
    };

    for (var i = 0; i < trash.length; i++) {

        trash[i].addEventListener('click', delFunction, false);

    }

}

function totalCash() {

    "use strict";
    let priceSum = document.querySelectorAll('.info__price .price__sum');
    let sum = 0;

    for (var i = 0; i < priceSum.length; i++) {
        
        sum += (+priceSum[i].textContent);
        
    }    
    
    document.querySelectorAll('.shopcard__total .total__sum')[0].innerHTML = `$${sum}`;

}