"use script";

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