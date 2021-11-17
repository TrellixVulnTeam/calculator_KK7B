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
    let a = undefined;
    const builder = NumberBuilder();
    let nextOperation = undefined;
    let newExpression = true;

    /* Decide if subtract button should negate next number or act as a subtraction in an expression. */
    let negate = false;

    return {
        pressNumber: (n) => {
            newExpression = false;
            display += n.toString();
            builder.add(n);
        },
        pressAdd: () => {
            newExpression = false;
            display += ' + ';
            nextOperation = operator.ADD;
            if (negate) {
                a = builder.buildNegative();
            } else {
                a = builder.buildPositive();
            }
        },
        pressSubtract: () => {
            display += ' - ';
            if (newExpression) {
                negate = true;
            } else {
                nextOperation = operator.SUBTRACT;
                if (negate) {
                    a = builder.buildNegative();
                } else {
                    a = builder.buildPositive();
                }
            }
            newExpression = false;
        },
        pressEquals: () => {
            newExpression = true;
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