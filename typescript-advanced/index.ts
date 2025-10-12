type User = {
    id: number;
    name: string;
    email: string
}

type UserKeys = keyof User;
const myId: UserKeys = 'id';
console.log(myId);

const person = { id: 1, name: 'John' };
const personType = typeof person;
console.log(personType); // "object"



type OptionalUser = {
    [K in keyof User]?: User[K]
}

const optionalUser: OptionalUser = {
    email: 'sampleuser@gmail.com',
    name: 'Alice'
}
console.log(optionalUser);


// Conditional Types

type IsString<T> = T extends string ? 'yes' : 'no';

type Test1 = IsString<string>;

const test1: Test1 = 'yes';
console.log(test1);


type Test2 = IsString<number>;

const test2: Test2 = 'no';
console.log(test2);

// Infer Keyword
type CustomReturnType<T> = T extends (...args: any[]) => infer R ? R : any;
type Func = (a: number, b: number) => number;
type Result = CustomReturnType<Func>;
const result: Result = 50;
console.log(result);

// Generic Constraints and Defaults
function merge<T extends object, U extends object = {}>(obj1: T, obj2: U): T & U {
    return { ...obj1, ...obj2 };
}

console.log(merge({ name: 'Alice'}, {}));


// Discriminated Unions
type Shape = 
    | { kind: 'circle'; radius: number }    
    | { kind: 'square'; sideLength: number };

function area(shape: Shape): number {
    switch (shape.kind) {
        case 'circle':
            return Math.PI * shape.radius ** 2;
        case 'square':
            return shape.sideLength ** 2;
    }
}

console.log(area({ kind: 'circle', radius: 5 }));
console.log(area({ kind: 'square', sideLength: 4 }));

// Index access Types

type MyUser = { id: number, profile: { name: string, age: number } };

type userNameType = MyUser["profile"]["name"];
const userName: userNameType = "Alice";
console.log(userName);

// Utility Types - Readonly, PartialUser, Pick and Omit

type Readuser = Readonly<User>;
const readUser: Readuser = { id: 5, name: 'John', email: 'dsf' };
console.log(readUser);

type PartialUser = Partial<User>;
const newUser: PartialUser = { name: 'Alice' };
console.log(newUser);

type PickUser = Pick<User, 'id' | 'name'>;
const pickedUser: PickUser = { id: 10, name: 'Bob' };
console.log(pickedUser);

type OmitUser = Omit<User, 'email'>;
const omittedUser: OmitUser = { id: 20, name: 'Charlie' };
console.log(omittedUser);

type RecordUser = Record<'id' | 'name', string | number | boolean>;
const recordUser: RecordUser = { id: 'dd', name: true };
console.log(recordUser);

type RequiredUser = Required<Partial<User>>;
const requiredUser: RequiredUser = { id: 1, name: 'Alice', email: 'sukantabalacste28@gmail.com' };
console.log(requiredUser);

// Template Literal Types
type EventName = 'click' | 'scroll' | 'mousemove';
type EventHandler = `on${Capitalize<EventName>}`;

const handleEvent: EventHandler = 'onScroll';
console.log(handleEvent);
