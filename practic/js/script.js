"use strict";

// if (4 == 9) {
//     console.log('Ok');
// } else {
//     console.log('Error');
// }

// const num = 50;

// if (num < 49) {
//     console.log('error');
// } else if (num > 100) {
//     console.log('too mach');
// } else {
//     console.log('ok!');
// }

// (num == 50) ? console.log('OK!') : console.log('ERROR');

// const num = 51;

// switch (num) {
//     case 49:
//         console.log('error');
//         break;
//     case 100:
//         console.log('error');
//         break;
//     case 50:
//         console.log('OK!');
//         break;
//     default:
//         console.log('Its good');
//         break;
// }

// const hamburger = 5;
// const fries = 0;

// if (hamburger && fries) {
//     console.log('i am not want ot eat');
// }


// const hamburger = 3;
// const fries = 1;
// const cola = 0;

// if (hamburger === 3 && cola ===1 && fries === 1) {
//     console.log('All not want ot eat');
// } else {
//     console.log('We are go');
// }


// const hamburger = 3;
// const fries = 3;
// const cola = 0;
// const nuggets = 2;

// if (hamburger === 3 && cola === 2 || fries === 3 && nuggets) {
//     console.log('We happy');
// } else {
//     console.log('We are go');
// }


// let johnReport , alexReport , samReport , mariaReport = 'done';

// console.log(johnReport || alexReport || samReport || mariaReport);

// const hamburger = 3;
// const fries = 3;
// const cola = 0;
// const nuggets = 2;

// if (hamburger === 3 && cola || fries === 3 && nuggets) {
//    console.log('Done!');
// }

// console.log(hamburger === 3 && cola || fries === 3 && nuggets);


// let num = 50;

// while (num <= 55 ) {
//     console.log(num);
//     num++;
// }

// //------------------------

// do {
//     console.log(num);
//     num++;
// }
// while (num <= 55);

//-------------------------

// for(let i = 1; i < 8; i++) {
//     console.log(i);
// }


// for(let i = 1; i < 8; i++) {
//     if (i === 6) {
//         continue;
//     }
//     console.log(i);
// }


// for (let i = 0; i < 3; i++) {
//     console.log(i);
//     for (let j = 0; j < 3; j++) {
//         console.log(j);
//     }
// }


// let result = '';
// const lengh = 7;

// for(let i = 1; i < lengh; i++) {

//     for(let j = 0; j < i; j++) {
//         result += "*";
//     }
//     result += '\n';
// }

// console.log(result);


// first: for (let i = 0; i < 3; i++) {
//     console.log(`First level:${i}`);
//     for (let j = 0; j < 3; j++) {
//         console.log(`Second level:${j}`);
//         for (let k = 0; k < 3; k++) {
//             if(k === 2) break first;
//             console.log(`Thirth level:${k}`);

//         }
//     }
// }

// let num = 20;

// function showFirstMessage(text) {
//     console.log(text);
//     num = 10;
// }

// showFirstMessage('Hello World');
// console.log(num);

// function calc(a, b) {
//     return (a + b);
// }
// console.log(calc(4, 4));
// console.log(calc(5, 1));
// console.log(calc(7, 2));


// function ret() {
//     let num = 50;
//     return num;
// }

// const anotherNum = ret();
// console.log(anotherNum);


// const logger = function() {
//     console.log('Hello');
// };
// logger();

// const calc = (a, b) =>{ return a + b};

// const usdCurr = 28;
// const discount = 0.9;

// function convert(amount, curr) {
//     return curr * amount;
// }

// function promotion(result) {
//     console.log(result * discount);
// }

// const res = convert(500, usdCurr);
// promotion(res);

// function test () {
//     for (let i = 0; i < 5; i++) {
//         console.log(i);
//         if (i === 3) {
//             return ;
//         }
//         console.log('done');
//     }
// }
// test();

// function doNothing () {};
// console.log(doNothing() === undefined);


// let fruit = 'Some Fruit';
// console.log(fruit.indexOf("q"));

// const logg = 'Hello World';
// console.log(logg.slice(6, 11));
// console.log(logg.substring(6, 11));

// const num = 12.2;
// console.log(Math.round(num));

// const test = '12.2px';
// console.log(parseInt(test))

// function First () {
//     setTimeout(function() {
//         console.log(1);   
//     }, 500);
// }

// function Second () {
//     console.log(2);
// }

// First();
// Second();

// function learnJS(lang, callback) {
//     console.log(`I learn: ${lang}`);
//     callback();
// }

// function done () {
//     console.log('I finish thiss lesson');
// }

// learnJS('JavaScript', done);

// 

// const arr = [1, 2, 3, 4, 5, 8];
// arr.sort(compareNum);
// console.log(arr);

// function compareNum(a, b) {
//     return a - b;
// }


// // arr.pop();
// // arr.push(20);
// // console.log(arr);

// // for(let i = 0; i < arr.length; i++) {
// //     console.log(arr[i]);
// // }


// // for (let value of arr) {
// //     console.log(value);
// // }

// // 
// arr.forEach(function(item, i, arr) {
//     console.log(`${i}: ${item} in massive ${arr}`);
// })

// const str = prompt("", "");
// const products = str.split(", ");
// products.sort();
// console.log(products.join('; '));

// function copy(mainObj) {
//     let objCopy = {};
//     let key;
//     for (key in mainObj) {
//         objCopy[key] = mainObj [key];
//     }
//     return objCopy;
// }

// const numbers = {
//     a: 2,
//     b: 5,
//     c: {
//         x: 7,
//         y: 4
//     }
// };

// const newNumbers = copy(numbers);

// newNumbers.a = 10;

// console.log(newNumbers);


// const add = {
//     d: 17,
//     e: 20
// };

// console.log(Object.assign(numbers, add));

// const oldArray = ['a', 'b', 'c'];
// const newArray = oldArray.slice();

// newArray[1] = 'asdsgdsdfse';
// console.log(newArray);
// console.log(oldArray);


// const video = ['YouTube', 'Vimeo', 'RuTube'],
//     blogs = ['WordPress', 'LiveJournal', 'Blogger'],
//     internet = [...video, ...blogs, 'VK', 'FaceBook'];

// console.log(internet);

// function log (a, b, c) {
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }

// const num = [2, 5, 7];
// log(...num);

// const array = ['a', 'b'];
//  const newArray = [...array];

//  const q = {
//     one:1,
//     two:2
//  };

//  const newObj = {...q};

// const personalPlanPeter = {
//     name: "Peter",
//     age: "29",
//     skills: {
//         languages: ['ru', 'eng'],
//         programmingLangs: {
//             js: '20%',
//             php: '10%'
//         },
//         exp: '1 month'
//     }
// };

// function showExperience(plan) {

// }

// function showProgrammingLangs(plan) {

// }