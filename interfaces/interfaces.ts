interface Computer {
    readonly id: number;
    brand: string;
    ram: number;
    upgradeRam (increase: number): number;
    storage?: number;
}

const laptop1: Computer = {
    id: 1,
    brand: 'asus',
    ram: 8,
    upgradeRam (amout) {
        this.ram += amout;
        return this.ram;
    },
};

laptop1.storage = 256;
console.log(laptop1.upgradeRam(8));

console.log(laptop1);

///

interface Person {
    name: string;
    getDetails (): string;
}

interface DogOwner{
    dogName: string;
    getDogDetails (): string;
}

interface Person {
    age: number;
}

const person: Person = {
    name: 'Jean-Christophe',
    age: 39,
    getDetails () {
        return `Name: ${this.name}, Age: ${this.age}`;
    },
};

interface Employee1 extends Person {
    employeeId: number;
}

const employee: Employee1 = {
    name: 'jc',
    age: 39,
    employeeId: 1,
    getDetails () {
        return `Name: ${this.name}, Age: ${this.age}, Employee ID: ${this.employeeId}`;
    }
}
console.log(person.getDetails());
console.log(employee.getDetails());

interface Manager1 extends Person, DogOwner {
    managePeople (): void;
}

const manager: Manager1 = {
    name: 'bob',
    age: 35,
    dogName: 'rex',
    getDetails() {
        return `Name: ${this.name}, Age: ${this.age}`;
    },
    getDogDetails() {
        return `Name: ${this.dogName}`
    },
    managePeople () {
        console.log('Managing people...');        
    }
};

manager.managePeople();

///

function getEmployee (): Person1 | DogOwner1 | Manager2 {
    const random = Math.random()

    if (random < 0.33) {
        return {
            name: 'john',
        };
    } else if (random < 0.66) {
        return {
            name: 'sarah',
            dogName: 'rex',
        };
    } else {
        return {
            name: "bob",
            managePeople() {
                console.log('Managing people...');
            },
            delegateTasks() {
                console.log('Managing people...');
            },
        }
    };
}

interface Person1 {
    name: string;
}

interface DogOwner1 extends Person1 {
    dogName: string;
}

interface Manager2 extends Person1 {
    managePeople (): void;
    delegateTasks (): void;
}

const employee2: Person1 | DogOwner1 | Manager2 = getEmployee();
console.log(employee2);

function isManager (obj: Person1 | DogOwner1 | Manager2): obj is Manager2 {
    return 'managePeople' in obj;
}

if (isManager(employee2)) {
    employee2.delegateTasks();
}
console.log(isManager(employee2));
