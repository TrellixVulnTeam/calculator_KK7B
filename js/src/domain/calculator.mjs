import {
    NumberBuilder
} from './number.mjs';

const Calculator = () => {
    let display = '';
    let a = 0;
    const builder = NumberBuilder();
    let nextOperation = '';

    return {
        pressNumber: (n) => {
            display += n.toString();
            builder.add(n);
        },
        pressAdd: () => {
            display += ' + ';
            nextOperation = '+';
            a = builder.build();
        },
        pressSubtract: () => {
            nextOperation = '-';
            a = builder.build();
        },
        pressEquals: () => {
            let operation = (a, b) => {
                return a + b;
            };
            if (nextOperation === '-') {
                operation = (a, b) => {
                    return a - b;
                };
            }
            const b = builder.build();
            display = (operation(a, b)).toString();
        },
        readDisplay: () => {
            return display;
        }
    };
};

export {
    Calculator
};