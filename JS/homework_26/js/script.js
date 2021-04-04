"use strict";

let result;
let fNum = Number(prompt("Введите первое число: "));
let lNum = Number(prompt("Введите второе число: "));
let answer = prompt("Введите + (суммировать), - (вычитать), * (умножить), % (остаток), / (делить), ** (возведение в степень):");

if (answer == "+") {
    result = fNum + lNum;
} else if (answer == "-") {
    result = fNum - lNum;
} else if (answer == "*") {
    result = fNum * lNum;
} else if (answer == "%") {
    result = fNum % lNum;
} else if (answer == "/") {
    result = fNum / lNum;
} else if (answer == "**") {
    result = fNum ** lNum;
}

alert(result);

let Name = prompt("Введите логин:", "login");
let Password = prompt("Введите пароль", "password");

if (Name == "login" && Password == "password") {
    alert("Welcome");
} else if (Name != "login") {
    alert("Логин не правильный");
} else if (Password != "password") {
    alert("Пароль не правильный");
}