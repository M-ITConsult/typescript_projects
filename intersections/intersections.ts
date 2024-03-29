type Book = { id: number; name: string; price: number };
type DiscountBook = Book & { discount: number };

const book1: Book = {
    id: 1,
    name: 'how to cook a dragon',
    price: 15,
};

const book2: Book = {
    id: 2,
    name: 'the secret life of unicorns',
    price: 18,
};

const discountedBook: DiscountBook = {
    id: 3,
    name: 'Gnome vs. Goblins: The Ultimate Guide',
    price: 25,
    discount: 0.15,
};

///
const propName = 'age';

type Animal = {
    [propName]: number;
}

let tiger: Animal = { [propName]: 5 };

///

interface Book1 {
    readonly isbn: number;
    title: string;
    author: string;
    genre?: string;
    printAuthor (): void;
    printTitle (message: string): string;
    printSomething: (someValue: number) => number;
}


const deepWork: Book1 = {
    isbn: 123,
    title: 'deep work',
    author: 'cal newport',
    printTitle (message) {
        return `${this.title} ${message}`;  
        
    },
    printSomething: function (someValue) {
        return someValue;
    },
    printAuthor: () => {
        console.log(deepWork.author);
    }
};

deepWork.printAuthor();
const result3 = deepWork.printSomething(84);
const result2 = deepWork.printTitle('is awesome book');
console.log(result2);
console.log(result3);