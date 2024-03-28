function sayHi(name: string) {
    console.log(`Hello there ${name.toUpperCase()}`);
}   

sayHi('jean-christophe');

///

function calculateDiscount(price: number): number {
    const hasDiscount = true;

    if (hasDiscount) {
        return price;
    }

    return price * 0.9;
}

const finalPrice = calculateDiscount(200);
console.log(finalPrice);

///

function addThree(number: any) {
    let anotherNumber: number = 3;
    return number + anotherNumber;
}

const result = addThree(3);
const someValue = result;

// someValue.myMethod();
console.log(result);

///

const names1: string[] = ['john', 'jane', 'jim', 'jill'];

function isNameInList(name: string): boolean {
    return names1.includes(name);
}

let nameToChek = 'john';

if(isNameInList(nameToChek)) {
    console.log(`${nameToChek} is in the list`);
} else {
    console.log(`${nameToChek} is not in the list`)
}

///

function calculatePrice(price: number, discount: number) {
    return price - (discount || 0);
}

let priceAfterDiscount = calculatePrice(100, 20);
console.log(priceAfterDiscount);

function calculateScore(initialScore: number, penaltyPoints: number = 0):number {
    return initialScore - penaltyPoints;
}

let scoreAfterPenalty = calculateScore(100, 20);
let scoreWithoutPenalty = calculateScore(300);
console.log(scoreAfterPenalty);
console.log(scoreWithoutPenalty);

///

function sum(message: string,...numbers1: number[]): string {
    const doubled = numbers1.map((num) => num * 2);
    console.log(doubled);

    let total = numbers1.reduce((previous, current) => {
        return previous + current;
    }, 0);
    return `${message}${total}`;
}

let result1 = sum('The total is: ',1,2,3,4,5);
console.log(result1);

///

function logMessage(message: string) {
    console.log(message);
}
logMessage('Hello there!');

///

function processInput(input: string | number) {

    if(typeof input === 'number') {
        console.log(input * 2);
    } else {
        console.log(input.toLowerCase());
    }
}

processInput(10);
processInput('Hello');

///

function createEmployee({ id }:{ id: number }):{ id: number; isActive: boolean }{
    return {id,isActive: id % 2 === 0 };
}

const first  = createEmployee({id:1});
const second = createEmployee({id:2});
console.log(first, second);

///

function createStudent( student: {id: number; name: string}):void {
    console.log(`Welcome to the course ${student.name.toUpperCase()}!!!`);
}

const newStudent = {
    id: 1,
    name: 'angus',
}

const showStudent = createStudent(newStudent);
console.log(showStudent);

///

function processData( input: number | string, config:{reverse: boolean} = 
    { reverse: false} ): string | number {

    if(typeof input === 'number') {
        return input * input;
    } else {
        return config.reverse? input.toUpperCase().split('').reverse().join(''):
        input.toUpperCase();
    } 
}

console.log(processData(10));
console.log(processData('Hello!'));
console.log(processData('Hi!', { reverse: true }));

///

