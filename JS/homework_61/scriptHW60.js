import {user} from "./init.js";

let ul = document.querySelector('.ulHW');

ul.innerHTML = `<ul>
                    <li>Ваше имя: <span>${user.name}</span></li>
                    <li>Ваша фамилия: <span>${user.surname}</span></li>
                    <li>Ваша дата рождения: <span>${user.dateOfBirth}</span></li>
                    <li>Ваше место рождения: <span>${user.placeOfBirth}</span></li>
                </ul>`;