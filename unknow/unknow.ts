let unknowValue: unknown;

unknowValue = 'Hello there!';
unknowValue = [1, 2, 3];
unknowValue = 42.33455;

if (typeof unknowValue === 'number') {
    unknowValue.toFixed(2);
}

function runSomeCode () {
    const random = Math.random();
    if (random < 0.5) {
        throw new Error('there was error...');
    } else {
        throw 'some error';
    }
}

try {
    runSomeCode()
} catch (error) {
    if (error instanceof Error) {
        console.log(error.message);
    } else {
        console.log(error);
    }
}

///

type Theme1 = 'light' | 'dark';

function checkTheme (theme: Theme): void{
    if (theme === 'light') {
        console.log('light theme');
        return;
    }
    if (theme === 'dark') {
        console.log('dark theme');
        return;
    }
    theme;
}

enum Color {
    Red,
    Blue,
    Green,
}

function getColorName (color: Color) {
    switch (color) {
        case Color.Red:
            return 'Red';
        case Color.Blue:
            return 'Blue';
        case Color.Green:
            return 'Green';
        default:
            // at build time
            // let unexpectedColor: never = color;
            // at runtime
            throw new Error(`Unexpected color value: ${color}`);
    }
}

console.log(getColorName(Color.Red));
console.log(getColorName(Color.Blue));
console.log(getColorName(Color.Green));
