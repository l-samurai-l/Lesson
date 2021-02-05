"use strict";

let num = 20;

function showFirstMessage(text, arg) {
    console.log(text);

    let num = 10;
    console.log(num);
}

showFirstMessage('ok');
console.log(num);

function calc(a, b) {
    return (a + b);
}

console.log(calc(5, 10));
console.log(calc(6, 39));
console.log(calc(1, 6));

function ret() {
    let num = 50;
    return num;
}

const anotherNum = ret();
console.log(anotherNum);

const logger = function() {
    console.log('ok');
};

logger();

const calcNum = (a, b) => {
    console.log('ok');
    return a + b;
};
