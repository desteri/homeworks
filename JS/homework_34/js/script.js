"use script";
// 33 ДЗ
// Проверка авторизации в форме
let signIn = document.getElementsByClassName("sign__btn");

let myFunc = function(event) {
    "use strict";
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

// Создание тега в той же форме, кнопка Create Tag
let createTag = document.getElementsByClassName("create");

let funcTag = function(event) {
    "use strict";
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

// 34 ДЗ
// 1 Задание
let pseudo = {0: 'first', 1: 'second', 2: 'third', length: 3};
console.log(pseudo);

let array = [];

for (let i = 0; i < pseudo.length; i++) {
    array.push(pseudo[i]);
}

console.log(array);

// 2 Задание
let arr = ['first', 'second', 'third'];
let chars = [];
console.log(arr);

for (let j = 0; j < arr.length; j++) {
    chars.push(arr[j].split(''));
}

console.log(chars);