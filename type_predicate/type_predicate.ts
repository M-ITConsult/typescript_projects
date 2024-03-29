type Student = {
    name: string;
    study: () => void;
};

type User3 = {
    name: string;
    login: () => void;
};

type Person2 = Student | User3;

const randomPerson1 = (): Person2 => {
    return Math.random() > 0.5
        ? {
            name: 'john', study: () => console.log('Studying')
        } : {
            name: 'mary', login: () => console.log('Logging in')
        };
};

const person3 = randomPerson1();

function isStudent (person3: Person2):person3 is Student {
    return (person3 as Student).study !== undefined;
}

if (isStudent(person3)) {
    person3.study();
} else {
    person3.login();
}