console.log('Hello, World!');
function greet(name: string): string {
    return `Hello, ${name}!`;
};
greet('TypeScript');  

let firstName: string = 'John';
let lastName: string = 'Doe';

function fullName(first: string, last: string): string {
    return `${first} ${last}`;
};

fullName(firstName, lastName);


let myArrry: string[] = ['apple', 'banana', 'cherry'];

interface User {
    id: number; 
    name: string;
    email: string;
};

interface UserAction extends User {
    action?: () => string;
};

interface Admin extends User {
    role?: string;
};

let users: UserAction[] = [];
users.push({ id: 1, name: 'Alice', email: 'alice@gmail.com'});