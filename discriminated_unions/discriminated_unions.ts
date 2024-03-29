type IncrementAction = {
    type: 'increment';
    amout: number;
    timestamp: number;
    user: string;
};

type DecrementAction = {
    type: 'decrement';
    amout: number;
    timestamp: number;
    user: string;
};

type Action = IncrementAction | DecrementAction;

function reducer(state: number, action: Action) {
    switch (action.type) {
        case 'increment':
            return state + action.amout;
        case 'decrement':
            return state - action.amout;
        default: 
            const unexpectedAction: never = action;
            throw new Error(`Unexpected action: ${unexpectedAction}`)
    }
};

const newState = reducer(15, {
    user: 'john',
    type:'decrement',
    amout: 5,
    timestamp: 123456,
});

///

// let array1: string[] = ['Apple', 'Banana', 'Mango'];
// let array2: number[] = [1, 2, 3];
// let array3: boolean[] = [true, false, true];

let array1: Array<string> = ['Apple', 'Banana', 'Mango'];
let array2: Array<number> = [1, 2, 3];
let array3: Array<boolean> = [true, false, true];

///

function createString (arg: string): string{
    return arg;
}


function createNumber (arg: number): number{
    return arg;
}