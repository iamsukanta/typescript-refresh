type User = {
    id: number,
    name: string,
    email: string
}

type UserKeys = keyof User;
const myId: UserKeys = 'id';
console.log(myId);