"use strict";

let raise = Number(prompt("Введите, возводимое в степень, число:", ''));
let pow = Number(prompt("Введите, на какую степень надо возвезти, число:", ''));

function raisePower(p, n) {
    let res = Math.pow(p, n);
    
    alert(p + " возвести на " + n + " будет: " + res);
}

raisePower(raise, pow);


let rad = Number(prompt("Введите радиус:", ''));

function areaCircle(r) {
    let pi = 3.14;
    let s = pi * Math.pow(r, 2);

    alert("Площадь круга равна: " + s);
}

areaCircle(rad);


let height = Number(prompt("Введите длину прямоугольника", ''));
let width = Number(prompt("Введите ширину прямоугольника:", ''));

function areaRect(a, b) {
    let s = a * b;
    
    alert("Площадь прямоугольника равна: " + s);
}

areaRect(height, width);