"use strict";
const myId = 'id';
console.log(myId);
const person = { id: 1, name: 'John' };
const personType = typeof person;
console.log(personType);
const optionalUser = {
    email: 'sampleuser@gmail.com',
    name: 'Alice'
};
console.log(optionalUser);
const test1 = 'yes';
console.log(test1);
const test2 = 'no';
console.log(test2);
const result = 50;
console.log(result);
function merge(obj1, obj2) {
    return Object.assign(Object.assign({}, obj1), obj2);
}
console.log(merge({ name: 'Alice' }, {}));
function area(shape) {
    switch (shape.kind) {
        case 'circle':
            return Math.PI * shape.radius ** 2;
        case 'square':
            return shape.sideLength ** 2;
    }
}
console.log(area({ kind: 'circle', radius: 5 }));
console.log(area({ kind: 'square', sideLength: 4 }));
const userName = "Alice";
console.log(userName);
const readUser = { id: 5, name: 'John', email: 'dsf' };
console.log(readUser);
const newUser = { name: 'Alice' };
console.log(newUser);
const pickedUser = { id: 10, name: 'Bob' };
console.log(pickedUser);
const omittedUser = { id: 20, name: 'Charlie' };
console.log(omittedUser);
const recordUser = { id: 'dd', name: true };
console.log(recordUser);
const requiredUser = { id: 1, name: 'Alice', email: 'sukantabalacste28@gmail.com' };
console.log(requiredUser);
const handleEvent = 'onScroll';
console.log(handleEvent);
function getProperty(obj, key) {
    return obj[key];
}
const user = { id: 1, name: 'Alice', email: 'kkk@gmail.com' };
const userName1 = getProperty(user, 'email');
console.log(userName1);
function outer(x = 90) {
    let message = 'I am from outer function';
    function inner() {
        console.log(message);
        console.log(x, 'outer function parameter');
    }
    inner();
    return inner;
}
const innerFunc = outer(10);
innerFunc();
function myCallBackFunction(callback) {
    console.log('I am from callback function');
    let sum = 0;
    for (let i = 0; i <= 10; i++) {
        sum += i;
    }
    console.log('Sum from 0 to 10 is:', sum);
    callback && callback();
}
myCallBackFunction();
const userType = {
    id: 1,
    name: 'Alice'
};
console.log(userType);
const employeeInterface = {
    id: 1,
    name: 'Bob',
    salary: 50000
};
console.log(employeeInterface);
const u = { name: "Alice", age: 25 };
console.log(u);
//# sourceMappingURL=index.js.map

function myApp() {
    return 'Ok';
}

myApp();

function myApp() {
    return 'Not Ok';
}

myApp();
