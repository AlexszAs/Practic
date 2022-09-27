'use strict';

function User(name, id) {
    this.name = name;
    this.id = id;
    this.human = true;
    this.hello = function() {
        console.log(`Hello ${this.name}`);
    };
}

User.prototype.exid = function() {
    console.log(`User ${this.name} exid`);
};

const ivan = new User('Ivan', 28);
const alex = new User('Alex', 18);

ivan.exid();

ivan.hello();
alex.hello();

console.log(ivan);
console.log(alex);