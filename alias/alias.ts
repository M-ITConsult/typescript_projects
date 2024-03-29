type User = { id: number; name: string; isActive: boolean };

const john: User = {
    id: 1,
    name: 'john',
    isActive: true,
};

const susan: User = {
    id: 1,
    name: 'susan',
    isActive: false,
};

function createUser(user: User): User {
    console.log(`Hello there ${user.name.toUpperCase()}!!!`);
    return user;
}

type StringOrNumber = string | number;

let value: StringOrNumber;
value = 'Hello';
value = 123;

type Theme = 'light' | 'dark';

let theme: Theme;
theme = 'dark';
theme = 'light';

function setTheme(t: Theme) {
    theme = t;
}

setTheme('dark');

///

type Employee = { id: number; name: string; department: string };
type Manager = { id: number; name: string; employees: Employee[] };

type Staff = Employee | Manager;

function printStaffDetails (staff: Staff): void{
    if ('employees' in staff) {
        console.log(`${staff.name} is an manager in the ${staff.employees.length} employees`);
    } else {
        console.log(`${staff.name} is an employee in the ${staff.department}`);
    }
}

const alice: Employee = { id: 1, name:'alice', department: 'Sales' };
const steve: Employee = { id: 1, name:'steve', department:'HR' };

const bob: Manager = { id: 1, name: 'bobo', employees: [alice, steve] };

printStaffDetails(alice);
printStaffDetails(bob);