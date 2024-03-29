enum UserRole {
    Admin, Manager, Employee,
}

type User1 = {
    id: number,
    name: string,
    role: UserRole,
    contact: [string, string];
};

function createUser (user: User1): User1{
    return user;
}

const user: User1 = createUser({
    id: 1,
    name: 'john doe',
    role: UserRole.Admin,
    contact: ['john@gmail.com', '123-456-789'],
})

