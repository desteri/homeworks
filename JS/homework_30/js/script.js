"use strict";

let pi = 3.14;
let param = prompt("Введите радиус:", '');

function cirFer(rad) {
    var cf = 2 * pi * rad;
    alert("Длина окружности: " + cf);
}

cirFer(param);

let first = prompt("Введите первое число:", '');
let second = prompt("Введите второе число:", '');

function min(a, b) {
    var res = Math.min(a, b);
    alert(res);
}

min(first, second);