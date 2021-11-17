import {
    NumberBuilder
} from './number.mjs';

const operator = {
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
            nextOperation = operator.ADD;
            a = builder.buildPositive();
        },
        pressSubtract: () => {
            display += ' - ';
            nextOperation = operator.SUBTRACT;
            a = builder.buildPositive();
        },
        pressEquals: () => {
            const b = builder.buildPositive();
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