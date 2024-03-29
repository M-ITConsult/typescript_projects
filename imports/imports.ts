import newStudent, { sayHello, person, type Student } from "../modules/modules";

sayHello('Typescript');
console.log(newStudent);
console.log(person);

const anotherStudent: Student = {
    name: 'Bob',
    age: 23,
}

console.log(anotherStudent);


