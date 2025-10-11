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
console.log(merge({ name: 'Alice' }, { email: 'sfsdf' }));
//# sourceMappingURL=index.js.map