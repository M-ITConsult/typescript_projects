
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

//

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

let random;

///

const books = ['1984', 'Brave New World', 'Fahrenheit 451'];

let foundBook: string | undefined;
for (let book of books) {
    if(book === '1984') {
        foundBook = book;
        foundBook = foundBook.toUpperCase();
        break;
    }
}

console.log(foundBook?.length);

///

let discount:number | string = 20;
discount = '20%';

let orderStatus: 'processing' | 'shipped' | 'delivered' = 'processing';
orderStatus = 'shipped';

///

let prices:number[] = [100, 75, 42];

let fruit: string[] = ['apple', 'orange'];

let emptyValues:number[] = [];

let names = ['peter', 'susan', 1];
let array:(string | boolean)[] = ['apple', true, 'orange', false];

///

let temperatures:number[] = [20, 25, 30];

let colors: string[] = ['red', 'green', 'blue'];

let mixedArray:(number | string)[] = [1, 'two', 3];

///

let car:{brand: string; year: number} = { brand: 'toyota', year: 2020 };
car.brand = 'ford';
let car1:{brand: string; year: number} = { brand: 'audi', year: 2022 };
console.log(car, car1);

let book = { title: 'book', cost: 20 };
let pen = { title: 'pen', cost: 20 };
let notebook = { title: 'notebook'};

let items: { readonly title: string; cost?: number }[] = [book, pen, notebook];

///

let bike: { brand: string; year: number } = { brand: 'yamaha', year: 2010 };

let laptop: { brand: string; year: number } = { brand: 'Asus', year: 2020 };

let product1 = { title: 'shirt', price: 20 };
let product2 = { title: 'pants'};
let products: { title: string; price?: number }[] = [product1, product2];

products.push({ title: 'shoes'});
console.log(products);

///


