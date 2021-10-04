'use strict';

let positions = [
    'Телепорт бытовой VZHIH-101',
    'Отвертка ультразвуковая WHO-D',
    'Ховерборд Mattel 2016',
    'Нейтрализатор FLASH black edition',
    'Меч световой FORCE (синий луч)'
];

var prices = [
    10000,
    4800,
    9200,
    2500,
    57000
];

let hitName = positions[2],
    hitPrice = prices[2];

const hit = {hitName, hitPrice};

console.log(`Хит продаж мартобря: <${hit.hitName}> цена ${hit.hitPrice} Q`);

let product1 = {
    name: 'Телепорт бытовой VZHIH-101',
    price: 10000
};

let product2 = {
    name: 'Отвертка ультразвуковая WHO-D',
    price: 4800
};

let product3 = {
    name: 'Ховерборд Mattel 2016',
    price: 9200
};

let product4 = {
    name: 'Нейтрализатор FLASH black edition',
    price: 2500
};

let product5 = {
    name: 'Меч световой FORCE (синий луч)',
    price: 57000
};

const items = [product1, product2, product3, product4, product5];

console.log(`Купите ${items[4].name} по цене ${items[4].price} Q
`);