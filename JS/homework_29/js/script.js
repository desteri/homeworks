"use strict";

// Задание 1
let prdct = document.getElementsByClassName("list__item");

for(let list of prdct) {
    console.log(list.innerText);
}

// Задание 2
var elements = document.getElementsByClassName("add");

var myFunction = function() {
    var title = this.parentNode.parentNode.querySelectorAll(".title");
    var price = this.parentNode.parentNode.querySelectorAll(".price > span");
    var image = this.parentNode.parentNode.querySelectorAll(".image");
    console.log(title[0].innerText, price[0].innerText, image[0].getAttribute('src'));
};

for(var i = 0; i < elements.length; i++) {
    elements[i].addEventListener('click', myFunction, false);
}

let titleProduct = document.getElementsByClassName("title");
let priceProduct = document.getElementsByClassName("curr__price");

function PT() {
    for(var i = 0; i < titleProduct.length; i++) {
        priceProduct[i].innerText = "Animal Print Sweatshirt";
    }
}

function TP() {
    for(var j = 0; j < priceProduct.length; j++) {
        titleProduct[j].innerText = "$36.00";
    }
}

PT();
TP();