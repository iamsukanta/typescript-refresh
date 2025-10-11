type User = {
    id: number,
    name: string,
    email: string
}

type UserKeys = keyof User;
const myId: UserKeys = 'id';
console.log(myId);

const person = { id: 1, name: 'John' };
const personType = typeof person;
console.log(personType); // "object"
