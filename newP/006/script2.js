'use strict';

// function showThis() {
//     console.log(this);
// }
// showThis();

// 1) Обычная функция зис будет равна виндов , если стоит строгий режим то будет равно андефинед

// function showThis(a, b) {
//     console.log(this);

//     function sum() {
//         console.log(this);
//         return a + b;
//     }

//     console.log(sum());
// }
// showThis(4, 5);

// const obj = {
//     a: 20,
//     b: 15,
//     sum: function() {
//         console.log(this);
//     }
//     shout();
// };

// obj.sum();

//2)Контекст у мутодов обьекта будет обьект

// function User(name, id) {
//     this.name = name;
//     this.id = id;
//     this.human = true;
// }
// let ivan = new User('Ivan', 23);

//3) this в конструкторах и клссаъ это новый экземпляр обьекта

// function sayName(surname) {
//     console.log(this);
//     console.log(this.name + surname);
// }

// const user = {
//     name: 'John'
// };

// sayName.call(user, ' Smith');
// sayName.apply(user, [' Smith']);

// function count(num) {
//     return this * num;
// }

// const double = count.bind(2);
// console.log(double(3));
// console.log(double(19));

//4) ручная привязка зис

// const btn = document.querySelector('button');

// btn.addEventListener('click', function() {
//     this.style.backgroundColor = 'red';
// });

// const obj = {
//     num: 5,
//     sayNumber: function() {
//         const say = () => {
//             console.log(this);
//         };

//         say();
//     }
// };

// obj.sayNumber();

// const double = a => a *2;