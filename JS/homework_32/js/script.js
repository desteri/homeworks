"use strict";

let firstNum = Number(prompt("Введите первое число:", ''));
let secondNum = Number(prompt("Введите второе число:", ''));

function fix(x, y) {
    let res = Math.round(x + y);
    alert("Результат с округением: " + res);
}

fix(firstNum, secondNum);