
let person2: [string, number] = ['john', 25];

let date: [number, number, number] = [12, 17, 2001];
console.log(date);


function getPerson (): [string, number]{
    return ['john', 25];
}

let randomPerson = getPerson();
console.log(randomPerson[0]);
console.log(randomPerson[1]);

let susan1: [string, number?] = ['susan', 36];

///

enum ServerResponseStatus {
    Success = 'Success',
    Error = 'Error',
}

Object.values(ServerResponseStatus).forEach((value) => {
    if (typeof value === 'number') {
        console.log(value);
    
    }
})

console.log(ServerResponseStatus);


interface ServerResponse{
    result: ServerResponseStatus;
    data: string[];
}

function getServerResponse (): ServerResponse{
    return {
        result: ServerResponseStatus.Success,
        data: ['first item', 'second item'],
    };
}

const response: ServerResponse = getServerResponse()
console.log(response);

