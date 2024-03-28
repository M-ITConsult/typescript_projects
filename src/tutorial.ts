
let awesomeName:string = 'shakeAndBake';
awesomeName = 'something';
awesomeName = awesomeName.toUpperCase();
console.log(awesomeName);

let amount:number = 20;
amount = 12 - 1;
console.log(amount);

let isAwesome:boolean = true;
isAwesome = false;
console.log(isAwesome);

let greeting: string = 'Hello, Typescript!';
greeting = greeting.toUpperCase();
console.log(greeting);

let age:number = 39;
age = age + 5;
console.log(age);

let isAdult: boolean = age >= 18;
isAdult = !isAdult;
console.log(isAdult);

console.log(greeting, age, isAdult);

let tax:number | string = 10;
tax = 100;
tax = '$10';
console.log(tax);

let requestStatus: 'pending' | 'success' | 'error' = 'pending';
requestStatus = 'success';
requestStatus = 'error';
// requestStatus = 'random';

let notSure:any = 4;
notSure = 'maybe a string instead';
notSure = false;