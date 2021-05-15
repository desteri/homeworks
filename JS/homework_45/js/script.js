// ДЗ 33, функции на кнопках, поэтому они всегда будут тут
// Проверка авторизации в форме
function signIn() {
    
    "use strict";
    let signIn = document.getElementsByClassName("sign__btn");

    let myFunc = function(event) {
        
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

    let funcTag = function(event) {
        
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

// ДЗ 45
class User {
    
    constructor (name, surname, year) {

        this.name = name;
        this.surname = surname;
        this.year = year;

    }

    getFullName() {

        alert(`Имя студента: ${this.name}\nФамилия студента: ${this.surname}`);

    }

}

class Student extends User{

    constructor (name, surname, year) {

        super(name, surname, year);

    }

    getCourse() {

        let course = new Date();

        alert('Курс: ' + ((+course.getFullYear()) - this.year));

    }

}

const univer = new Student('Хьюстон', 'У нас проблемы', 2018);

univer.getFullName();

univer.getCourse();
