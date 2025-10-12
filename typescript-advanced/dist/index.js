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
//# sourceMappingURL=index.js.map