type ValueType = string | number | boolean;

let value1: ValueType;
const random1 = Math.random();
value1 = random1 < 0.33 ? 'Hello' : random1 < 0.66 ? 123.456 : true;

function checkValue (value1: ValueType): void {
    if (typeof value1 === 'string') {
        console.log(value1.toLowerCase());
        return;
    }
    if (typeof value1 === 'number') {
        console.log(value1.toFixed(2));
        return;
    }
    console.log(`boolean ${value1}`);
    
}

checkValue(value1);

///

type Dog = { type: 'dog'; name: string; bark: () => void; };
type Cat = { type: 'cat'; name: string; meow: () => void; };
type Animal1 = Dog | Cat;

function makeSound (animal: Animal1) {
    if ('bark' in animal) {
        animal.bark();
    } else {
        animal.meow();
    }
}

///

function printLength (str: string | null | undefined) {
    if (str) {
        console.log(str.length);
    } else {
        console.log('no string provided');
    }
}

printLength('hello');
printLength('');
printLength(null);
printLength(undefined);

///

try {
    throw new Error('This is an error')
} catch (error) {
    if (error instanceof Error) {
        console.log(`Caught an Error object: ${error.message}`);
    } else {
        console.log('unknow error...');       
    }
}

///

function checkInput (input: Date | string): string{
    if (input instanceof Date) {
        return input.getFullYear().toString();
    }
    return input;
}

const year = checkInput(new Date());
const random2 = checkInput('2020-05-05');
console.log(year);
console.log(random2);
