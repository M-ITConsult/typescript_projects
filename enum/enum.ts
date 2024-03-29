enum UserRole {
    Admin,
    Manager,
    Employee,
}

type User1 = {
    id: number,
    name: string,
    role: UserRole,
    contact: [string, string];
};

function createUser(user: User1): User1{
    return user;
}

const user: User1 = createUser({
    id: 1,
    name: 'john doe',
    role: UserRole.Admin,
    contact: ['john@gmail.com', '123-456-789'],
});

console.log(user);

///

let someValue1: any = 'this is a string';

let strLength: number = (someValue1 as string).length;


type Bird = {
    name: string;
};

let birdString = '{"name": "Eagle"}';
let dogString = '{"breed": "Poodle"}';

let birdObject = JSON.parse(birdString);
let dogObject = JSON.parse(dogString);

let bird = birdObject as Bird;
let dog = dogObject as Bird;

console.log(bird.name);
console.log(dog.name);

///

enum Status{
    Pending = 'pending',
    Declined = 'declined',
}

type User2 = {
    name: string;
    status: Status;
};

const statusValue = 'pending';

const user3: User2 = { name: 'john', status: statusValue as Status };
console.log(user3);
