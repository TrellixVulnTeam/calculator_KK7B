import {
    NumberBuilder
} from './number.mjs';

const operation = {
    ADD: (a, b) => {
        return a + b;
    },
    SUBTRACT: (a, b) => {
        return a - b;
    },
};

const Calculator = () => {
    let display = '';
    let a = 0;
    const builder = NumberBuilder();
    let nextOperation = undefined;

    return {
        pressNumber: (n) => {
            display += n.toString();
            builder.add(n);
        },
        pressAdd: () => {
            display += ' + ';
            nextOperation = operation.ADD;
            a = builder.build();
        },
        pressSubtract: () => {
            display += ' - ';
            nextOperation = operation.SUBTRACT;
            a = builder.build();
        },
        pressEquals: () => {
            const b = builder.build();
            display = nextOperation(a, b).toString();
        },
        readDisplay: () => {
            return display;
        }
    };
};

export {
    Calculator
};