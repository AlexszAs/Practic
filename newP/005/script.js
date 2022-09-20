'use strict';

const box = document.querySelector('.box'),
    btn = document.querySelector('button');

// const width = box.clientWidth;
// const heigh = box.clientHeight;

const width = box.scrollWidth;
const height = box.scrollHeight;

console.log(height, width);
btn.addEventListener('click', () => {
    // box.style.height = box.scrollHeight + 'px';
    console.log(box.scrollTop);
});

console.log(box.getBoundingClientRect().top);

const style = window.getComputedStyle(box);
console.log(style.display);