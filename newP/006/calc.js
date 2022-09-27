'use strict';

const days = document.querySelector('#days'),
    pay = document.querySelector('#pay'),
    hours = document.querySelector('#hours'),
    days2 = document.querySelector('#days2'),
    hours2 = document.querySelector('#hours2'),
    btn = document.querySelector('button'),
    res = document.querySelector('#result');


btn.addEventListener('click', function() {
    const a = pay.value * days.value * hours.value;
    const b = pay.value * days2.value * hours2.value;
    const ammount = a + b;
    res.innerHTML = `${ammount}`;
});