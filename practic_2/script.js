// console.log(document.body);
// console.log(document.documentElement);
// console.log(document.body.childNodes);
// console.log(document.body.firstChild);
// console.log(document.body.lastChild);

// console.log(document.querySelector('#current').parentNode.parentNode);
// console.log(document.querySelector('#current').parentElement);

// console.log(document.querySelector('[data-current="3"').nextElementSibling);

// for (let node of document.body.childNodes) {
//     if (node.nodeName == '#text') {
//         continue;
//     }
//     console.log(node);
// }

// function pow(x, n) {
//     let result = 1;

//     for(let i = 0; i < n; i++) {
//         result *= x;
//     }
//     return result;
// }

// pow(2, 1);

// function pow(x, n) {
//     if(n === 1) {
//         return x;
//     } else {
//         return x * pow(x, n - 1);
//     }

// let students = {
//     js: [{
//         name: 'John',
//         progress: 100
//     }, {
//         name: 'Ivan',
//         progress: 60
//     }],

//     html: {
//         basic: [{
//             name: 'Peter',
//             progress: 20
//         }, {
//             name: 'Ann',
//             progress: 18
//         }],

//         pro: [{
//             name: 'Sam',
//             progress: 10
//         }],

//         semi: {
//             students: [{
//                 name: 'Test',
//                 progress: 100
//             }]
//         }
//     }
// };

// function gettotalProgressByIteration(data) {
//     let total = 0;
//     let students = 0;

//     for (let Course of Object.values(data)) {
//         if (Array.isArray(Course)) {
//             students += Course.length;
//             for (let i = 0; i < Course.length; i++) {
//                 total += Course[i].progress;
//             }
//         } else {
//             for (let subCourse of Object.values(Course)) {
//                 students += subCourse.length;

//                 for (let i = 0; i < subCourse.length; i++) {
//                     total += subCourse[i].progress;
//                 }
//             }
//         }
//     }

//     return total / students;
// }

// // console.log(gettotalProgressByIteration(students));

// function getTotalprogressByRecusion(data) {
//     if (Array.isArray(data)) {
//         let total = 0;

//         for (let i = 0; i < data.length; i++) {
//             total += data[i].progress;
//         }

//         return [total, data.length];
//     } else {
//         let total = [0, 0];

//         for (let subData of Object.values(data)) {
//             const subDataArr = getTotalprogressByRecusion(subData);
//             total[0] += subDataArr[0];
//             total[1] += subDataArr[1];
//         }

//         return total;
//     }
// }

// const result = getTotalprogressByRecusion(students);
// console.log(result[0] / result[1]);