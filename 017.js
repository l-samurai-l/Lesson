"use strict";

const str = "test";
const arr = [1, 2, 4];

// console.log(str[2] = 'd');

// console.log(str.toUpperCase());
console.log(str.toLocaleLowerCase());
console.log(arr[2]);

const fruit = "Some fruit";

console.log(fruit.indexOf("q"));

const logg = "Hello world";

console.log(logg.slice(6, 11)); //console.log(logg.slice(6));

console.log(logg.substring(6, 11));

console.log(logg.substr(6, 5)); // Сколько символов вырезать 

const num = 12.2;
console.log(Math.round(num));

const test = "12.2px";
console.log(parseInt(test));
console.log(parseFloat(test));