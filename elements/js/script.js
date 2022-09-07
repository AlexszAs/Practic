'use strict';

const box = document.getElementById('box'),
    btns = document.getElementsByTagName('button'),
    circles = document.getElementsByClassName('circle'),
    hearts = document.querySelectorAll('.heart'),
    oneHeart = document.querySelector('.heart'),
    wrapper = document.querySelector('.wrapper');

// box.style.backgroundColor = 'Blue';
// box.style.width = '500px';

box.style.cssText = 'background-color: Blue; width: 500px';

btns[1].style.borderRadius = '100%';
circles[0].style.backgroundColor = 'red';

// for (let i = 0; i < hearts.length; i++) {
//     hearts[i].style.backgroundColor = 'blue';
// }

hearts.forEach(item => {
    item.style.backgroundColor = 'blue';
});

const div = document.createElement('div');
// const text = document.createTextNode('I was here');

div.classList.add('black');

// document.body.append(div);
document.querySelector('.wrapper').append(div);
// wrapper.appendChild(div);
// wrapper.prepend(div);
// hearts[0].before(div);
// hearts[0].after(div);
// wrapper.insertBefore(div, hearts[2]); // old method
// circles[0].remove();
// wrapper.removeChild(hearts[1]);  // old method
// hearts[0].replaceWith(circles[0]);
// wrapper.replaceChild(circles[0], hearts[0]);  // old method

// div.innerHTML = "<h1>Hello World</h1>";
div.textContent = "Hello";