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

// ДЗ 43
function chngBgClr() {

    let red = document.getElementsByClassName('buttons__red')[0];
    let green = document.getElementsByClassName('buttons__green')[0];
    let blue = document.getElementsByClassName('buttons__blue')[0];

    let chng = (event) => {

        if(event.target == red) {

            document.body.style.background = '#af2f2f';

        } else if (event.target == green) {

            document.body.style.background = '#2faf2f';

        } else if (event.target == blue) {

            document.body.style.background = '#2f3caf';

        }

    };

    red.addEventListener('click', chng);
    green.addEventListener('click', chng);
    blue.addEventListener('click', chng);

}

chngBgClr();